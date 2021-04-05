'use strict'

var fs = require('fs')
var path = require('path')
var https = require('https')
var yauzl = require('yauzl')
var dsv = require('d3-dsv')
var concat = require('concat-stream')
var bail = require('bail')

var endpoint = 'https://www2.imm.dtu.dk/pubdb/edoc/imm6010.zip'

var found = false

https.get(endpoint, onresult)

function onresult(response) {
  response
    .pipe(fs.createWriteStream('archive.zip'))
    .on('close', onclose)
    .on('error', bail)
}

function onclose() {
  yauzl.open('archive.zip', {lazyEntries: true}, onopen)
}

function onopen(error, archive) {
  bail(error)

  read()

  archive.on('entry', onentry)
  archive.on('end', onend)

  function onentry(entry) {
    if (path.basename(entry.fileName) !== 'AFINN-111.txt') {
      return read()
    }

    found = true
    archive.openReadStream(entry, onreadstream)
  }

  function onreadstream(error, rs) {
    bail(error)
    rs.pipe(concat(onconcat))
    rs.on('end', read)
  }

  function onconcat(x) {
    var data = {}
    var rows = dsv.tsvParse('key\tvalue\n' + String(x))
    var index = -1

    while (++index < rows.length) {
      data[rows[index].key] = Number.parseInt(rows[index].value, 10)
    }

    fs.writeFile('index.json', JSON.stringify(data, null, 2) + '\n', bail)
  }

  function read() {
    archive.readEntry()
  }
}

function onend() {
  if (!found) {
    throw new Error('File not found')
  }
}

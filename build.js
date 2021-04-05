'use strict'

var fs = require('fs')
var path = require('path')
var https = require('https')
var Transform = require('readable-stream').Transform
var yauzl = require('yauzl')
var csv = require('csv-streamify')
var wrap = require('wrap-stream')
var join = require('join-stream')
var bail = require('bail')

var endpoint =
  'https://www2.imm.dtu.dk/pubdb/views/edoc_download.php/6010/zip/imm6010.zip'

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

    rs.pipe(csv({delimiter: '\t', objectMode: true}))
      .pipe(new Transform({objectMode: true, transform: transform}))
      .pipe(join(',\n'))
      .pipe(wrap('{\n', '\n}\n'))
      .pipe(fs.createWriteStream('index.json'))

    rs.on('end', read)
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

function transform(chunk, encoding, callback) {
  this.push('  "' + chunk[0] + '": ' + chunk[1])
  callback()
}

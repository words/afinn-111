import fs from 'fs'
import path from 'path'
import https from 'https'
import yauzl from 'yauzl'
import dsv from 'd3-dsv'
import concat from 'concat-stream'
import {bail} from 'bail'

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

    fs.writeFile(
      'index.js',
      'export var afinn111 = ' + JSON.stringify(data, null, 2) + '\n',
      bail
    )
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

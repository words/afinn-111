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

/**
 * @param {import('http').IncomingMessage} response
 */
function onresult(response) {
  response
    .pipe(fs.createWriteStream('archive.zip'))
    .on('close', onclose)
    .on('error', bail)
}

function onclose() {
  yauzl.open('archive.zip', {lazyEntries: true}, onopen)
}

/**
 * @param {Error?} error
 * @param {import('yauzl').ZipFile?} archive
 */
function onopen(error, archive) {
  bail(error)

  read()

  archive.on('entry', onentry)
  archive.on('end', onend)

  /**
   * @param {import('yauzl').Entry} entry
   */
  function onentry(entry) {
    if (path.basename(entry.fileName) !== 'AFINN-111.txt') {
      return read()
    }

    found = true
    archive.openReadStream(entry, onreadstream)
  }

  /**
   * @param {Error?} error
   * @param {import('stream').Readable?} rs
   */
  function onreadstream(error, rs) {
    bail(error)
    rs.pipe(concat(onconcat))
    rs.on('end', read)
  }

  /**
   * @param {Buffer} buf
   */
  function onconcat(buf) {
    var data = {}
    var rows = dsv.tsvParse('key\tvalue\n' + String(buf))
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

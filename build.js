import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import yauzl from 'yauzl'
import {tsvParse} from 'd3-dsv'
import concat from 'concat-stream'
import {bail} from 'bail'

const endpoint = 'https://www2.imm.dtu.dk/pubdb/edoc/imm6010.zip'

let found = false

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
 * @param {import('yauzl').ZipFile} archive
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
   * @param {import('stream').Readable} rs
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
    /** @type {Record<string, number>} */
    const data = {}
    const rows = tsvParse('key\tvalue\n' + String(buf))
    let index = -1

    while (++index < rows.length) {
      const row = rows[index]
      assert(typeof row.key === 'string', 'expected string key')
      assert(typeof row.value === 'string', 'expected string value')
      data[row.key] = Number.parseInt(row.value, 10)
    }

    fs.writeFile(
      'index.js',
      '/** @type {Record<string, number>} */\nexport const afinn111 = ' +
        JSON.stringify(data, null, 2) +
        '\n',
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

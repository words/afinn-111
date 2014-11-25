'use strict';

/**
 * Dependencies.
 */

var fs,
    toJSON;

toJSON = require('plain-text-data-to-json');
fs = require('fs');

/**
 * Data.
 */

var data;

data = toJSON(fs.readFileSync('data/AFINN/AFINN-111.txt', 'utf8'), {
    'delimiter': '\t'
});

/**
 * Parse.
 */

Object.keys(data).forEach(function (key) {
    data[key] = Number(data[key]);
});

/**
 * Write.
 */

fs.writeFileSync('data/afinn-111.json', JSON.stringify(data));

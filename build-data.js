'use strict';

var fs, textToJSON, data;

textToJSON = require('plain-text-data-to-json');
fs = require('fs');

data = textToJSON(fs.readFileSync('data/AFINN-111.txt', 'utf8'), {
    'delimiter' : '\t'
});

Object.keys(data).forEach(function (key) {
    data[key] = Number(data[key]);
});

fs.writeFileSync('data/afinn-111.json', JSON.stringify(data));

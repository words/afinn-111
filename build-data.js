'use strict';

var fs, afinn, data, word;

fs = require('fs');
afinn = fs.readFileSync('data/AFINN-111.txt', 'utf8');
data = {};

afinn.split('\n').forEach(function (line) {
    word = line.split('\t');

    data[word[0]] = Number(word[1]);
});

fs.writeFileSync('data/afinn-111.json', JSON.stringify(data));

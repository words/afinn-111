'use strict';

/*
 * Dependencies.
 */

var fs,
    table,
    words;

fs = require('fs');
table = require('markdown-table');
words = require('..');

/*
 * Data.
 */

var data;

data = [
    ['Word', 'Polarity', 'Valence']
].concat(
    Object.keys(words).map(function (word) {
        var valence;

        valence = words[word];

        return [
            word,
            valence > 0 ? ':smile:' : ':frowning:',
            valence > 0 ? '+' + valence : valence
        ];
    })
);

/*
 * Write.
 */

fs.writeFileSync('Support.md',
    'Support:\n' +
    '=================\n' +
    '\n' +

    table(data, {
        'align': ['c', 'c', 'c']
    }) +

    '\n'
);

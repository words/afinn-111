'use strict';

/**
 * Dependencies.
 */

var fs,
    table,
    words;

fs = require('fs');
table = require('markdown-table');
words = require('../');

/**
 * Set up data.
 */

var data;

data = [
    ['Word', 'Polarity', 'Valence']
];

data = data.concat(
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

/**
 * Write support.
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

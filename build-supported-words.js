'use strict';

var fs = require('fs'),
    words = require('./');

fs.writeFileSync('Supported-words.md',
    'Supported Words:\n' +
    '=================\n' +
    '\n' +
    '| word | polarity | valence |\n' +
    '|:----:|:--------:|:-------:|\n' +

    Object.keys(words).map(function (word) {
        var valence = words[word];

        return '| ' + [
            word,
            valence > 0 ? ':smile:' : ':frowning:',
            valence > 0 ? '+' + valence : valence
        ].join(' | ') + ' |';
    }).join('\n') +

    '\n'
);

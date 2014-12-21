'use strict';

/*
 * Dependencies.
 */

var afinn,
    assert;

afinn = require('./');
assert = require('assert');

/*
 * Tests.
 */

describe('afinn-111()', function () {
    it('should be of type `object`', function () {
        assert(typeof afinn === 'object');
    });
});

describe('...all values', function () {
    it('should be integers', function () {
        var word;

        for (word in afinn) {
            assert(typeof afinn[word] === 'number');

            assert(Math.floor(afinn[word]) === afinn[word]);
        }
    });

    it('should be between (including), -5 and 5', function () {
        var word;

        for (word in afinn) {
            assert(afinn[word] >= -5);
            assert(afinn[word] <= 5);
        }
    });
});

describe('...all keys', function () {
    it('should be lowercase', function () {
        var word;

        for (word in afinn) {
            assert(word.toLowerCase() === word);
        }
    });
});

/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module afinn-111
 * @fileoverview Test suite for `afinn-111`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var afinn = require('./');

/* Tests. */
test('afinn', function (t) {
  t.equal(afinn.positive, 2);
  t.equal(afinn['self-deluded'], -2);

  t.end();
});

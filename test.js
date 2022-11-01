import assert from 'node:assert/strict'
import test from 'node:test'
import {afinn111} from './index.js'

test('afinn', function () {
  assert.equal(afinn111.positive, 2)
  assert.equal(afinn111['self-deluded'], -2)
})

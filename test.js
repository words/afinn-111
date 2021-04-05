import test from 'tape'
import {afinn111} from './index.js'

test('afinn', function (t) {
  t.equal(afinn111.positive, 2)
  t.equal(afinn111['self-deluded'], -2)

  t.end()
})

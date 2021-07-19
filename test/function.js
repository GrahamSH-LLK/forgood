import { Function } from '../index.js'
import test from 'tape'

test('create function', function(t){
  var func = Function('arg', 'return arg * 100')
  t.equal(func(5), 500)
  t.end()
})
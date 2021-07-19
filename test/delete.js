import { Function } from '../index.js'
import test from 'tape'

test('delete literal', function(t){
  var func = Function('arg', 'var x = {value: 1, another: 2}; delete x.value; return x')
  t.deepEqual(Object.keys(func()), ['another'])
  t.end()
})

test('delete computed', function(t){
  var func = Function('arg', 'var x = {value: 1, another: 2}; var y = "value"; delete x[y]; return x')
  t.deepEqual(Object.keys(func()), ['another'])
  t.end()
})

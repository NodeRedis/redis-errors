'use strict'

/* eslint-env mocha */

const assert = require('assert')
const bufferFrom = require('buffer-from')
const errors = require('../')
const ReplyError = errors.ReplyError
const ParserError = errors.ParserError
const RedisError = errors.RedisError

describe('errors', function () {
  it('errors should have a stack trace with error message', function () {
    const err1 = new RedisError('test')
    const err2 = new ReplyError('test')
    const err3 = new ParserError('test', bufferFrom(''), 0)
    assert(err1.stack)
    assert(err2.stack)
    assert(err3.stack)
    assert(/RedisError: test/.test(err1.stack))
    assert(/ReplyError: test/.test(err2.stack))
    assert(/ParserError: test/.test(err3.stack))
  })
})

'use strict'

/* eslint-env mocha */

const assert = require('assert')
const Buffer = require('buffer').Buffer
const errors = require('../')
const ReplyError = errors.ReplyError
const ParserError = errors.ParserError
const RedisError = errors.RedisError
const AbortError = errors.AbortError
const InterruptError = errors.InterruptError

describe('errors', function () {
  const redisError = new RedisError('test')
  const replyError = new ReplyError('test')
  const parserError = new ParserError('test', Buffer.from('\r\nt+est\r\n'), 3)
  const abortError = new AbortError('test')
  const interruptError = new InterruptError('test')

  it('errors should have a stack trace with error message', function () {
    assert(redisError.stack)
    assert(replyError.stack)
    assert(parserError.stack)
    assert(abortError.stack)
    assert(interruptError.stack)
    assert(/RedisError: test/.test(redisError.stack))
    assert(/ReplyError: test/.test(replyError.stack))
    assert(/ParserError: test/.test(parserError.stack))
    assert(/AbortError: test/.test(abortError.stack))
    assert(/InterruptError: test/.test(interruptError.stack))
  })

  it('should properly inherit from each other', function () {
    assert(redisError instanceof Error)
    assert(replyError instanceof RedisError)
    assert(parserError instanceof RedisError)
    assert(abortError instanceof RedisError)
    assert(interruptError instanceof AbortError)
  })

  it('parser errors should contain properties', function () {
    assert(parserError.offset)
    assert(parserError.buffer)
  })
})

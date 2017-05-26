[![Build Status](https://travis-ci.org/NodeRedis/redis-errors.png?branch=master)](https://travis-ci.org/NodeRedis/redis-errors)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# redis-errors

All error classes used in [node_redis](https://github.com/NodeRedis/node_redis) from v.3.0.0 are in here. They can be required as needed.

## Install

Install with [NPM](https://npmjs.org/):

  npm install redis-errors

## Usage

```js
const { ReplyError, InterruptError } = require('redis-errors');

// Using async await
try {
  await client.set('foo') // Missing value
} catch (err) {
  if (err instanceof InterruptError) {
    console.error('Command might have been processed')
  }
  if (err instanceof ReplyError) {
    // ...
  }
  throw err
}

// Using callbacks
client.set('foo', (err, res) => {
  if (err) {
    if (err instanceof InterruptError) {
      // ...
    }
  }
})
```

### Error classes

* `RedisError` subclass of Error
* `ReplyError` subclass of RedisError
* `ParserError` subclass of RedisError
* `AbortError` subclass of RedisError
* `InterruptError` subclass of AbortError

* All errors returned by NodeRedis (client) are `RedisError`s.
* All errors returned by Redis itself (server) will be a `ReplyError`.
* Parsing errors are returned as `ParserError`. *Note:* Please report these!
* If a command was not executed but rejected, it'll return a `AbortError`.
* All executed commands that could not fulfill (e.g. network drop while
  executing) return a `InterruptError`.
  *Note:* Interrupt errors can happen for multiple reasons that are out of the
  scope of NodeRedis itself. There is nothing that can be done on library side
  to prevent those.

## License

[MIT](./LICENSE)

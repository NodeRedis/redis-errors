[![Build Status](https://travis-ci.org/NodeRedis/redis-errors.png?branch=master)](https://travis-ci.org/NodeRedis/redis-errors)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# redis-errors

[![Greenkeeper badge](https://badges.greenkeeper.io/NodeRedis/redis-errors.svg)](https://greenkeeper.io/)

All error classes used in [node_redis](https://github.com/NodeRedis/node_redis) are in here. They can be required as needed.

## Install

Install with [NPM](https://npmjs.org/):

  npm install redis-errors

## Usage

```js
const { RedisError, ReplyError } = require('redis-errors');

// Using async await
try {
  return client.set('foo') // Missing value
} catch (err) {
  if (err instanceof ReplyError) {
    console.log(err)
  }
  throw err
}
```

### Error classes

* `RedisError` sub class of Error
* `ReplyError` sub class of RedisError
* `ParserError` sub class of RedisError

All Redis errors will be returned as `ReplyErrors` while a parser error is returned as `ParserError`.

## License

[MIT](./LICENSE)

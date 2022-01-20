'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dai.cjs.production.min.js')
} else {
  module.exports = require('./dai.cjs.development.js')
}
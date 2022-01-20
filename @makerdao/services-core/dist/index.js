
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./services-core.cjs.production.min.js')
} else {
  module.exports = require('./services-core.cjs.development.js')
}

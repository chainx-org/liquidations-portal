
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dai-plugin-liquidations.cjs.production.min.js')
} else {
  module.exports = require('./dai-plugin-liquidations.cjs.development.js')
}

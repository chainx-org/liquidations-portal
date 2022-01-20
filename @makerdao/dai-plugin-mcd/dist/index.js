
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dai-plugin-mcd.cjs.production.min.js')
} else {
  module.exports = require('./dai-plugin-mcd.cjs.development.js')
}

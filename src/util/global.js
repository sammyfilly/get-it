/* global globalThis */
/* eslint-disable no-negated-condition */
if (typeof globalThis !== 'undefined') {
  module.exports = globalThis
} else if (typeof window !== 'undefined') {
  module.exports = window
} else if (typeof global !== 'undefined') {
  module.exports = global
} else if (typeof self !== 'undefined') {
  module.exports = self
} else {
  module.exports = {}
}

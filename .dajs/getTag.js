const toString = Object.prototype.toString

/**
 * 获取value的toStringTag
 *
 * @private
 * @param {*} value 要查询的值
 * @returns {string} 返回toStringTag
 */
function getTag(value) {
  // return value == null ? '[object Null]' : toString.call(value)
  if (value == null) {
   return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export default getTag
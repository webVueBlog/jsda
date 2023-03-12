import getTag from './.dajs/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * 检查value是否可能是一个arguments对象
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value是一个arguments对象，则返回true，否则返回false
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && getTag(value) == '[object Arguments]'
}

export default isArguments
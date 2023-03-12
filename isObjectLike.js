/**
 * 检查value是否为类对象，如果值不为null则为类对象值并有一个typeof结果为object
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value是类对象，则返回true，否则返回false
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
function isObjectLike(value) {
  return typeof value === 'object' && value!== null;
}

export default isObjectLike;
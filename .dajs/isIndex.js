/** 用作各种Number常量的引用 */
const MAX_SAFE_INTEGER = 9007199254740991

/** 用于检测无符号整数值 */
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * 检查value是否为有效的类数组下标
 *
 * @private
 * @param {*} value 要检查的值
 * @param {number} [length=MAX_SAFE_INTEGER] 有效索引的上界
 * @returns {boolean} 如果value是有效索引则返回true，否则返回false
 */
function isIndex(value, length) {
 const type = typeof value
 length = length == null? MAX_SAFE_INTEGER : length
 return !!length &&
  (type === 'number' ||
   (type!=='symbol' && reIsUint.test(value))) &&
    (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
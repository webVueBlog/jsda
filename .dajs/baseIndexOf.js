import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value value要搜索的值
 * @param {number} fromIndex fromIndex搜索的索引
 * @returns {number} 返回匹配值的索引，否则为-1
 */
function baseIndexOf(array, value, fromIndex) {
 return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
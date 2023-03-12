import baseIndexOf from './baseIndexOf.js'

/**
* @private
* @param {Array} [array] 要检查的数组
* @param {*} target 要搜索的值
* @returns {boolean} 如果找到'target'则返回'true'，否则返回'false'
*/
function arrayIncludes(array, value) {
  const length = array? array.length : 0
  return !!length && baseIndexOf(array, value, 0) > -1
}

export default arrayIncludes
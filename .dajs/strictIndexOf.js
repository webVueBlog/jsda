/**
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 搜索的索引
 * @returns {number} 返回匹配值的索引，否则为-1
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

export default strictIndexOf;
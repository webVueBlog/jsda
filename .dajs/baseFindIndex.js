/**
 * @private
 * @param {Array} array 要检查的数组
 * @param {Function} predicate 每次迭代调用的函数
 * @param {number} fromIndex 搜索的索引
 * @param {boolean} [fromRight] 指定从右向左迭代
 * @returns {number} 返回匹配值的索引，否则为-1
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight? 1 : -1);

  while ((fromRight? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

export default baseFindIndex;
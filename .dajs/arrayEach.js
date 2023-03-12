/**
 * @private
 * @param {Array} [array] 迭代的数组
 * @param {Function} iteratee 依次执行的函数
 * @returns {Array} 返回数组
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEach;
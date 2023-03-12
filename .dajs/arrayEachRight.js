/**
 * @private
 * @param {Array} [array] 迭代的数组
 * @param {Function} iteratee iteratee每次迭代调用的函数
 * @returns {Array} 返回数组
 */
function arrayEachRight(array, iteratee) {
  var length = array == null? 0 : array.length;
  if (!length) {
    return [];
  }
  iteratee = iteratee == null? identity : baseIteratee(iteratee);
  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEachRight;
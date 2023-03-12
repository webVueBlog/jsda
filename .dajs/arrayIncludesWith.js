/**
 * @private
 * @param {Array} [array] 要检查的数组
 * @param {*} target 要搜索的值
 * @param {Function} comparator 每个元素调用的比较器
 * @returns {boolean} 如果找到target则返回true，否则返回false
 */
function arrayIncludesWith(array, target, comparator) {
 if (array == null) {
  return false;
 }
 for (const value of array) {
  if (comparator(value, target)) {
   return true;
  }
 }
 return false;
}

export default arrayIncludesWith;
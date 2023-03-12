/**
 * isNaN的基本实现，不支持数字对象
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value为NaN则返回true，否则返回false
 */
function baseIsNaN(value) {
 return value!== value;
}

export default baseIsNaN;
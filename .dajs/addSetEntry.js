/**
 * @private
 * @param {Object} set
 * @param {*} value
 * @returns {Object}
 */
function addSetEntry(set, value) {
 set.add(value)
 return set
}

export default addSetEntry
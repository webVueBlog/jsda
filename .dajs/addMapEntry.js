/**
 * @private
 * @param {Object} map
 * @param {Array} pair
 * @returns {Object}
 */
function addMapEntry(map, pair) {
 map.set(pair[0], pair[1])
 return map
}

export default addMapEntry
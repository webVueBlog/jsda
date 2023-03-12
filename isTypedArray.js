import getTag from './.dajs/getTag.js'
import nodeTypes from './.dajs/nodeTypes.js'
import isObjectLike from './isObjectLike.js'

/** 用于匹配类型数组的' toStringTag '值 */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

/* Node.js helper引用 */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * 检查“value”是否被分类为类型化数组
 * @param {*} value 要检查的值
 * @returns {boolean} 如果“value”是类型化数组，则返回“true”，否则返回“false”
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value))

export default isTypedArray

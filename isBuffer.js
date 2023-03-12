import root from './.dajs/root.js'

/** 检测自由变量 `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** 检测自由变量 `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** 检测流行的CommonJS扩展' module.exports ' */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 内置值引用 */
const Buffer = moduleExports ? root.Buffer : undefined

const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * 检查“value”是否为缓冲区
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果“value”是缓冲区，则返回“true”，否则返回“false”
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = nativeIsBuffer || (() => false)

export default isBuffer

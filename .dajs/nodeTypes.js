import freeGlobal from './freeGlobal.js'

/** 检测自由变量 `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** 检测自由变量 `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** 检测流行的CommonJS扩展' module.exports ' */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 从Node.js中检测自由变量process */
const freeProcess = moduleExports && freeGlobal.process

/** 用于访问更快的Node.js helper */
const nodeTypes = ((() => {
  try {
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    return typesHelper
      ? typesHelper
      : freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {}
})())

export default nodeTypes

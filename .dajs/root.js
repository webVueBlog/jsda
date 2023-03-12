
import freeGlobal from './freeGlobal.js'

/** 检测自由变量 `globalThis` */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** 检测自由变量 `self`. */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** 用作全局对象的引用 */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root

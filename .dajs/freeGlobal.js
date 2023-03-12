/** 检测自由变量 `global` 从 Node.js. */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal

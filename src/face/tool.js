// 12. 判断js具体数据类型

function detailType(obj) {
  const typeList = ['Array', 'Date', 'RegExp', 'Object', 'Error']
  if (obj === null) return String(null);
  if (typeof obj === 'object') {
    for (let i = 0; i < typeList.length; i++) {
      const type = Object.prototype.toString.call(obj)
      if (type === `[object ${typeList[i]}]`) {
        return typeList[i].toLowerCase()
      }
    }
  }
  return typeof obj
}

// console.log(detailType(()=>{}))
// console.log(detailType(null))
// console.log(detailType(new Date()))
// console.log(detailType(Symbol()))
// console.log(detailType(/\d/))
// console.log(detailType({}))
// console.log(detailType([]))


export { detailType }
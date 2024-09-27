//JS实现flat方法
function flat(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
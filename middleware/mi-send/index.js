
//函数通过调用bind方法返回一个this指向为bind方法中参数的副本函数，
//即此处render函数中的this指向ctx。
//这个方法为什么要这样写还不懂。

module.exports = () => {
  function render(json) {
      this.set("Content-Type", "application/json")
      this.body = JSON.stringify(json)
  }
  return async (ctx, next) => {
      ctx.send = render.bind(ctx)
      await next()
  }
}
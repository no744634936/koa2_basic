const Koa = require('koa')
const Router = require('koa-router');
const app = new Koa();

var router = new Router({
    prefix: '/users'
  });
 
router.get('/', async(ctx, next)=>{
    ctx.body="<h1>responds to /users</h1>";
});
router.get('/:pid', async(ctx, next)=>{
    ctx.body="<h1>responds to /users/:id</h1>";
});

//posts.allowedMethods() 这个中间件是对一些异常的处理。
// 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/123"
app.use(router.routes());


app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})
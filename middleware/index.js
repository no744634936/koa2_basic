//这个index文件是用来管理所以除了router以外的中间件的文件。

//这四个是导入的中间件
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

//这个mi-send是自建的中间件。
const miSend = require('./mi-send')
module.exports = (app) => {
  app.use(staticFiles(path.resolve(__dirname, "../public")))

  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));

  app.use(bodyParser())
  app.use(miSend())
}
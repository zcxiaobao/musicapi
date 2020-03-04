const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')
const parameter = require('koa-parameter')
const cors = require('koa2-cors')

app.use(bodyparser())
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
app.use(parameter(app))
routing(app)
app.listen(8888,'0.0.0.0', () => {
  console.log('服务器启动于3000端口')
})
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')
const parameter = require('koa-parameter')
const cors = require('koa2-cors')

app.use(bodyparser())
app.use(cors({
  origin: function (ctx) {
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(parameter(app))
routing(app)
app.listen(3000, () => {
  console.log('服务器启动于3000端口')
})
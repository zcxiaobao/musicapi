const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')
const parameter = require('koa-parameter')
const cors = require('koa2-cors')

app.use(bodyparser())
app.use(cors());
app.use(parameter(app))
routing(app)
app.listen(3000, () => {
  console.log('服务器启动于3000端口')
})
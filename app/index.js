const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')
const parameter = require('koa-parameter')
const cors = require('koa2-cors')

app.use(bodyparser())
const allowOrigins = [
  "http://localhost:8080",
  "http://47.240.82.152:8080"
];
app.use(cors({
  origin: function(ctx) {
    if (allowOrigins.includes(ctx.header.origin)) {
      return ctx.header.origin;
    }
    return false;
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  withCredentials:true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// app.use(async (ctx, next)=> {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (ctx.method == 'OPTIONS') {
//     ctx.body = 200; 
//   } else {
//     await next();
//   }
// });
app.use(parameter(app))
routing(app)
app.listen(8000, () => {
  console.log('服务器启动于8000端口')
})
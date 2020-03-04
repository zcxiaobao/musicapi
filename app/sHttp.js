const Axios = require('axios')
const {sHeaders} = require('./config')
const http = Axios.create({
  baseURL: 'https://c.y.qq.com/',
  sHeaders,
  timeout: 3000
})
module.exports = http
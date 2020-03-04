const Axios = require('axios')
const {headers} = require('./config')
const http = Axios.create({
  baseURL: 'https://c.y.qq.com/',
  headers,
  timeout: 3000
})
module.exports = http
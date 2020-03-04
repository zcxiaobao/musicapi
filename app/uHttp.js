const Axios = require('axios')
const {headers} = require('./config')
const http = Axios.create({
  baseURL: 'https://u.y.qq.com/',
  headers,
  timeout: 3000
})
module.exports = http
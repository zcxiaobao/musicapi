const Axios = require('axios')
const {headers, qqMusicConfigParam} = require('./config')
const http = Axios.create({
  headers,
  timeout: 3000
})
module.exports = http
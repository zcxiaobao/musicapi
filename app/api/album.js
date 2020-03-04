const http = require('../cHttp')
const {qqMusicConfigParam} = require('../config')
// need songId
const getSongList = function(albumId) {
  const url = '/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = {
    ...qqMusicConfigParam,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    new_format: 1,
    disstid: albumId
  }
  return http.get(url, {
    params: data
  })
}


module.exports = {
  getSongList,
}
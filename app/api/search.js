const http = require('../cHttp')
const sHttp = require('../sHttp')

const {qqMusicConfigParam} = require('../config')
// need songId
const getHotKeys = function(singerId) {
  const url = '/splcloud/fcgi-bin/gethotkey.fcg'
  const data = {
    ...qqMusicConfigParam,
  }
  return http.get(url, {
    params: data
  })
}

const getSearchSongList = function(hotkey, page, perpage) {
  const url = '/soso/fcgi-bin/client_search_cp'
  const data = {
    ...qqMusicConfigParam,
    ct: 24,
    qqmusic_ver: 1298,
    new_json: 1,
    remoteplace: 'txt.yqq.song',
    searchid: 54187145726741324,
    t: 0,
    aggr: 1,
    cr: 1,
    catZhida: 1,
    lossless: 0,
    flag_qc: 0,
    p: page,
    n: perpage,
    w: hotkey,
  }
  return sHttp.get(url, {
    params: data
  })
}
module.exports = {
  getHotKeys,
  getSearchSongList
}
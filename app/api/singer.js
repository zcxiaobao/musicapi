const http = require('../uHttp')
const {qqMusicConfigParam} = require('../config')
// need songId
const getSongList = function(singerId) {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'getSingerSong5820184818895127',
    data: {
      'comm': {
        'ct': 24,
        'cv': 0
      },
      'singerSongList': {
        'method': 'GetSingerSongList',
        'param': {
          'order': 1,
          'singerMid': singerId,
          'begin': 0,
          'num': 20
        },
        'module': 'musichall.song_list_server'
      }
    }
  }
  return http.get(url, {
    params: data
  })
}

module.exports = {
  getSongList
}
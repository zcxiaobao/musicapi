const http = require('../uHttp')
const {qqMusicConfigParam} = require('../config')
// need songId
const getLyric = function(songId) {
  const url = '/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'MusicJsonCallback_lrc',
    pcachetime: +new Date(),
    songmid: songId,
    g_tk: 1137451523
  }
  return http.get(url, {
    params: data
  })
}
const getMusicVkey = function (songId) {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'getplaysongvkey07814529035805795',
    data: {
      'req_0': {
        'module': 'vkey.GetVkeyServer',
        'method': 'CgiGetVkey',
        'param': {
          'guid': '6681544424',
          'songmid': [songId],
          'songtype': [0],
          'uin': '0',
          'loginflag': 1,
          'platform': '20'
        }
      },
      'comm': {
        'uin': 0,
        'format': 'json',
        'ct': 24,
        'cv': 0
      }
    }
  }
  return http.get(url, {
    params: data
  })
}

module.exports = {
  getLyric,
  getMusicVkey
}
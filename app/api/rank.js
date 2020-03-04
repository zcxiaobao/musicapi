const http = require('../uHttp')
const {qqMusicConfigParam} = require('../config')
// need songId
const getTopList = function(songId) {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'recom' + (+new Date()),
    data: {
      comm: {
        ct: 24
      },
      toplist: {
        module: 'musicToplist.ToplistInfoServer',
        method: 'GetAll',
        param: {}
      }
    }
  }
  return http.get(url, {
    params: data
  })
}
const getTopListSongs = function (topId) {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    '-': 'getUCGI4195015404019351',
    'needNewCode': 0,
    'data': {
      'detail': {
        'module': 'musicToplist.ToplistInfoServer',
        'method': 'GetDetail',
        'param': {
          'topId': topId,
          'offset': 0,
          'num': 20
          // 'period': '2020-02-25'
        }
      },
      'comm': {
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
  getTopList,
  getTopListSongs
}
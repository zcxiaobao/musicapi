const http = require('../uHttp')
const {qqMusicConfigParam} = require('../config')
// need songId
const getFocus = function() {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'recom030954476498489703',
    data: {
      comm: {
        ct: 24
      },
      focus: {
        module: 'QQMusic.MusichallServer',
        method: 'GetFocus',
        param: {}
      }
    }
  }
  return http.get(url, {
    params: data
  })
}
const getCdList = function() {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'recom030954476498489703',
    data: {
      comm: {
        ct: 24
      },
      recomPlaylist: {
        method: 'get_hot_recommend',
        param: {
          async: 1,
          cmd: 2
        },
        module: 'playlist.HotRecommendServer'
      }
    }
  }
  return http.get(url, {
    params: data
  })
}
const getNewSong = function() {
  const url = '/cgi-bin/musicu.fcg'
  const data = {
    ...qqMusicConfigParam,
    '-': 'recom030954476498489703',
    data: {
      comm: {
        ct: 24
      },
      new_song: {
        module: 'newsong.NewSongServer',
        method: 'get_new_song_info',
        param: {
          type: 5
        },
      }
    }
  }
  return http.get(url, {
    params: data
  })
}

module.exports = {
  getFocus,
  getCdList,
  getNewSong,
}
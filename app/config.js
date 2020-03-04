module.exports = {
  headers: {
    origin: "https://y.qq.com/",
    "sec-fetch-site": "same-site",
    "access-control-allow-origin": "https://y.qq.com",
    "access-control-expose-headers": "Area",
    referer: "https://c.y.qq.com/"
  },
  sHeaders: {
    origin: "https://y.qq.com",
    referer: "https://y.qq.com/portal/search.html",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  qqMusicConfigParam: {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0
  }
};

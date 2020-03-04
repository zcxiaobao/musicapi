const Router = require("koa-router");
const http = require("../http");
const { qqMusicConfigParam } = require("../config");
const router = new Router({ prefix: "/recom" });

router.get("/getRecomSlider", async ctx => {
  const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
  const data = {
    ...qqMusicConfigParam,
    "-": "recom030954476498489703",
    data: {
      comm: {
        ct: 24
      },
      focus: {
        module: "QQMusic.MusichallServer",
        method: "GetFocus",
        param: {}
      }
    }
  };
  const slider = await http.get(url, {
    params: data
  });
  Object.keys(slider).forEach(i => {
    console.log(i)
  })
  console.log(slider.data)
  ctx.body = slider.data
});


module.exports = router;

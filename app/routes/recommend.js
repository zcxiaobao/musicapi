const Router = require("koa-router");
const router = new Router({ prefix: "/recoms" });
const { getFocus, getCdList, getNewSong } = require("../api/recommend");

// /albums/albumId/getSongList
router.get("/getFocus", async ctx => {
  const response = await getFocus();
  ctx.body = response.data;
});
router.get("/getCdList", async ctx => {
  const response = await getCdList();
  ctx.body = response.data;
});
router.get("/getNewSong", async ctx => {
  const response = await getNewSong();
  const { pi = 1, ps = 10 } = ctx.request.query;
  const s = (pi - 1) * ps;
  const e = pi * ps;
  const newSongList = response.data.new_song.data.songlist.slice(s, e);
  ctx.body = {
    code: 0,
    newSongList
  };
});

module.exports = router;

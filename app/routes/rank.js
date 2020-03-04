const Router = require("koa-router");
const router = new Router({ prefix: "/ranks" });
const {getTopList, getTopListSongs} = require('../api/rank')

// /songs/getLyric/:songId
router.get("/getTopList", async ctx => {
  const response = await getTopList()
  ctx.body = response.data
});
router.get("/getTopListSongs/:topId", async ctx => {
  const topId = ctx.params.topId * 1
  const response = await getTopListSongs(topId)
  ctx.body = response.data
});


module.exports = router;

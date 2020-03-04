const Router = require("koa-router");
const router = new Router({ prefix: "/songs" });
const {getLyric, getMusicVkey} = require('../api/song')

// /songs/getLyric/:songId
router.get("/getLyric/:songId", async ctx => {
  const songId = ctx.params.songId
  const response = await getLyric(songId)
  ctx.body = response.data
});
router.get("/getMusicVkey/:songId", async ctx => {
  const songId = ctx.params.songId
  const response = await getMusicVkey(songId)
  ctx.body = response.data
});


module.exports = router;

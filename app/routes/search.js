const Router = require('koa-router')
const router = new Router({ prefix: "/search" });
const {getHotKeys, getSearchSongList} = require('../api/search')

router.get("/getHotKeys", async ctx => {
  const response = await getHotKeys(albumId)
  ctx.body = response.data
});

router.get("/getSearchSongList", async ctx => {
  const {hotkey, page, perpage} = ctx.request.query
  const response = await getSearchSongList(hotkey,page,perpage)
  ctx.body = response.data
});
module.exports = router
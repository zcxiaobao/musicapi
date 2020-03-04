const Router = require('koa-router')
const router = new Router({ prefix: "/albums" });
const {getSongList} = require('../api/album')

// /albums/albumId/getSongList
router.get("/:albumId/getSongList", async ctx => {
  const albumId = ctx.params.albumId
  const response = await getSongList(albumId)
  ctx.body = response.data
});


module.exports = router
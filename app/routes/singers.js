const Router = require('koa-router')
const router = new Router({ prefix: "/singers" });
const {getSongList} = require('../api/singer')

// /singers/singerId/getSongList
router.get("/:singerId/getSongList", async ctx => {
  const singerId = ctx.params.singerId
  const response = await getSongList(singerId)
  ctx.body = response.data
});


module.exports = router
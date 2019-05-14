const {
  major_detail,
  major,
  school
} = require('../Controller/commend')

const router = require('koa-router')()
router.prefix('/recommend')

// 专业推荐接口
router.get('/major', async (ctx, next) => {
  const majorName = ctx.query.majorName
  const area = ctx.query.area
  const data = major(majorName, area)
  return data.then((res) => {
    return ctx.body = res
  })
})

// 学校推荐接口
router.get('/school', async (ctx, next) => {
  const type = ctx.query.type
  const province = ctx.query.province
  const score = ctx.query.score
  const target_province = ctx.query.target_province
  const rate = ctx.query.rate
  const data = school(type,province,score,target_province,rate)
  return data.then((res) => {
    return ctx.body = res
  })
})

// 十大热门专业解析接口
router.get('/major_detail', async (ctx, next) => {
  const id = ctx.query.id
  const data = major_detail(id)
  return data.then((res) => {
    return ctx.body = res
  })
})

module.exports = router
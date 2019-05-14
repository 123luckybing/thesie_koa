const  { 
  batch_line,
  majorCommend,
  school_area,
  detail
} = require('../Controller/histroy')

const router = require('koa-router')()
// 路由中间件函数必须 async 不管里面用不用await
router.prefix('/history') // 路由前缀

// 地区批次线查询接口
router.get('/batch_line', async (ctx, next) => {
  const province = ctx.query.province
  const year = ctx.query.year
  const type = ctx.query.type
  const data = batch_line(province, year, type)
  return data.then((res) => {
    return ctx.body = res
  })  
})

// 高校各专业批次录取分数线查询接口
router.get('/major', async (ctx, next) => {
  const schoolName = ctx.query.schoolName
  const major = ctx.query.major
  const type = ctx.query.type
  const data = majorCommend(schoolName,major,type)
  return data.then((res) => {
    return ctx.body =res
  })
})

// 高校分地区录取分数线查询接口
router.get('/school_area', async (ctx, next) => {
  const schoolName = ctx.query.schoolName
  const year = ctx.query.year
  const type = ctx.query.type
  const target_area = ctx.query.area
  const data = school_area(schoolName, year, type, target_area)
  return data.then((res) => {
    return ctx.body = res
  })
})

// 高校基本信息查询接口
router.get('/detail', async (ctx, next) => {
  const schoolName = ctx.query.schoolName
  const province = ctx.query.province
  const major = ctx.query.major
  const is = ctx.query.is
  const data = detail(schoolName,province,major,is)
  return data.then((res) => {
    return ctx.body = res
  })
})

module.exports = router

const {
   score_band,
   school_detail
} = require('../Controller/addData')
const router = require('koa-router')()
router.prefix('/add')

// 地区批次分数线
router.post('/area_score', async (ctx, next) => {
   const { province, type, year, average, batch_name }  = ctx.request.body
   const data = score_band(province, type, year, average, batch_name)
   return data.then((res) => {
      ctx.body = { error: 0}
   })
})

// 学校简介
router.post('/school_detail', async function (ctx) {
   const { schoolName, department, f985, f211, address, province_name, type_name, major, detail }  = ctx.request.body
   const data = school_detail(schoolName, department, f985, f211, address, province_name, type_name, major, detail)
   return data.then((res) => {
      ctx.body = { error: 0}
   })
})

module.exports = router
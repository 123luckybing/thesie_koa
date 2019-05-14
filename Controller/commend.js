const exec = require('../mysql/index')

// 热门专业解析查询sql
const major_detail = async function(id) {
  let sql = `select * from major_hot where id=${id}`
  console.log(sql)
  return await exec(sql)
}

// 专业推荐
const major = async function (majorName, area) {
  let sql = 'select * from major_recommend where 1=1'
  if(majorName) {
    sql += ` and major=${majorName}`
  }
  if(area) {
    sql += ` and area=${area}`
  }
  console.log(sql)
  return await exec(sql)
}

// 学校推荐
const school = async function (type,province,score,target_province,rate) {
  // let sql =  `select * from school_recommend where type=`
  console.log(sql)
  return await exec(sql)
}

module.exports = {
  major_detail,
  major,
  school
}
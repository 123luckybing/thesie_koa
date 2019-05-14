const exec  = require('../mysql/index')

// 地区批次线查询sql
const batch_line = async function(province, year, type) {
  let sql = 'select * from area_band where 1=1'
  if (province) {
    sql += ` and local_province_name = ${province}`
  }
  if (year) {
    sql += ` and year_num = ${year}`
  }
  if (type) {
    sql += ` and local_type_name = ${type}`
  }
  console.log(sql)
  return await exec(sql)
}

// 高校专业地区sql
const majorCommend = async function(school_name, major, type) {
  let sql = 'select * from area_major where 1=1'
  if(school_name) {
    sql += ` and schoolName=${school_name}`
  }
  if(major) {
    sql += ` and majorName=${major}`
  }
  if(type) {
    sql += ` and subject_type=${type}`
  }
  console.log(sql)
  return await exec(sql)
}

// 高校各地区录取分数线查询sql
const school_area = async function(schoolName, year, type, target_area) {
  let sql = 'select * from school_area where 1=1'
  if(schoolName) {
    sql += ` and schoolName=${schoolName}`
  }
  if(year) {
    sql += ` and year_num=${year}`
  }
  if(type) {
    sql += ` and local_type_name=${type}`
  }
  if(target_area) {
    sql += ` and local_province_name=${target_area}`
  }
  console.log(sql)
  return await exec(sql)
}

// 高校基本信息查询sql
const detail = async function (schoolName,province,major,is) {
  let sql = 'select * from school_detail where 1=1'
  if(schoolName) {
    sql += ` and schoolName=${schoolName}`
  }
  if(province) {
    sql += ` and province_name=${province}`
  }
  if(major) {
    sql += ` and major like '%${major}%'`
  }
  if(is === 'true') {
    sql += ` and (f985=1 or f211=1)`
  } else {
    sql += ` and f985=2 and f211=2`
  }
  console.log(sql)
  return await exec(sql)
}

module.exports = {
  batch_line,
  majorCommend,
  detail,
  school_area
}
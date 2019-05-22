const exec = require('../mysql/index')

const score_band = async function (province, type, year, average, batch_name) {
  let sql = `
  insert into area_band (local_type_name, local_province_name, year, average, local_batch_name)
  values ('${type}', '${province}', ${year}, ${average}, '${batch_name}')
  `
  return await exec(sql)
}

const school_detail = async function(schoolName, department, f985, f211, address, province_name, type_name, major, detail) {
  let sql = `
  insert into school_detail (schoolName, department, f985, f211, address, province_name, type_name, major, detail)
  values ('${schoolName}', '${department}', f985, f211, '${address}', '${province_name}', '${type_name}', '${major}', '${detail}')
  `
  return await exec(sql)
}

module.exports = {
  score_band,
  school_detail
}
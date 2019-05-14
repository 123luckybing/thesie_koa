const CONFIG = require('./config')
var mysql = require('mysql');
var connection = mysql.createConnection(CONFIG)
connection.connect();

// 传入查询语句
function exec(sql) {
  const results = new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error) {
        reject(error);
        return
      }
      resolve(result)
    });
  })
  return results
}

module.exports = exec
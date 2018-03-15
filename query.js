// 数据库配置

var mysql =  require('mysql')
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'poetry_story',
    port: 3306
});
const query = function(sql) {
  return new Promise((resolve,reject) => {
    pool.getConnection((err, conn) => {
      if(err){
        reject(err)
      }
      conn.query(sql, (qerr, vals, fields) => {
        if(qerr) {
          reject(qerr)
        }
        //释放连接
        conn.release()
        //事件驱动回调
        resolve(vals)
      })
    })
  })
}

module.exports=query;
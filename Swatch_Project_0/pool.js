//1:加载模块 mysql
const mysql=require("mysql");
//2:创建对象
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"swatch",
    connectionLimit:20
})
//3:导出对象
module.exports=pool;
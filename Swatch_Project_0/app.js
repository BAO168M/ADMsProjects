const express=require("express");
// const pool=require("./pool");
const session = require('express-session');
var app=express();
app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}))
//服务器node.js允许跨域访问配置项
//2.1:引入跨域模块-->加载跨域访问模块
const cors=require("cors");
//2.2:配置允许哪个程序哪个端口访问
app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3000"],
    credentials:true
}))

/*引入路由模块*/
const index=require("./routes/index");

/*使用路由器来管理路由*/
app.use("/index",index)
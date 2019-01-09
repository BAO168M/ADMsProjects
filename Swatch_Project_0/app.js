const express=require("express");
// const pool=require("./pool");
const session = require('express-session');
var app=express();
app.listen(3000);

//服务器node.js允许跨域访问配置项
//引入跨域模块-->加载跨域访问模块
const cors=require("cors");
//配置允许哪个程序哪个端口访问
app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3000"],
    credentials:true
}))
//静态管理
app.use(express.static(__dirname+"/public"));
//session
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}))
/*引入路由模块*/
const index=require("./routes/index");
const swatch_beats=require("./routes/swatch_beats");

/*使用路由器来管理路由*/
app.use("/index",index)
app.use("swatch_beats",swatch_beats)
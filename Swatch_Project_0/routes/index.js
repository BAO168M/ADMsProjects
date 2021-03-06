const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/swiper",(req,res)=>{
    // console.log(res)
    res.writeHead(200,{
    "Content-Type":"application/json;charset=utf-8",
    "Access-Control-Allow-Origin":"*"
    })
    //轮播图片
    var sql=" SELECT * FROM sw_IdxSwiper";
    pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        res.write(JSON.stringify(result));
        res.end();
    })
})
//接口地址: http://localhost:3000/index

router.get("/nine",(req,res)=>{
    res.writeHead(200,{
    "Content-Type":"application/json;charset=utf-8",
    "Access-Control-Allow-Origin":"*"
    })
    //九个li
    var sql=" SELECT * FROM sw_IdxUl";
    pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        res.write(JSON.stringify(result));
        res.end();
    })
})


module.exports=router;
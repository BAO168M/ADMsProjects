$(function(){
  $.ajax({
      url:"http://127.0.0.1:3000/index/swiper",
      type:"get",
      dataType:"json",//ajax可自动将json转为obj
      })
      .then(function(res){
        var html="";
        for(var p of res){
            var {img_url,img_txt,img_href}=p;
            html+=`<div class="carousel-item">
            <a href=""><img src="${img_url}" alt=""></a>
            <div class="swiper-Title"><a href="${img_href}">${img_txt}</a></div>   
          </div>`;
        }
        var divCard=document.querySelector(".Banner_One .carousel-inner");
        divCard.innerHTML=html;

        /*轮播上的active  了解更多*/
        var active=$(".Banner_One .carousel-inner>div:first")
        active.addClass("active")
        var more1=$(".Banner_One .carousel-inner>div:even .swiper-Title a")
        more1.addClass("more1")
        var more2=$(".Banner_One .carousel-inner>div:odd .swiper-Title a")
        more2.addClass("more2")
      })

  $.ajax({
      url:"http://127.0.0.1:3000/index/nine",
      type:"get",
      dataType:"json",//ajax可自动将json转为obj
      })
      .then(function(res){
        var html="";
        for(var p of res){
            var {li_href,img_url,li_title,li_desc}=p;
            html+=`<li><a href="${li_href}">
            <img src="${img_url}" alt="">
            <div class="banner_Title">
              <h3>${li_title}</h3>
              <p>${li_desc}</p>
            </div>
          </a></li>`;
        }
        var divCard=document.querySelector(".Banner_Two ul");
        divCard.innerHTML=html;
      })
  



  })

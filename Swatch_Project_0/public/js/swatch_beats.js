$(function(){
  $.ajax({
      url:"http://127.0.0.1:3000/",
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

      })

  })

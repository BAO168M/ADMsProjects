$(function(){
  $("head").append("<link rel='stylesheet' href='../css/footer.css'>");
  $.ajax({
      url:"http://127.0.0.1:3000/footer.html",
      type:"get",
      success:function(res){
          $("#footer").replaceWith(res);

          var wechat=$("#S_div>#contact_Logo>a:first-child>img")
          var weibo=$("#S_div>#contact_Logo>a:last-child>img")
          wechat.mouseover(function(){
              $(this).attr("src","img/wechat_h.png")
          })
          wechat.mouseleave(function(){
            $(this).attr("src","img/wechat.png")
          })
          weibo.mouseover(function(){
            $(this).attr("src","img/weibo_h.png")
          })
          weibo.mouseleave(function(){
            $(this).attr("src","img/weibo.png")
          })
          }
      })
  })


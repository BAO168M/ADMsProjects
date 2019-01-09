$(function(){
    $("head").append("<link rel='stylesheet' href='../css/header.css'>");
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res);
            //console.log(res)

            /*隐藏菜单*/
            //1  鼠标经过变色
            var img_a=$("#nav1>li:first-child>a")
            img_a.parent().siblings().children().mouseover(function(){
                var $a=$(this);
                //console.log($a)
                $a.parent().siblings()
                  .children().css({"color":"#ddd","transition": "color 0.15s ease-in-out"})
            })
            img_a.parent().siblings().children().mouseout(function(){
                var $a=$(this);
                $a.parent().siblings()
                  .children().css({"color":"#646464","transition": "color 0.15s ease-in-out"})
            })
            //2   显示隐藏菜单
            var list_a=$("#list_a");
            var menu=$(".menu");
            // var list_li=$("#list_li");
            list_a.mouseover(function(){
                menu.toggle(function(){
                   $(this).show();//显示div
                });
            })
            list_a.parent().mouseleave(function(){
                menu.hide()
            })
            menu.mouseover(function(){
                $(this).show();
            })
            menu.mouseleave(function(){
                $(this).toggle(function(){ 
                    $(this).hide()//隐藏div
                })
            }) 

            /*媒体选择的导航栏*/
            var btn=$("#SmallNav>.myNavbar>button")
            var main=$("#SmallNav>#main")
            var demo=$("#demo")
            var Sspan_a=$("#SmallNav>#main>ul>li:first-child>a")
            var Sspan=$("#SmallNav>#main>ul>li:first-child>a>span")
            var myHtml=$(".myHtml")
            myHtml.hide()
            myHtml.css("height",innerHeight)
            //1 点击btn按钮关闭main 如果demo显示则关闭
            btn.click(function(){
                if(!main.hasClass("show")){
                    demo.removeClass("show")
                }
                myHtml.fadeToggle()
            })
            //2 点击其他项  demo自动折叠隐藏
            Sspan_a.parent().siblings().click(function(){
                if(demo.hasClass("show")){
                    demo.toggle(function(){
                        demo.removeClass("show")
                        if(demo.attr("style","none")){
                            demo.attr("style","block")
                        }
                    })
                    Sspan.addClass("myRotate")
                }
            })
            //3 小三角指示标志
            Sspan_a.click(function(){
                Sspan.toggleClass("myRotate")
            })
            //4 点击黑色半透明地方导航收起来
            myHtml.click(function(){
                main.removeClass("show")
                myHtml.fadeToggle()
            })

            //5 滚动的时候半透明全程遮盖
            $(window).scroll(function(){
                var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
                myHtml.css("height",innerHeight+scrollTop)
            })
            

            }
        })
    })

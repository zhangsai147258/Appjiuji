var  newoFun=(function(){
  // 头部轮播图
    function headRote(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: true,
          })        
    }
    function addFun(){
      new Vue({
        el:'.adminBox',
        data:{
          cityInputVal:'',
        },
        methods:{
          cityPatFun:function(){
            this.$refs.city.cityFun();
          },
          cityjs:function(data){
            this.cityInputVal=data;              
          }
        }
      })
    }
    //懒加载
    function lazyFun(){
      var flag=true;
      $(window).on('scroll',function(){
        if(flag){
          flag=false;
          $("img").lazyload({ effect : "fadeIn" });
        }
      })
    }
    //滚动加载发送ajax;
    function crollAjax(){
      var flag2 = true;
      var objoffdetH = $('.newo-hui').offset().top;
      var windowH = $(window).height();
      $(window).on('scroll',function(){
        var winScrollH = $(window).scrollTop();
        if (winScrollH + windowH > objoffdetH && flag2 == true){
          flag2 = false;
            $.ajax({
              type: 'get',
            url: "api/newoAjax.php",
            data: {
              type: 0
            },
            dataType: "json",
            beforeSend:function(){
              var str='';
              for(var i=0;i<10;i++){
                str+='<li><a href="" class="newo-imgBox"><img src="images/newo/sec33.gif" alt=""></a><div><p class="newo-name"></p><div class="newo-price"><span class="newo-price1"></span><span class="newo-price2"></span></div></div></li>';
              }
              $('.newo-hui-bottom ul').html(str);
            },
            success:function(data){
              console.log(data)
              var html = ejs.render(document.getElementById('tpl').innerHTML, { data: data });
              $('.newo-hui-bottom ul').html(html);
            }
          })
        }
      })
    }
    function locaT(){
      $('input').on('click',function(){
        location.href="search.html"
      })
    }
    return {
        headRote:headRote,
        lazyFun:lazyFun,
        crollAjax:crollAjax,
        locaT:locaT,
        addFun:addFun
    }
})()
newoFun.headRote();
newoFun.lazyFun();
newoFun.crollAjax();
newoFun.locaT();
newoFun.addFun();

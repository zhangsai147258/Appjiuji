document.cookie="user=wsj123"
var secRotate = (function () {
  // 头部轮播图
  function banerRotate() {
    var mySwiper = new Swiper('.sec-banner', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true,
    })
  };
  //限时抢购轮播图 
  function shopRotate() {
    var mySwiper2 = new Swiper('.item', {
      slidesPerView: 1.43,
      // slidesPerGroup :1.43,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      freeMode : true,
      freeModeMomentum : false,
    })
  };
  //滚动时搜索框变化  
  function croll() {
    $(window).scroll(function () {
      var winScroll = $(window).scrollTop();
      if (winScroll > 0 && winScroll < 93.5) {
        $('.fix-box').addClass('fix-box2');
      } else if (winScroll > 143) {
        $('.fix-box').removeClass('fix-box2').addClass('fix-box3');
      } else {
        $('.fix-box').removeClass('fix-box2').removeClass('fix-box3');
      }
    })
  }
  //滚动加载数据(热销)
  function scroAjax() {
    var flag = true;
    var objoffdetH = $('.sec-all').offset().top;
    var windowH = $(window).height();
    $(window).scroll(function () {
      var winScrollH = $(window).scrollTop();
      if (winScrollH + windowH > objoffdetH && flag == true) {
        console.log(1)
        flag = false;
        $.ajax({
          type: 'get',
          url: "api/secAjax.php",
          data: {
            type: 0
          },
          dataType: "json",
          beforeSend:function(){
            var str=""
            for(var i=0;i<5;i++){
              str+='<li>';
              str+='<div class="cont-box"><a href="" class="sec-pic"><img src="images/sec/sec33.gif" alt=""></a><span class="sec-old"></span></div>'
              str+='</li>'
            }
            $('.sec-all-te').html(str);
          },
          success: function (data) {
            console.log(1)

            console.log(data)
            var html = ejs.render(document.getElementById('tpl').innerHTML, { data: data });
            $("img").lazyload({ effect: "fadeIn" }).lazyload({ threshold: 300 });;
            $('.sec-all-te').html(html);
          }
        })
      }
    })
  }
  //滚动加载数据(许愿框的头像)
  function bleshAjax() {
    var flag = true;
    var objoffdetH2 = $('.sec-blesh').offset().top;
    var windowH2 = $(window).height();
    $(window).scroll(function () {
      var winScrollH2 = $(window).scrollTop();
      if (winScrollH2 + windowH2 > objoffdetH2 && flag == true) {
        flag = false;
        $.ajax({
          type: 'get',
          url: "api/secAjax2.php",
          data: {
            type2: 2
          },
          dataType: "json",
          success: function (data2) {
            console.log(data2)
            var str = "";
            for (var i = 0; i < data2.length; i++) {
              str += '<img src="' + data2[i].picsrc + '" alt="">'
            }
            $('.sec-third1').html(str);
          }
        })
      }
    })
  }
  //滚动加载数据(轮播图)
  function dataFun(){
    var date = new Date();
    var near = 1900 + date.getYear();
    var mon = 1 + date.getMonth();
    var day = date.getDate();
    return near+'-'+mon+'-'+day;
  }
  function comAjax() {
    var flag = true;
    var objoffdetH3 = $('.sec-blesh').offset().top;
    var windowH3 = $(window).height();
    $(window).scroll(function () {
      var winScrollH3 = $(window).scrollTop();
      if (winScrollH3 + windowH3 > objoffdetH3 && flag == true) {
        flag = false;
        $.ajax({
          type: 'get',
          url: "api/secAjax3.php",
          data: {
            type3: 3
          },
          dataType: "json",
          success: function (data3) {
            for(var a=0;a<data3.length;a++){
              console.log('ww')
              data3[a].dataw=dataFun();
            }
            console.log(data3)
            var html2 = ejs.render(document.getElementById('tpl2').innerHTML, { data3: data3 });
            $('.ble-sw').html(html2);
            //必须在渲染过后调用轮播图,不然没效果
            var mySwiper2 = new Swiper('.ble-rote', {
              direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项
              autoplay: true,
              slidesPerView: 3,
            })  
          }
        })
      }
    })
  }
  //滚动加载(评论)
  function comAjax2() {
    var flag = true;
    var objoffdetH3 = $('.sec-blesh').offset().top;
    var windowH3 = $(window).height();
    $(window).scroll(function () {
      var winScrollH3 = $(window).scrollTop();
      if (winScrollH3 + windowH3 > objoffdetH3 && flag == true) {
        flag = false;
        $.ajax({
          type: 'get',
          url: "api/secAjax4.php",
          data: {
            type4: 4
          },
          dataType: "json",
          success: function (data4) {
            for(var z=0;z<data4.length;z++){
              console.log('ww')
              data4[z].dataw=dataFun();
            }
            console.log(data4)
            var html3 = ejs.render(document.getElementById('tpl3').innerHTML, { data4: data4 });
            $('.com-wraper').html(html3);
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
    banerRotate: banerRotate,// 头部轮播图
    shopRotate: shopRotate,//限时抢购轮播图 
    croll: croll,//滚动时搜索框变化  
    scroAjax: scroAjax,//滚动加载数据(热销)
    bleshAjax: bleshAjax,//滚动加载数据(许愿框的头像)
    comAjax:comAjax,//滚动加载数据(轮播图)
    comAjax2:comAjax2,//滚动加载(评论)
    locaT:locaT
  }
})()
secRotate.banerRotate();// 头部轮播图
secRotate.shopRotate();//限时抢购轮播图 
secRotate.croll();//滚动时搜索框变化  
secRotate.scroAjax();//滚动加载数据(热销)
secRotate.bleshAjax();//滚动加载数据(许愿框的头像)
secRotate.comAjax();//滚动加载数据(轮播图)
secRotate.comAjax2();//滚动加载(评论)
secRotate.locaT()




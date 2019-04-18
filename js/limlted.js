
var limlted = (function () {
  // 顶部轮播图
  function banner() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true, //可选选项，自动滑动
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
  // 结束

  // 标题列表
  function title() {
    var navSwiper = new Swiper(".headera", {
      freeMode: true,
      slidesPerView: "auto",
      freeModeSticky: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        dragSize: 150
      }
    });
  }
  // 结束
  // 标题列表点击变色
  function hdl() {
    for (var i = 0; i < $('.swiper-wrapper span').length; i++) {
      $('.swiper-slide span').click(function () {
        $(this).addClass('sad').parent().siblings().children('span').removeClass('sad');
      })
    }
  }
  // 结束

  // TAB切换请求数据
  function qiehuan() {
    $(".swiper-wrapper .swiper-slide").click(function () {
      var str = "";
      var kind = $(this).data("type"); //后台接收数据用来判断传回哪些数据;
      // console.log(kind);
      $.ajax({
        //tab切换点击发送ajax请求
        type: "get",
        url: "api/limlted.php",
        data: "kind=" + kind,
        dataType: "json",
        success: function (data) {
          console.log(data);
          var html = ejs.render($("#tpl").html(), { data: data });
          $(".shang").html(html);
        }
      });
    });
  }
  // 结束

  // 滚动加载
  function crollAjax() {
    var page=1;
    var flag = true;
    var objoffdetH = $(".shang").offset().top;
    console.log(objoffdetH);
    var windowH = $(window).height();
    console.log(windowH);
    $(window).on("scroll", function () {
      var winScrollH = $(window).scrollTop();
      if (winScrollH + windowH >= objoffdetH && flag == true) {
        flag = false;
        $.ajax({
          type: "get",
          url: "api/limlted2.php",
          data: "page="+page,
          dataType: "json",
          beforeSend: function () {
            var str = "";
            console.log(str);
            for (var i = 0; i <4; i++) {
              str += '<div class="rush-product-item relative border-bottom"><a href="" class="flex"><img src="images/tomtr/9999.gif" alt="" class="lazy-img rush-img flex-child-noshrinh"><div class="flex flex-col flex-justify-between flex-child-grow"><div><p class="font-15 lines-2"></p><p class="grey-9 selling-point"></p></div><div class="flex flex-justify-between flex-align-end flex-1"><div class="flex-child-grow"><div class="flex flex-align-end"><div class="flex flex-align-end margin-right"><span class="font-12 bold"></span><span class="font-20 bold"></span></div><del class="grey-9 font-12"></del></div><div class="percent flex flex"><p class="flex-child-grow"><span class="font-12"></span><i></i></p></div></div><div class="rush-btn red-bg"></div></div></div></a></div>';
              $(".shang").html(str);
            }
            flag=true;
            console.log(str)
            // page++;
         
          },
          // success: function (data) {
          //   console.log(data);
          //   var html = ejs.render(document.getElementById("tpl").innerHTML, { data: data });
          //   $(".shang").html(html);
          // }
        });
      }
    });

  }
   // 懒加载
   function LazyLoading() {
    $(".shang .rush-product-item a img").lazyload({
        effect: "fadeIn"
    });
    function load() {
        //窗口的高度
        var whi = $(window).height();
        //滚动条的值
        var offt = $(window).scrollTop();
        console.log(whi);
        $(".rush-product-item").each(function (index, a) {
            //内容距离页面dingdua
            var divtop = $(a).offset().top;
            // console.log(divtop);
            if (whi + offt >= divtop) {
                var obj = $(a).children();
                var old = obj.data("original");
                obj.attr("src", old);
            }
        });
    }
    load();
    $(window).on('click', function () {
        load();
    })
}
// 结束
// 倒计时
  function djs() {
    function dao() {
      var box = document.querySelector('.daoji');
      var a = new Date();
      var b = new Date('2019-02-22 00:00:00');
      var cha = b - a;
      var day = 24 * parseInt(cha / 1000 / 60 / 60 / 24);
      var hour = day + parseInt(cha / 1000 / 60 / 60 % 24);
      var min = parseInt(cha / 1000 / 60 % 60)
      var sec = parseInt(cha / 1000 % 60)
      box.innerHTML ='<div class="rush-product"><div class="timetip text-center"><p class="rush-timer">距结束 <span><span> ' + hour + ' </span>时<span> ' + min +  '</span> 分 <span> ' + sec + ' </span>秒</span></p></div></div>'
    }
    setInterval(dao, 1000);
  }
  // 结束
  return {
    banner: banner,
    title: title,
    qiehuan: qiehuan,
    crollAjax: crollAjax,
    hdl: hdl,
    djs: djs,
    LazyLoading:LazyLoading
  };
})();
limlted.banner();
limlted.title();
limlted.qiehuan();
// limlted.crollAjax();
limlted.hdl();
limlted.djs();
limlted.LazyLoading();

var search = (function() {
  function callHis(){
    $('.icon-zuojiantou').on('click',function(){
      window.history.back();
    })
  }
  //调用360接口
  function jsonpAjax() {
    $(".sear-box input").on("keyup", function() {
      $(".sear-cont").empty();
      var val2 = $(this).val();
      if (val2) { 
        $(".sear-se span").show();
      } else {
        $(".sear-se span").hide();
      }
      $.ajax({
        type: "get",
        url: "https://sug.so.360.cn/suggest",
        data: "word=" + val2 + "&encodein=utf-8&encodeout=utf-8&pq=&t=2584121",
        dataType: "jsonp",
        jsonpCallback: "__jsonp0__",
        success: function(data) {
          console.log(data.s);
          str = "";
          $(data.s).each(function(i, val) {
            str +=
              '<li><p class="content"><i class="iconfont icon-sousuo"></i><span>' +
              val +
              '</span></p><i class="iconfont icon-youjiantou"></i></li>';
            $(".sear-cont").html(str);
          });
        },
        complete: function() {
          $(".sear-cont li").on("click", function() {
            $(this)
              .css({ background: "#e10f02" })
              .siblings()
              .css({ background: "none" });
            $("input").val(
              $(this)
                .children("p")
                .children("span")
                .text()
            );
            $(".sear-cont").empty();
            // $(this).hide();
          });
          $(".sear-se span").on("click", function() {
            $("input").val("");
            $(".sear-cont").empty();
            $(this).hide();
          });
        }
      });
    });
  }
  //页面刷新和加载历史记录渲染
  function winFun() {
    $(window).on("load", function() {
      if (
        localStorage.message &&
        JSON.parse(localStorage.message).length != 0
      ) {
        renderFun();
        noneFun();
      } else {
        noneFun();
      }
    });
  }
  // 点击搜索添加历史内容
  function localS() {
    var flag = true;
    var arr = localStorage.message ? JSON.parse(localStorage.message) : [];
    // console.log(arr)
    $(".sear-op").on("click", function() {
      var arr = localStorage.message ? JSON.parse(localStorage.message) : [];
      $(".sear-cont").empty();
      var object = {
        mess: $("input").val()
      };
      //判断搜索内容是否重复
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].mess == $("input").val()) {
          flag = false;
          arr = arr;
        }
      }
      if (flag) {
        arr.push(object);
      }
      flag = true;
      arr.reverse();
      console.log("aa");
      console.log(arr);
      var infor = JSON.stringify(arr);
      console.log(typeof infor);
      localStorage.message = infor;
      renderFun();
      noneFun();
    });
  }
  //历史记录渲染
  function renderFun() {
    var infor2 = JSON.parse(localStorage.message);
    var str = "";
    for (var i = 0; i < infor2.length; i++) {
      // console.log(infor2[i].mess);
      str +=
        "<li><p>" +
        infor2[i].mess +
        '</p><p class="clear"><i class="iconfont icon-shanchu"></i>删除</p></li>';
    }
    $(".all-cont").html(str);
  }
  //删除单个历史记录
  function delSingle() {
    $(".all-cont").on("click", ".clear", function() {
      console.log("sssssss");
      var infor3 = JSON.parse(localStorage.message);
      infor3.splice($(this).index(".clear"), 1);
      console.log($(this).index(".clear"));
      // console.log(infor3);
      infor4 = JSON.stringify(infor3);
      localStorage.message = infor4;
      // console.log(arr)
      renderFun();
      noneFun();
    });
  }
  //删除全部的历史记录
  function delAll() {
    $(".his-title2").on("click", function() {
      // localStorage.clear();
      var infor6 = JSON.parse(localStorage.message);
      infor6 = [];
      var infor7 = JSON.stringify(infor6);
      localStorage.message = infor7;
      renderFun();
      noneFun();
    });
  }
  function noneFun() {
    if ($(".all-cont").children().length == 0) {
      console.log(99999);
      $(".none").show();
    } else {
      $(".none").hide();
    }
  }
  return {
    callHis:callHis,
    jsonpAjax: jsonpAjax, //调用360接口
    winFun: winFun, //页面刷新和加载历史记录渲染
    localS: localS, // 点击搜索添加历史内容
    delSingle: delSingle, //删除单个历史记录
    delAll: delAll //删除全部的历史记录
  };
})();
search.callHis()
search.jsonpAjax(); //调用360接口
search.winFun(); //页面刷新和加载历史记录渲染
search.localS(); // 点击搜索添加历史内容
search.delSingle(); //删除单个历史记录
search.delAll(); //删除全部的历史记录

(function () {
    // banner图
    var mySwiper = new Swiper('.swiper-container', {
        centeredSlides: true,// 默认居中
        loop: true,// 循环模式选项
        loopAdditionalSlides: 1,// 复制
        autoplay: true,
        // 如果需要分页器
        slidesPerView: 1.8,
        spaceBetween: 20
    })

    // 上下轮播
    var announcementSwiper = new Swiper('#announcement', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    })

    // tab切换
    $('.nice .cont').children().eq(0).show().siblings().hide();
    $('.relative .slide-tab .tab a').click(function (e) {
        e.preventDefault();
        var i = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.nice .cont').children().eq(i).show().siblings().hide();
        $('.nice .cont .sale-product a').remove();
        var code = $(this).index() + 1;
        // console.log(code)
        $.ajax({
            type: "get",
            url: 'api/vip1.php',
            data: "code=" + code,
            dataType: 'json',
            success: function (data) {
                var html = '';
                $.each(data, function (Index, val) {
                    $('.nice .cont .sale-product').empty();
                    html += "<a href=\"#\" class=\"sale-item\">";
                    html += "<img src=" + val.img + ">";
                    html += "<p class=\"pro-title\">" + val.detail + "</p>";
                    html += "<div class=\"pro-price\">";
                    html += "<span class=\"pice\">" + val.money + "</span>";
                    html += "<span class=\"btn\">" + val.message + "</span>";
                    html += "</div>";
                    html += "</a>";
                    html += "<a href=\"#\" class=\"sale-item\">";
                    html += "<img src=" + val.image + ">";
                    html += "<p class=\"pro-title\">" + val.details + "</p>";
                    html += "<div class=\"pro-price\">";
                    html += "<span class=\"pice\">" + val.pirce + "</span>";
                    html += "<span class=\"btn\">" + val.message + "</span>";
                    html += "</div>";
                    html += "</a>";
                    html += "<a href=\"#\" class=\"sale-item\">";
                    html += "<img src=" + val.images + ">";
                    html += "<p class=\"pro-title\">" + val.detailss + "</p>";
                    html += "<div class=\"pro-price\">";
                    html += "<span class=\"pice\">" + val.mon + "</span>";
                    html += "<span class=\"btn\">" + val.message + "</span>";
                    html += "</div>";
                    html += "</a>";
                    html += "<a href=\"#\" class=\"sale-item\">";
                    html += "<img src=" + val.pic + ">";
                    html += "<p class=\"pro-title\">" + val.detailsss + "</p>";
                    html += "<div class=\"pro-price\">";
                    html += "<span class=\"pice\">" + val.pir + "</span>";
                    html += "<span class=\"btn\">" + val.message + "</span>";
                    html += "</div>";
                    html += "</a>";
                });
                $('.nice .cont .sale-product').html(html);
            }
        })
    });


    // 限时
    var timer = document.querySelector('.timer');
    function dao() {
        var a = new Date();
        var b = new Date("2019-02-22 10:00:00");
        var cha = b - a;
        var day = parseInt(cha / 1000 / 60 / 60 / 24);
        var hour = parseInt(cha / 1000 / 60 / 60 % 24);
        var min = parseInt(cha / 1000 / 60 % 60)
        var sec = parseInt(cha / 1000 % 60)
        timer.innerHTML = '<em>' + day + '</em><em>' + hour + '</em>:<em>' + min + '</em>:<em>' + sec + '</em>';
        // console.log(cha/1000);
    }
    setInterval(dao, 1000);


    // 滚动加载
    function getScrTop() {
        return scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffest;
    }
    var page = 1;
    var flag = true;
    var nice = document.querySelector(".nice");
    var flex = document.querySelector(".flexx");
    window.onscroll = function () {
        var scrollT = getScrTop();
        var winH = window.innerHeight;
        var nices = nice.offsetTop;
        if (winH + scrollT >= nices) {
            if (flag) {
                flag = false;
                var xhr = new XMLHttpRequest();
                xhr.open('get', 'api/vip.php?page=' + page, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var data = JSON.parse(xhr.responseText);
                        console.log(data);
                        var htmlStr = "";
                        for (var i = 0; i < data.length; i++) {
                            htmlStr += "<div class=\"active-menu\">"
                            htmlStr += "<a href=\"#\" class=\"flex-center\">"
                            htmlStr += "<img src=" + data[i].img + ">"
                            htmlStr += "<div class=\"flex-c\">"
                            htmlStr += "<h4 class=\"font-5\">" + data[i].detail + "</h4>"
                            htmlStr += "<span class=\"font-2\">" + data[i].mesage + "</span>";
                            htmlStr += "</div>"
                            htmlStr += "</a>"
                            htmlStr += "</div>"
                        }
                        flex.innerHTML += htmlStr;
                        page++;
                        if (page > 2) {
                            nice.innerHTML += "";
                            return;
                        }
                        flag = true;
                    }
                }
            }
        }
    }
})()
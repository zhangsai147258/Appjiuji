(function () {
    // 轮播图
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: true,
    })

    // 滚动加载
    function getScrTop() {
        return scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffest;
    }
    var page = 1;
    var flag = true;
    var nice = document.querySelector(".nice");
    window.onscroll = function () {
        var scrollT = getScrTop();
        var winH = window.innerHeight;
        var nices = nice.offsetTop;
        if (winH + scrollT >= nices) {
            if (flag) {
                flag = false;
                var xhr = new XMLHttpRequest();
                xhr.open('get', 'api/quick.php?page=' + page, true);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var data = JSON.parse(xhr.responseText);
                        var htmlStr = "";
                        for (var i = 0; i < data.length; i++) {
                            // htmlStr += "<div class=\"data\">";
                            // htmlStr += "</div>";
                            // htmlStr += "<div class=\"floor-pic\">";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].title+">";
                            // htmlStr += "</a>";
                            // htmlStr += "</div>";
                            // htmlStr += "<div class=\"floor1\">";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].img+">";
                            // htmlStr += "</a>";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].images+">";
                            // htmlStr += "</a>";
                            // htmlStr += "</div>";
                            // htmlStr += "<div class=\"floor1\">";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].img+">";
                            // htmlStr += "</a>";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].images+">";
                            // htmlStr += "</a>";
                            // htmlStr += "</div>"
                            // htmlStr += "<div class=\"floor1\">";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].img+">";
                            // htmlStr += "</a>";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].images+">";
                            // htmlStr += "</a>";
                             // htmlStr += "</div>";
                            // htmlStr += "<div class=\"floor-pici\">";
                            // htmlStr += "<a href=\"#\" class=\"block\">"
                            // htmlStr += "<img src="+data[i].titles+">";
                            // htmlStr += "</a>";
                            // htmlStr += "</div>";
                            htmlStr += "<div class=\"data\">";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor-pic1\">";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].titless+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor2\">";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].pic+">";
                            htmlStr += "</a>";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].picture+">";
                            htmlStr += "</a>";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].pictures+">";
                            htmlStr += "</a>";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].picturess+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"data\">";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor-pici1\">";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].titlesss+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor3\">";
                            htmlStr += "<a href=\"#\" class=\"block1\">"
                            htmlStr += "<img src="+data[i].lt+">";
                            htmlStr += "</a>";
                            htmlStr += "<a href=\"#\" class=\"block1\">"
                            htmlStr += "<img src="+data[i].rt+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"data\">";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor-pic2\">";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].titlessss+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                            htmlStr += "<div class=\"floor4\">";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].left+">";
                            htmlStr += "</a>";
                            htmlStr += "<a href=\"#\" class=\"block\">"
                            htmlStr += "<img src="+data[i].right+">";
                            htmlStr += "</a>";
                            htmlStr += "</div>";
                        }
                        nice.innerHTML += htmlStr;
                        page++;
                        if (page > 1) {
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
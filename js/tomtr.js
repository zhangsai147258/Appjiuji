
var tomtr = (function () {
    // 横排点击效果
    function Thc() {
        for (var i = 0; i < $('.nav-list li').length; i++) {
            $('.nav-list li').click(function () {
                $(this).addClass('cur').siblings().removeClass('cur');
            })

        }
    }
    // 结束 
    // 竖排点击效果
    function vrce() {
        for (var i = 0; i < $('.nav-left li').length; i++) {
            $('.nav-left li').click(function () {
                $(this).addClass('cur').siblings().removeClass('cur');
            })
        }
    }
    // 结束
    //tab切换
    function TAB() {
        $('.content-box .box').children().eq(0).show().siblings().hide();

        $('.nav-bar .nav-list').children().click(function () {
            var i = $(this).index();
            $('.content-box .nav-left').eq(i).show().siblings().hide();

            var kind = $(this).data('type');
            // console.log(kind);
            $.ajax({
                type: 'get',
                url: 'api/tomtr.php',
                data: "kind=" + kind,
                dataType: 'json',
                success: function (data) {
                    // console.log(data);
                    var html = ejs.render($('#tpl').html(), { data: data });
                    $('.goods-box').html(html);
                }
            })
        });

        $('.nav-left').children().click(function () {
            var time = $(this).data('type');
            // console.log(time);
            $.ajax({
                type: 'get',
                url: 'api/time.php',
                data: "time=" + time,
                dataType: 'json',
                success: function (data) {
                    // console.log(data)
                    var html = ejs.render($('#tpl').html(), { data: data });
                    $('.goods-box').html(html);
                }
            })
        })
    }
    // 结束
    // 懒加载
    function LazyLoading() {
        $(".goods-box a img").lazyload({
            effect: "fadeIn"
        });
        function load() {
            //窗口的高度
            var whi = $(window).height();
            //滚动条的值
            var offt = $(window).scrollTop();
            console.log(whi);
            $(".goods-item").each(function (index, a) {
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

    return {
        Thc: Thc,
        vrce: vrce,
        TAB: TAB,
        LazyLoading: LazyLoading
    };
})();
tomtr.Thc();
tomtr.vrce();
tomtr.TAB();
tomtr.LazyLoading()
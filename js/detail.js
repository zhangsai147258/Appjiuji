
var banSwiper,t, s,bannerBigimg;

//首屏数据加载
function firstData() {
    $.ajax({
        type: 'POST',
        url: 'api/detail-head.json',
        // data: '',
        dataType: 'json',
        // beforeSend: function () {
        // },
        success: function (e) {
            t = e.data;
            // console.log(e);
            if (e.code == 0) {
                //首屏数据   
                banData.firstScreen();
                // 滑动切换
                banData.slideTab();
                // 按钮tab
                banData.btnTab();
                //视频播放---查看大图
                banData.video();
                // 3d视图 -数据
                banData.ban3d();
                // 规格  -数据
                productData.proSize();
                // 滚动事件
                scrollEvent();
                // 促销活动  -数据
                productData.proSales();
                //选商品
                var select = ejs.render($('#select-shop-data').html(), { msg: t });
                $('.shop-selected').html(select);
                shops.shopShow();            
            } else {
                alert('错误');
            }
        }
    })
};
firstData();
//地址以下数据
floorData();
// 直接提交购物车
shopCarbtn();
//首屏数据
var banData = (function () {
    //banner图 数据
    function firstScreen() {
        var tpl = ejs.render($('#ban').html(), { msg: t });
        $('.banner').html(tpl);
        var pro = ejs.render($('#produ').html(), { msg: t });
        $('.product').html(pro);
    }
    // 滑动切换
    function slideTab(){
        banSwiper = new Swiper('.banner', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            on: {
                slideChangeTransitionStart: function () {
                    // console.log(this.activeIndex);
                    if (this.activeIndex == 0) {
                        $('.ban-tabs button:first-child').addClass('active').siblings().removeClass('active');
                        $('.ban-tabs img').eq(0).show().siblings('img').hide();
                    } else if (this.activeIndex >= 6) {
                        $('.ban-tabs button').eq(2).addClass('active').siblings().removeClass('active');
                    } else if (this.activeIndex >= 2 && this.activeIndex <= 5) {
                        $('.ban-tabs button').eq(1).addClass('active').siblings().removeClass('active');
                    } else {
                        $('.ban-tabs button').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                        $('.ban-tabs img').eq(1).show().siblings('img').hide();
                    }
                }
            }
        });
    }
    // 按钮tab
    function btnTab(){
        $('.banner').on('tap','button',function (e) {
            console.log($(this).index());
            // e.preventDefault();
            if ($(this).index() == 0) {
                $('.ban-tabs button:first-child').css({ background: 'red', color: '#fff' });
                $('.ban-tabs img').eq(0).show().siblings('img').hide();
                banSwiper.slideTo($(this).index());
            }
            else if ($(this).index() == 1) {
                $('.ban-tabs button:first-child').css({ background: '#fff', color: '#000' });
                $('.ban-tabs img').eq(1).show().siblings('img').hide();
                banSwiper.slideTo($(this).index());
            }
            else if ($(this).index() == 2) {
                banSwiper.slideTo(5);
                $(this).addClass('active').siblings().removeClass('active');
            } 
            else {
                e.preventDefault();
            }
        })
    }
    // 3d视图
    function ban3d() {
        // 点击穿透
        Zepto(function ($) {
            FastClick.attach(document.body);
            $('.play-3d-btn').on('click', function () {
                $('.ban-mask').show();
                $('.ban-3d').show();
                console.log(1);
                // 3d视图加载
                var ban3d = ejs.render($('#ban-3d').html(), { msg: t });
                $('.ban-3d-img').html(ban3d);
                $('.ban-3d-img').children().eq(0).show().siblings().hide();
            })
            $('.ban-3d a').on('click', function () {
                $('.ban-mask').hide();
                $('.ban-3d').hide();
            });
            $('.ban-mask').on('click', function () {
                $(this).hide();
                $('.ban-3d').hide();
            })
        });
        //滑动切换3d图
        var x, y, n = 0;
        $('.ban-3d-img').bind('touchstart', function (e) {
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        })
        $('.ban-3d-img').bind('touchmove', function (e) {
            e.preventDefault();
            e.stopPropagation();
            x2 = e.touches[0].pageX;
            y2 = e.touches[0].pageY;
            //判断滑动有效距离
            if (x2 > x && x2 - x > 40 && x2 - x > y2 - y) {
                n++;
                if (n > 38) {
                    n = 0;
                }
                // console.log('向右');
                $('.ban-3d-img').children().eq(n).show().siblings().hide();
            }
            if (x > x2 && Math.abs(x2 - x) > 40 && Math.abs(x2 - x) > Math.abs(y2 - y)) {
                n--;
                if (n < 0) {
                    n = 38;
                }
                console.log('向左');
                $('.ban-3d-img').children().eq(n).show().siblings().hide();
            }
        })
    }
    // 加载大图
    function bigimgData(){
        $.ajax({
            type: 'POST',
            url: 'api/detail-head.json',
            // data: '',
            dataType: 'json',
            // beforeSend: function () {
            // },
            success: function (e) {
                t = e.data;
                if (e.code == 0) {
                    var bigImg = ejs.render($('#big-img').html(), { msg: t });
                    $('.banner-bigimg-box').html(bigImg);
                } else {
                    alert('错误');
                }
            }
        })
        
    }
    //点击视频播放---查看大图
    function video() {
        var flag  = true;
        //点击屏幕播放
        $('.banner .swiper-slide').on('touchstart', function (e) {
            var x, y,x2,y2,index = $(this).index();
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
            $('.banner .swiper-slide').on('touchmove', function (e) {
                x2 = e.touches[0].pageX;
                y2 = e.touches[0].pageY;   
            })
            //判断是否滑动
            setTimeout(function(){
                if(x2 == undefined && y2 == undefined){
                    if( index == 0){
                        // 视频播放
                        videoPlay();
                    }else{
                        // console.log(index);
                        //查看大图
                        $('.banner-bigimg-box').slideDown('15rem',0,500);
                        slideUp();
                        // 加载大图
                        if(flag){
                            flag = false;
                            bigimgData();
                        }
                        // 切换大图片
                        lookBigimg();
                        $('.banner-bigimg-box').on('tap','.banner-bigimg-btn',function(){
                            $('.banner-mask').animate({
                                height: 0
                            },500);
                            $('.banner-bigimg-box').animate({
                                top:'15rem'
                            },500);
                        })
                    }
                    // console.log('点击');
                }else{
                    // console.log('滑动');
                }
            },300)
        })
        function slideUp(){
            $('.banner-mask').show();
            $('.banner-mask').css({
                position: 'absolute',
                visibility: 'hidden'
            })
            $('.banner-mask').css({
                position: 'fixed',
                visibility: 'visible',
                overflow: 'hidden',
                height: 0
            })
            $('.banner-mask').animate({
                height:'100%'
            },500)
        }
        //按钮播放
        $('.play-btn').on('tap', function () {
            videoPlay(); 
        })
    }
    // 视频播放
    function videoPlay(){
        $('.play-btn').hide();
        vdo.play();
        $('#vdo').attr('controls', 'controls');
        $('#vdo').css({ background: '#000' });
    }
    // 切换大图
    function lookBigimg(){
        bannerBigimg = new Swiper('.banner-bigimg',{
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            on: {
                slideChangeTransitionStart: function () {
                    $('.banner-bigimg-box .page-show').html($('.banner-bigimg-box .swiper-pagination').html());
                }
            }
        });
        $('.banner-bigimg-box .page-show').html($('.banner-bigimg-box .swiper-pagination').html());
    }
    return {
        firstScreen: firstScreen,
        slideTab:slideTab,
        btnTab:btnTab,
        ban3d: ban3d,
        video: video,
        lookBigimg:lookBigimg
    }
})();
//规格以下数据
var productData = (function () {
    // 规格 ---以下数据
    function proSize() {
        //规格
        var proSize = ejs.render($('#pro-size').html(), { msg: t });
        $('.pro-size-box').html(proSize);
        var sizeSwiper = new Swiper('.pro-size', {
            slidesPerView: 3.5
        });
        proSizetit();
        // 不同服务价格
        var serv = ejs.render($('#serv-data').html(), { msg: t });
        $('.service').html(serv);
    }
    //规格----跳转
    function proSizetit() {
        $('.pro-size .swiper-slide').eq(0).on('tap', function () {
            $('.aaaa').scrollTop(2538);
            $('.detail-tabs a').eq(1).addClass('act').siblings().removeClass('act');
            $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
            $('.detail .tabs').eq(1).show().siblings('.tabs').hide();
        });
    }
    // 促销活动---以下数据
    function proSales() {
        $.ajax({
            type: 'get',
            url: 'api/detail-rec.json',
            dataType: 'json',
            // beforeSend: function () {
            // },
            success: function (e) {
                s = e.data;
                // console.log(s);
                if (e.code == 0) {
                    // 促销活动  --以下数据
                    var sale = ejs.render($('#sales-data').html(), { msg: s });
                    $('.sales').html(sale);
                    //促销活动弹窗
                    salesPopup();
                    //九级分期弹出
                    stagesPopup();
                } else {
                    alert('错误');
                }
            }
        })
    }
    //促销活动弹窗
    function salesPopup() {
        //弹出
        $('.discounts-btn').on('tap', function () {
            $('.sales-mask').show();
            $('.sales-pop-up-wrapper').css({ height: '7.5rem' });
        })
        $('.sales-tit a').on('tap', function () {
            $('.sales-mask').show();
            $('.sales-pop-up-wrapper').css({ height: '7.5rem' });
        })
        //关闭
        $('.sales-pop-up-tit a').on('tap', function () {
            $('.sales-mask').hide();
            $('.sales-pop-up-wrapper').css({ height: '0' });
        })
        $('.sales-mask').on('tap', function () {
            $('.sales-mask').hide();
            $('.sales-pop-up-wrapper').css({ height: '0' });
        })
    }
    //九级分期弹出
    function stagesPopup() {
        //弹出
        $('.stages i').on('tap', function () {
            $('.stages-mask').show();
            $('.stages-pop-up-wrapper').css({
                height: '9rem'
            });
        });
        // 一级tab切换
        $('.stages-tabs-first  li').on('tap', function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.stages-detail-wrapper').eq($(this).index()).show().siblings('.stages-detail-wrapper').hide();
        })
        // 二级tab切换
        $('.stages-tabs-second  li').on('tap', function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.stages-list').eq($(this).index()).show().siblings('.stages-list').hide();
        })
        //关闭
        $('.stages-mask').on('tap', function () {
            $(this).hide();
            $('.stages-pop-up-wrapper').css({
                height: 0
            });
        });
    }
    //商品弹窗 --数据
    function shopPop() {
        $.ajax({
            type: 'post',
            url: 'api/detail-shop-option.json',
            dataType: 'json',
            // beforeSend: function () {
            // },
            success: function (e) {
                s = e.data;
                // console.log(s);
                if (e.code == 0) {
                    //商品弹窗
                    // console.log(s.jiujiService[0].sku[0].price);
                    var shopData = ejs.render($('#shop-pop-data').html(), { msg: s });
                    $('.shops-wrapper').html(shopData);
                    //商品 默认选项
                    $('.shops-options a:first-child').addClass('active').siblings().
                        removeClass('active');
                    $('.shops-color .color').html($('.shops-module-color a.active').html());
                    $('.shop-selected .color').html($('.shops-module-color a.active').html());
                    $('.shops-color .memory').html($('.shops-module-memory a.active').html());
                    $('.shop-selected  .memory').html($('.shops-module-memory a.active').html());
                    //商品弹窗 --事件
                    shops.banScroll();
                    shops.shopSelect();
                    shops.shopColor();
                    shops.shopMemory();
                    shops.shopVsn();
                    shops.shopNum();
                } else {
                    alert('错误');
                }
            }
        })
    }
    return {
        proSales: proSales,
        proSize: proSize,
        shopPop: shopPop
    }
})();
//商品
; var shops = (function () {
    //弹出隐藏
    function shopShow() {
        var flag = true;
        $('.shops-show-btn').on('tap', function () {
            $('.shops-wrapper').css({ top: '.88rem' });
            $('.shops-mask').show();
            //商品弹窗 --数据
            if (flag) {
                flag = false;
                productData.shopPop();
            }
            submit();
        })
        $('.shops-wrapper').on('tap',".shops-close-btn", function (e) {
            $('.shops-wrapper').css({ top: '15rem' });
            $('.shops-mask').hide();
        })
        $('.shops-mask').on('tap', function () {
            $('.shops-wrapper').css({ top: '15rem' });
            $('.shops-mask').hide();
        })
    }
    //滚动禁止冒泡
    function banScroll() {
        $('.shops-mask').scroll(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
    }
    //选择参数  标记
    function shopSelect() {
        // var priced ;
        //选择参数
        $('.shops-module-content a:not(.not-option)').on('tap', function () {
            // priced ='';
            if ($(this).hasClass('options') && $(this).hasClass('active')) {
                $(this).parent().siblings().children('.mar-left').hide();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).parent().siblings().children('.mar-left').show();
                // var gggg = Number($('.shops-price span').html());
                // priced = Number($(this).children('.options-price').html());
                // console.log(priced+gggg+'.00');
                // $('.shops-price span').html(priced+gggg+'.00');            
            }
        })
    }
    //颜色tab
    function shopColor() {
        $('.shops-module-color a').on('tap', function () {
            $(this).data("ppid", s.sku[0].list[$(this).index()].ppid);

            $('.shop-selected').data("ppid", s.sku[0].list[$(this).index()].ppid);
            $('.shop-selected').data("img", s.sku[0].list[$(this).index()].imagePath);

            $('.shops-img-box img').attr('src', s.pictures[$(this).index()]);
            $('.shops-num span').html(s.sku[0].list[$(this).index()].ppid);
            $('.shops-color .color').html($('.shops-module-color a.active').html());
            $('.shop-selected .color').html($('.shops-module-color a.active').html());
        })
    }
    //容量
    function shopMemory() {
        $('.shops-module-memory a').on('tap', function () {
            $('.shops-price  .pricE').html(s.sku[1].list[$(this).index()].price);
            $('.shop-selected').data("price", s.sku[1].list[$(this).index()].price);

            $('.shops-color .memory').html($('.shops-module-memory a.active').html());
            $('.shop-selected  .memory').html($('.shops-module-memory a.active').html());
        })
    }
    // 版本
    function shopVsn() {
        var m;
        $('.shops-module-versions a').on('tap', function () {
            console.log(s.relation[0].price);
            if ($(this).index() == 0) {
                $('.shops-price  .pricE').html(s.price);
                $('.shops-module-color').html(`
                    <a href="javascript:;">${s.sku[0].list[0].value}</a>
                    <a href="javascript:;">${s.sku[0].list[1].value}</a>
                    <a href="javascript:;">${s.sku[0].list[2].value}</a>
                `);
                shopSelect();
                shopColor();
                $('.shops-module-color a:first-child').addClass('active').siblings().removeClass('active');
            } else if ($(this).index() == 1) {
                $('.shops-price  .pricE').html(s.sku[0].list[$(this).index() - 1].price);
                $('.shops-module-color').html(`
                    <a href="javascript:;">${s.sku[0].list[0].value}</a>
                    <a href="javascript:;">${s.sku[0].list[1].value}</a>
                    <a href="javascript:;">${s.sku[0].list[2].value}</a>
                `);
                $('.shops-module-color a:first-child').addClass('active').siblings().removeClass('active');
                shopSelect();
                shopColor();
            } else if ($(this).index() == 3) {
                $('.shops-module-color').html(`
                    <a href="javascript:;">${s.sku[0].list[1].value}</a>
                    <a href="javascript:;">${s.sku[0].list[2].value}</a>
                `);
                $('.shops-module-color a:first-child').addClass('active').siblings().removeClass('active');
                $('.shops-price  .pricE').html(s.relation[0].price);
                $('.shops-num span').html(s.relation[0].ppid);
                shopColor();
                shopSelect();
            }
            $('.shops-color .color').html($('.shops-module-color a.active').html());
            $('.shop-selected .color').html($('.shops-module-color a.active').html());
            $('.shops-color .memory').html($('.shops-module-memory a.active').html());
            $('.shop-selected  .memory').html($('.shops-module-memory a.active').html());
        })
    }
    //数量点击加减
    function shopNum() {
        var count = 1;
        var mqe = $('.shop-selected').data("price");
        $('.shops-module-count .btn-minus').on('tap', function () {
            count--;
            if (count <= 1) {
                count = 1;
            }
            $('.shops-price .pricE').html(count*mqe+'.00');
            $('.shop-selected').data("price",count*mqe+'.00');
            $('.shop-selected .num').html(count);
            $('.shops-module-count .product-number').html(count);
            $('.shop-selected .num').html(count);
        })
        $('.shops-module-count .btn-add').on('tap', function () {
            count++;    
            $('.shops-price .pricE').html(count*mqe+'.00');
            $('.shop-selected .num').html(count);
            $('.shop-selected').data("price",count*mqe+'.00');
            $('.shops-module-count .product-number').html(count);
            $('.shop-selected .num').html(count);
        }) 
    }
    //提交信息
    function submit() {
        $('.shops-wrapper').on('tap','.submit-btn',function(){
            var www = $('.shop-selected').data('ppid');
            var qqq = $('.shop-selected').data('trademark');
            var aaa = $('.shop-selected').data('versions');
            var  bbb = $('.shop-selected .color').html();
            var ccc = $('.shop-selected .memory').html();
            var ddd = $('.shop-selected .num').html();
            var eee = $('.shop-selected').data('price');
            var rrr = $('.shop-selected').data('img');
            var user;
            function checkCookie(){
                user = getCookie("user");
                // console.log('uuuuuuuuuuuuuu')
                console.log(user)
                if(user != null){
                    $('.car-login').hide();
                }else{
                    $('.car-login').show();
                }
            }
            checkCookie();
            var ttt = user;//登录名
            // console.log(www,qqq,ddd,eee,rrr,ttt);
            var msss = "?ppid="+www+"&trademark="+qqq+aaa+' '+ccc+"&num="+ddd+"&price="+eee+"&img="+rrr+"&login="+ttt;
            console.log(msss);
            $.ajax({
                type: 'get',
                url: 'api/shopsubmit.php',
                data: msss,
                // dataType: 'json',
                // beforeSend: function () {
                // },
                success: function (da){
                    console.log(da);
                    if(da){
                        $('#shop-car-tit').show();
                        setTimeout(function(){
                            $('#shop-car-tit').hide();
                        },1000)
                    } 
                }
            })
        })
    }
    return {
        shopShow: shopShow,
        banScroll: banScroll,
        shopSelect: shopSelect,
        shopColor: shopColor,
        shopMemory: shopMemory,
        shopVsn: shopVsn,
        shopNum: shopNum
    }
})();
//地址以下数据
function floorData() {
    $.ajax({
        type: 'get',
        url: 'api/detail-rec.json',
        dataType: 'json',
        // beforeSend: function () {
        // },
        success: function (e) {
            s = e.data;
            // console.log(s);
            if (e.code == 0) {
                var floorData = ejs.render($('#floorData').html(), { msg: s });
                $('.floor-wrapper').html(floorData);
                //推荐商品
                var recSwiper = new Swiper('.rec-shop-swiper', {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                });
            } else {
                alert('错误');
            }
        }
    })
    
}
//详情
function detail(){
    var detailData = ejs.render($('#detailData').html(), { msg: s });
    $('.detail-t-wrapper').html(detailData);
}
//看了又看数据
function lookSeedata(){
    var lookSeedata = ejs.render($('#look-seeData').html(), { msg: s });
    $('.look-see').html(lookSeedata);
}
//滚动事件
function scrollEvent() {
    if ($('.aaaa').scrollTop() <= 0) {
        $('.app-guide').css({ height: '1rem' });
    }
    var flaggg = true;
    var flat = true;
    $('.aaaa').scroll(function (e) {
        var scroll = $('.aaaa').scrollTop();
        // console.log(scroll);
        if (scroll > 0) {
            $('.aaaa').css({
                top: '.88rem',
                transition: 'all .5s'
            });
            $('.app-guide').css({
                height: 0,
                transition: 'height .5s'
            });
        }
        if (scroll > 990) {
            $('.go-top').show();

        }else{
            $('.go-top').hide();
        }
        if(scroll > 1600 && flaggg){
            flaggg = false;
            // 详情
            detail();
            // 详情tab
            detailTabs();
        }
        if (scroll > 1800 && scroll < 2538) {
            $('nav').html(`
                <a href="javascript:;" class="active">商品</a>
                <a href="javascript:;">评论</a>
                <a href="javascript:;">详情</a>`
            );
            $('nav a').eq(1).addClass('active')
                .siblings().removeClass('active');
            $('.detail-tabs').css({ position: 'static' });
            $('.detail-mask').hide();
        } else if (scroll >= 2538) {
            $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
            $('.detail-tabs').css({ position: 'fixed' });
            $('.detail-mask').show();
        }
        if(scroll >= 9500 && flat){
            flat = false;
            lookSeedata();
        }
    })
    // 返回顶部
    $('.go-top').on('tap', function () {
        scrollTop();
    })
};
//详情tab切换
function detailTabs() {
    $('.detail .tabs').eq(0).show();
    $('.detail-tabs a').on('tap', function () {
        $(this).addClass('act').siblings().removeClass('act');
        $('aaaa').scrollTop(2538);
        $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
        $('.detail .tabs').eq($(this).index()).show().siblings('.tabs').hide();
    })
};
//返回顶部 --动画封装
function scrollTop() {
    var m = $('.aaaa').scrollTop();
    var timer = setInterval(function () {
        m -= 100;
        if (m <= 0) {
            m = 0;
            clearInterval(timer);
        }
        $('.aaaa').scrollTop(m);
    }, 100)
};

//头部广告 切换
function headerGuide() {
    $('header .close').on('tap', function () {
        $('.aaaa').css({
            top: '.88rem',
            transition: 'all .5s'
        });
        $('.app-guide').css({
            height: 0,
            transition: 'height .5s'
        });
    })
};
headerGuide();
//隐藏菜单 出现
function menuShow() {
    var scroll = $(window).scrollTop();
    var flag = true;
    $('header .side').on('tap', function () {
        if (flag) {
            $('header .menu').css({ height: '1rem' });
            flag = false;
        } else {
            $('header .menu').css({ height: '0' });
            flag = true;
        }
    })
};
menuShow();

// 直接提交购物车
function shopCarbtn(){
    $('.footer-submit a').on('tap',function(e){
        e.preventDefault();
        e.stopPropagation();
        var www = $('.shop-selected').data('ppid');
        var qqq = $('.shop-selected').data('trademark');
        var aaa = $('.shop-selected').data('versions');
        var  bbb = $('.shop-selected .color').html();
        var ccc = $('.shop-selected .memory').html();
        var ddd = $('.shop-selected .num').html();
        var eee = $('.shop-selected').data('price');
        var rrr = $('.shop-selected').data('img');
        var user;
        function checkCookie(){
            user = getCookie("user");
            // console.log('uuuuuuuuuuuuuu')
            console.log(user)
            if(user != null){
                $('.car-login').hide();
            }else{
                $('.car-login').show();
            }
        }
        checkCookie();
        var ttt = user;//登录名
        // console.log(www,qqq,ddd,eee,rrr,ttt);
        var msss = "?ppid="+www+"&trademark="+qqq+aaa+' '+ccc+"&num="+ddd+"&price="+eee+"&img="+rrr+"&login="+ttt;
        console.log(msss);
        $.ajax({
            type: 'get',
            url: 'api/shopsubmit.php',
            data: msss,
            // dataType: 'json',
            // beforeSend: function () {
            // },
            success: function (da){
                console.log(da);
                if(da){
                    $('#shop-car-tit').show();
                    setTimeout(function(){
                        $('#shop-car-tit').hide();
                    },1000)
                } 
            }
        })
          
    })
}



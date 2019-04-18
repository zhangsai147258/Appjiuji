
//头部广告
;(function(){
    $('header .close').on('touchstart',function(){
        $('.aaaa').css({
            top:'.88rem',
            transition:'all .5s'
        });
        $('.app-guide').css({
            height:0,
            transition:'height .5s'
        });
    })
})();
//视频播放
; (function () {
    // $('#vdo').on('touchstart',function () {
    //     // $('.play-btn').hide();
    //     // vdo.play();
    //     // $(this).attr('controls', 'controls');
    //     // $(this).css({ background: '#000' });
    // })
    $('.play-btn').on('touchstart',function () {
        $(this).hide();
        vdo.play();
        $('#vdo').attr('controls', 'controls');
        $('#vdo').css({ background: '#000' });
    })
})();
//滚动事件
;(function(){
    if($(window).scrollTop() > 0){
        $('.app-guide').css({height:0});
        $('.banner').css({marginTop:'.88rem!important'});
    }else{
        $('.app-guide').css({height:'1rem'});
    }
    $(window).scroll(function(e){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll>0){
            $('.banner').css({
                marginTop:'.88rem!important',
                transition:'all .5s'
            });
            $('.app-guide').css({
                height:0,
                transition:'height .5s'
            });
        }
        if(scroll>990){
            $('.go-top').show();
        }else{
            $('.go-top').hide();
        }
        if(scroll>1800 && scroll<2538){
            $('nav').html(`
                <a href="javascript:;" class="active">商品</a>
                <a href="javascript:;">评论</a>
                <a href="javascript:;">详情</a>`
            );
            $('nav a').eq(1).addClass('active')
            .siblings().removeClass('active');
            $('.detail-tabs').css({position:'static'});
            $('.detail-mask').hide();
        }else if(scroll>=2538){
            $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
            $('.detail-tabs').css({position:'fixed'});
            $('.detail-mask').show();
        }else{
            $('nav').html(`
            <a href="javascript:;" class="active">商品</a>
            <a href="javascript:;">评论</a>
            <a href="javascript:;">详情</a>`);
            $('.detail-tabs').css({position:'static'});
            $('.detail-mask').hide();
        }
    })
})();
//隐藏菜单 出现
; (function () {
    var scroll = $(window).scrollTop();
    var flag = true;
    $('header .side').on('touchstart',function () {
        if (flag) {
            $('header .menu').css({ height: '1rem' });
            flag = false;
        } else {
            $('header .menu').css({ height: '0' });
            flag = true;
        }
    })
})();
//banner 图切换
; (function () {
    var banSwiper = new Swiper('.banner', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        on: {
            slideChangeTransitionStart: function () {
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
    $('.ban-tabs button').on('touchstart',function (e) {
        e.preventDefault();
        if ($(this).index() == 0) {
            $('.ban-tabs button:first-child').css({ background: 'red', color: '#fff' });
            $('.ban-tabs img').eq(0).show().siblings('img').hide();
            banSwiper.slideTo($(this).index());
        } else if ($(this).index() == 2) {
            banSwiper.slideTo(5);
            $(this).addClass('active').siblings().removeClass('active');
        } else if ($(this).index() == 3) {
            e.preventDefault();
        } else {
            $('.ban-tabs button:first-child').css({ background: '#fff', color: '#000' });
            $('.ban-tabs img').eq(1).show().siblings('img').hide();
            banSwiper.slideTo($(this).index());
        }
    })
})();
// 3d视图
;(function(){
    // 点击穿透
    Zepto(function ($) {
        FastClick.attach(document.body);   
        $('.play-3d-btn').on('click', function () {
            $('.ban-mask').show();
            $('.ban-3d').show();
            // 3d视图加载
            var tpl = ejs.render($('#ban-3d').html(), { msg: t });
            $('.ban-3d-img').html(tpl);
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
    var x,y,n=0;
    $('.ban-3d-img').bind('touchstart',function(e){
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    })
    $('.ban-3d-img').bind('touchmove',function(e){
        e.preventDefault();
        e.stopPropagation();
        x2 = e.touches[0].pageX;
        y2 = e.touches[0].pageY;
        //判断滑动有效距离
        if(x2 > x && x2 - x > 40 && x2 - x > y2 -y){
            n++;
            if(n > 38){
                n = 0;
            }
            console.log('向右');
            $('.ban-3d-img').children().eq(n).show().siblings().hide();
        }
        if(x > x2 && Math.abs(x2 - x) > 40 && Math.abs(x2 - x) > Math.abs(y2 -y)){
            n--;
            if(n < 0){
                n = 38;
            }
            console.log('向坐');
            $('.ban-3d-img').children().eq(n).show().siblings().hide();
        }
    })
})();
//规格
;(function(){
    $('.pro-size .size').on('touchstart',function(){
        $('.detail-tabs a').eq(1).addClass('act').siblings().removeClass('act');
        var n = 2538;
        $(window).scrollTop(n);
        $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
        $('.detail .tabs').eq(1).show().siblings('.tabs').hide();
    });
})();
//促销活动弹窗
; (function () {
    //弹出
    $('.discounts-btn').on('touchstart',function(){
        $('.sales-mask').show();
        $('.sales-pop-up-wrapper').css({height:'7.5rem'});
    })
    $('.sales-tit a').on('touchstart',function(){
        $('.sales-mask').show();
        $('.sales-pop-up-wrapper').css({height:'7.5rem'});
    })
    //关闭
    $('.sales-pop-up-tit a').on('touchstart',function(){
        $('.sales-mask').hide();
        $('.sales-pop-up-wrapper').css({height:'0'});
    })
    $('.sales-mask').on('touchstart',function(){
        $('.sales-mask').hide();
        $('.sales-pop-up-wrapper').css({height:'0'});
    })
})();
//九级分期弹出
; (function () {
    //弹出
    $('.stages i').on('touchstart',function(){
        $('.stages-mask').show();
        $('.stages-pop-up-wrapper').css({
            height:'9rem'
        });
    });
    // 一级tab切换
    $('.stages-tabs-first  li').on('touchstart',function(){
        $(this).addClass('act').siblings().removeClass('act');
        $('.stages-detail-wrapper').eq($(this).index()).show().siblings('.stages-detail-wrapper').hide();
    })
    // 二级tab切换
    $('.stages-tabs-second  li').on('touchstart',function(){
        $(this).addClass('act').siblings().removeClass('act');
        $('.stages-list').eq($(this).index()).show().siblings('.stages-list').hide();
    })
    //关闭
    $('.stages-mask').on('touchstart',function(){
        $(this).hide();
        $('.stages-pop-up-wrapper').css({
            height:0
        });
    });
})();
//商品
;var shops = (function(){
    //弹出隐藏
    function show(){
        $('.shops-show-btn').on('touchstart',function(){
            $('.shops-wrapper').css({top:'.88rem'});
            $('.shops-mask').show();
        })
        $('.shops-close-btn').on('touchstart',function(){
            $('.shops-wrapper').css({top:'15rem'});
            $('.shops-mask').hide();
        })
        $('.shops-mask').on('touchstart',function(){
            $('.shops-wrapper').css({top:'15rem'});
            $('.shops-mask').hide();
        })
    }
    //滚动禁止冒泡
    function scroll(){
        $('.shops-mask').scroll(function(e){
            $(window).off('scroll');
            e.preventDefault();
            e.stopPropagation();
        })
        $('.shops-parameter').scroll(function(e){
            e.preventDefault();
            e.stopPropagation();
        })
    }
    //选择商品参数信息
    function option(){
        //选择参数
        $('.shops-module-content a:not(.not-option)').on('touchstart',function(){
            if($(this).hasClass('options') && $(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active').siblings().removeClass('active');
            }     
        })
        //颜色
        $('.shops-module-color a').on('touchstart',function(){
            if($(this).index() == 0){
                showColor(0);
            }else if($(this).index() == 1){
                showColor(1);
            }else if($(this).index() == 2){
                showColor(2);
            }
        })
        //容量
        $('.shops-module-memory a').on('touchstart',function(){
            $('.shops-color .memory').html($('.shops-module-memory a.active').html());
            $('.shop-selected  .memory').html($('.shops-module-memory a.active').html());
        })
        //版本
        var m;
        $('.shops-module-versions a').on('touchstart',function(){
            // console.log($(this).index());
            m =$(this).index();
            showVsn(m+3);
        })
        //数量点击加减
        var count = 1;
        $('.shops-module-count .btn-minus').on('touchstart',function(){
            count --;
            if(count <=1){
                count = 1;
            }
            $('.shops-module-count .product-number').html(count);
            $('.shop-selected .num').html(count);
        })
        $('.shops-module-count .btn-add').on('touchstart',function(){
            count ++;
            $('.shops-module-count .product-number').html(count);
            $('.shop-selected .num').html(count);
        })
    }
    //显示信息
    function showColor(index){
        $('.shops-img-box img').eq(index).show().siblings().hide();
        $('.shops-num p').eq(index).show().siblings().hide();
        $('.shops-color .color').html($('.shops-module-color a.active').html());
        $('.shop-selected .color').html($('.shops-module-color a.active').html());
    }
    function showVsn(index){
        $('.shops-img-box img').eq(index).show().siblings().hide();
        $('.shops-num p').eq(index).show().siblings().hide();
        $('.shops-price p').eq(index-3).show().siblings().hide();
    }
    function submit(){
        $('.shops-btn .submit-btn').on('touchstart',function(){

            console.log();
        })
    }
    return{
        show:show,
        scroll:scroll,
        option:option
    }
})();
shops.show();
shops.scroll();
shops.option();

//详情tab切换
; (function () {
    $('.detail .tabs').eq(0).show();
    $('.detail-tabs a').on('touchstart',function () {
        $(this).addClass('act').siblings().removeClass('act');
        $(window).scrollTop(2538);
        $('nav').html(`<a href="javascript:;">${$('.detail-tabs a.act').html()}</a>`);
        $('.detail .tabs').eq($(this).index()).show().siblings('.tabs').hide();
    })
})();

//规格
var sizeSwiper = new Swiper('.pro-size', {
    slidesPerView: 3.5
});
//推荐商品
var banSwiper = new Swiper('.rec-shop-swiper', {
    pagination: {
        el: '.swiper-pagination'
    }
})
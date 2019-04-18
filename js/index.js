
    var ff,s,isc;
    //首屏数据请求
    function firstData(){
        $.ajax({
            type:'post',
            url:'api/i.json',
            dateType:'json',
            // async:false,
            // beforeSend: function () {
            // },
            success: function (e) {
                if(e.code == 0){
                    ff = e.data;
                    // console.log(ff.container.floor);
                    // 顶部数据
                    firstScreen.topData();
                    // 导航
                    firstScreen.navSlide();
                    // banner图
                    firstScreen.bannerImg();
                    // 九机头条
                    firstScreen.floorTops();
                    // 推荐
                    firstScreen.shopRec();
                    isc.refresh();
                    // 手机精品
                    floor.phonePerfect();
                    // 办公专家
                    floor.office();
                    // 智能生活
                    floor.intelligentLife();
                    // 发现好货
                    floor.findGoods();
                }else{
                    alert('未请求到数据');
                }  
            }
        })
    }
    
    // 下拉刷新 -触底加载
    pullDownRefresh();
    //首屏数据
    var firstScreen = (function(){
        // 顶部数据
        function topData(){
            var firstdata = ejs.render($('#first-screen-data').html(), { msg: ff });
            $('.header').html(firstdata);
        }
        //导航
        function navSlide(){
            $('.header-nav-item a').eq(0).addClass('act');
            var navSwiper = new Swiper('#header-nav', {
                slidesPerView:5.5
            });
        }
        // banner图
        function bannerImg(){
            var banSwiper = new Swiper('#header-imgbox', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3000
                }
            });
            var flag  = true;
            //判断是否滑动
            $('#header-imgbox .swiper-slide').on('touchstart', function (e) {
                var x, y,x2,y2,index = $(this).index();
                x = e.touches[0].pageX;
                y = e.touches[0].pageY;
                $('#header-imgbox .swiper-slide').on('touchmove', function (e) {
                    x2 = e.touches[0].pageX;
                    y2 = e.touches[0].pageY;   
                })
                setTimeout(function(){
                    if(x2 == undefined && y2 == undefined){
                        console.log('点击');
                    }else{
                        console.log('滑动');
                    }
                },300)
            })
        }
        //限时抢购请求
        function flashSwiper(){
            countDowm(new Date(2019,01,22,10,00,00));
            $.ajax({
                type:'post',
                url:'api/it.json',
                dateType:'json',
                // async:false,
                // beforeSend: function () {
                // },
                success: function (e) {
                    if(e.code == 0){
                        s = e.data;
                        // console.log(s);
                        //限时抢购
                        flashsaleData();
                        // console.log(s);
                        // 为你优选
                        floor.optimization();
                    }else{
                        alert('未请求到数据');
                    }  
                }
            })
        }
        //限时抢购  数据
        function flashsaleData(){
            var flashdata = ejs.render($('#flash-sale-data').html(), { msg: s });
            $('.flash-sale-wrapper').html(flashdata);
            var flashSwiper = new Swiper('.flash-sale', {
                slidesPerView: 2.5
            });
        }
        //九机头条
        function floorTops(){
            var topsdata = ejs.render($('#floor-tops-data').html(), { msg: ff });
            $('.floor-tops').html(topsdata);

            var topsSwiper = new Swiper('.floor-tops-swiper', {
                direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                speed: 300,
                autoplay: {
                    delay: 3000
                }
            }); 
        }
        // 商品推荐
        function shopRec(){
            var shopRecdata = ejs.render($('#shop-rec-data').html(), { msg: ff });
            $('.shop-rec-box').html(shopRecdata);
        }
        return{
            topData:topData,
            navSlide:navSlide,
            bannerImg:bannerImg,
            flashSwiper:flashSwiper,
            flashsaleData:flashsaleData,
            floorTops:floorTops,
            shopRec:shopRec
        }
    })();
    //首屏数据
    firstData();
    //限时抢购
    firstScreen.flashSwiper();
    // 楼层数据
    var floor = (function(){
        // 为你优选
        function optimization(){
            var optimizationData = ejs.render($('#optimization-data').html(), { msgg: s });
            $('.optimization-box').html(optimizationData);
            var optimSwiper = new Swiper('#optimization', {
                slidesPerView: 2.5
            });
        }
        // 手机精品
        function phonePerfect(){
            var perfectData = ejs.render($('#phone-perfect-data').html(), { msgg: ff });
            $('.phone-perfect-wrapper').html(perfectData);
        }
        // 办公专家
        function office(){
            var officeData = ejs.render($('#floor3-data').html(), { msgg: ff });
            $('.floor3').html(officeData);
        }
        // 智能生活
        function intelligentLife(){
            var floor4Data = ejs.render($('#floor4-data').html(), { msgg: ff });
            $('.floor4').html(floor4Data);
        }
        // 发现好货
        function findGoods(){
            var floor5Data = ejs.render($('#floor5-data').html(), { msgg: ff });
            $('.floor5').html(floor5Data);
        }
        return{
            optimization:optimization,
            phonePerfect:phonePerfect,
            office:office,
            intelligentLife:intelligentLife,
            findGoods:findGoods
        }
    })();
    // 下拉刷新 -触底加载
    function pullDownRefresh(){
        isc=new iScroll("main",{
            topOffset:50,
            y:-50,
            // 下拉刷新
            onScrollMove:function(){
                if(this.y>100){
                    $('.header-message').html("松开立即刷新");
                    this.minScrollY=0;
                }else{
                    $('.header-message').html("下拉刷新");
                    this.minScrollY=-50;
                }
            },
            onTouchEnd:function(){
                if(this.y>100){
                    $('.header-message').html("正在刷新，请稍等");
                    setTimeout(function(){
                        //首屏数据
                        firstData();
                        //限时抢购
                        firstScreen.flashSwiper();
                        $('.header-message').html("刷新成功");
                        setTimeout(function(){
                                this.refresh();
                        }.bind(this),500)
                    }.bind(this),600)
                }
            },
            // 触底加载
            onScrollEnd:function(){
                console.log(this.y,this.maxScrollY)
                if(this.y==this.maxScrollY){
                    $('.footer-message').html("正在加载，请稍等");
                    setTimeout(function(){
                        // 新数据
                        this.refresh();
                    }.bind(this),500)
                }
            }
        });
    }
    //倒计时封装
    function countDowm(val){
        var timer=setInterval(function(){
            comptime(val);    //结束时间  月份要-1
        },1000)
        function comptime(val){
            var day=new Date();
            var time=val.getTime()-day.getTime();//毫秒
            var s=time%1000;//取余
            var second=(time-s)/1000;
            var m=date(second%60);//剩余秒
            var minute=(second-m)/60;
            var h=date(minute%60);//剩余分钟
            var hour=date((minute-h)/60);//剩余小时
            if(time <= 0){
                clearInterval(timer);
                $('.time').html('抢购结束');
            }
            $('.time-hour').html(hour);
            $('.time-minute').html(h);
            $('.time-second').html(m);
        }
        function date(i){
            return i = i < 9 ? '0'+i : i;
        }
    };

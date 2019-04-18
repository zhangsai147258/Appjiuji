
$(function(){
    // 下拉刷新 -触底加载
    function pullDownRefresh(){
        var isc=new iScroll("main",{
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
    pullDownRefresh();
    // banner图
    ;(function(){
        var banSwiper = new Swiper('.header-imgbox', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 3000
            }
        });
    })();
    //限时抢购
    ;(function(){
        var flashSwiper = new Swiper('.flash-sale', {
            slidesPerView: 2.5
        });
        countDowm(new Date(2019,01,16,10,00,00));
    })();
    //为你优选
    ;(function(){
        var optimSwiper = new Swiper('.optimization', {
            slidesPerView: 2.5
        });
    })();
    //九机头条
    ;(function(){
        var topsSwiper = new Swiper('.floor-tops-swiper', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            speed: 300,
            autoplay: {
                delay: 3000
            }
        });
    })();
    //倒计时封装
    ;function countDowm(val){
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
});
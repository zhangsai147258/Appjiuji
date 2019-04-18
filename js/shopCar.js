function diaoYong() {
    var shopCar = (function () {
        //点击全部时,单选选中
        function allSelect() {
            FastClick.attach(document.body);
            $('.checkAll').on('click', function () {
                $('.checkSingle').each(function (i, val) {
                    val.checked = $('.checkAll').get(0).checked;
                })
                allNumPrice();
            })
        }
        //点击单选时,全选被选中
        function sinSelect() {
            FastClick.attach(document.body);
            $('.checkSingle').each(function (i, val) {
                $(val).on('click', function () {
                    var $n = 0;
                    $('.checkSingle').each(function (s, val2) {
                        if (val2.checked) {
                            $n++;
                        }
                    })
                    if ($n == $('.checkSingle').length) {
                        $('.checkAll').get(0).checked = true;
                    } else {
                        $('.checkAll').get(0).checked = false;
                    }
                    allNumPrice();
                })
            })
        }
        //点击加号效果
        function addClick() {
            FastClick.attach(document.body);
            $('.add').each(function (i, val) {
                $(val).on('click', function () {
                    var $num = $(this).prev().html();
                    $num++;
                    $(this).prev().html($num);
                    allNumPrice();
                })
            })
        }
        //点击减号效果
        function reduceClick() {
            FastClick.attach(document.body);
            $('.reduce').each(function (i, val) {
                $(val).on('click', function () {
                    var $num = $(this).next().html();
                    $num--;
                    if ($num < 0) {
                        $num = 0;
                    }
                    $(this).next().html($num);
                    allNumPrice();
                })
            })
        }
        //计算总数和总价
        function allNumPrice() {
            FastClick.attach(document.body);
            var $allNum = 0, $allPrice = 0
            $('.checkSingle').each(function (i, val) {
                if (val.checked) {
                    var $sinN = parseInt($('.sin-num').eq(i).html());
                    var $sinP = parseFloat($('.sin-price').eq(i).html()) * $sinN.toFixed(2);
                    $allNum += $sinN;
                    $allPrice += $sinP;
                }
            })
            $('.num').html($allNum);
            $('.alltNum').html($allNum);
            $('.allPrice').html($allPrice);
        }
        //点击删除
        function delNode() {
            FastClick.attach(document.body);
            $('.del').each(function (i, val) {
                $(val).on('click', function () {
                    $(this).parent().parent().parent().detach();//必须这样写
                    // $('.shlist').eq(i).detach()//不能这样写,因为删除i值在变
                    if ($('.car-list').children().length == 1&&getCookie('user')) {
                        $('.car-none2').show();
                        $('.car-foot').hide();
                    } else {
                        $('.car-none2').hide();
                        $('.car-foot').show();
                    }
                    allNumPrice();
                })
            })
        }
        //点击编辑
        function delAll1() {
            FastClick.attach(document.body);
            $('.car-right').on('click', function () {
                $(this).hide().next().show();
                $('.finalSuan').hide().next().show();
            })
        }
        function delAll2() {
            FastClick.attach(document.body);
            $('.car-none3').on('click', function (e) {
                e.preventDefault();
                $('.checkSingle').each(function (i, val) {
                    if (val.checked) {
                        $(this).parent().parent().parent().detach();//必须这样写
                        //发送ajax删除数据
                        var listid = $(this).parent().parent().parent().data('type');
                        $.ajax({
                            type: 'get',
                            url: "api/car.php",
                            data: {
                                login: 'wsj123',
                                type: 2,
                                listid: listid,
                            },
                            dataType: 'json',
                        })
                    }
                    if ($('.car-list').children().length == 1&&getCookie('user')) {
                        $('.car-none2').show();
                        $('.car-foot').hide();
                    } else {
                        $('.car-none2').hide();
                        $('.car-foot').show();
                    }
                })
            })
        }
        //点击完成
        function delAll3() {
            $('.car-none').on('click', function () {
                $(this).hide().prev().show();
                $('.car-none3').hide().prev().show();
            })
        }
        return {
            allSelect: allSelect,//点击全部时,单选选中
            sinSelect: sinSelect,//点击单选时,全选被选中
            addClick: addClick,//点击加号效果
            reduceClick: reduceClick,//点击减号效果
            delNode: delNode,//点击删除
            delAll1: delAll1,//点击编辑
            delAll2: delAll2,//点击删除全部
            delAll3: delAll3//点击完成
        }
    })()
    shopCar.allSelect();//点击单选时,全选被选中
    shopCar.sinSelect();//点击单选时,全选被选中
    shopCar.addClick();//点击单选时,全选被选中
    shopCar.reduceClick();//点击单选时,全选被选中
    shopCar.delNode();//点击单选时,全选被选中
    shopCar.delAll1();//点击单选时,全选被选中
    shopCar.delAll2();//点击单选时,全选被选中
    shopCar.delAll3();//点击单选时,全选被选中
}
// diaoYong();   为什么数会增加2
var shopCar = (function () {
    //页面刷新发送ajax
    function windAjax() {
        $(window).on('load', function () {
            $.ajax({
                type: 'get',
                url: "api/car.php",
                data: {
                    login: getCookie('user'),
                    type: 0
                },
                dataType: 'json',
                success: function (data) {
                    var html = ejs.render(document.getElementById('tpl').innerHTML, { data: data });
                    $('.car-list').append(html);
                    diaoYong();//数据渲染完以后,调用上面的函数
                    var operation = (function () {
                        function addAjax() {
                            FastClick.attach(document.body);
                            $('.add').on('click', function () {
                                var listid = $(this).parent().parent().parent().data('type');
                                var shu = parseInt($(this).prev().html());
                                ajax(getCookie('user'), 1, listid, shu)
                            })
                        }
                        function reduceAjax() {
                            FastClick.attach(document.body);
                            $('.reduce').on('click', function () {
                                var listid = $(this).parent().parent().parent().data('type');
                                var shu = parseInt($(this).next().html());
                                ajax(getCookie('user'), 1, listid, shu)
                            })
                        }
                        function delAjax() {
                            FastClick.attach(document.body);
                            $('.del').on('click', function () {
                                var listid = $(this).parent().parent().parent().data('type');
                                ajax(getCookie('user'), 2, listid, 2)
                            })
                        }
                        function ajax(user, kind, shopid, shun) {
                            $.ajax({
                                type: 'get',
                                url: "api/car.php",
                                data: {
                                    login: user,
                                    type: kind,
                                    listid: shopid,
                                    shu: shun
                                },
                                dataType: 'json',
                                success: function (data) {

                                }
                            })
                        }
                        return {
                            addAjax: addAjax,
                            reduceAjax: reduceAjax,
                            delAjax: delAjax
                        }
                    })()
                    operation.addAjax();
                    operation.reduceAjax();
                    operation.delAjax();
                },
                error: function () {
                    if ($('.car-list').children().length == 1&&getCookie('user')) {
                        $('.car-none2').show();
                        $('.car-foot').hide();
                    } else {
                        $('.car-none2').hide();
                        $('.car-foot').show();
                    }
                }
            })
        })
    }
    return {
        windAjax: windAjax
    }
})()
shopCar.windAjax();
var shop = (function () {
    //滚动加载懒加载
    function wiScroll() {
        var flag = true;
        $(window).on('scroll', function () {
            if (flag) {
                flag = false;
                $("img").lazyload({ effect: "fadeIn" });
            }
        })
    }
    //商品点击添加
    function addShop() {
        flagg = true;//控制循环添加渲染页面,必须全局,下面的函数要用
        $('.car-body').on('click','.icon-gouwuche', function () {
            listid = $(this).parent().parent().data('type');
            price = $(this).siblings().children().html();
            picsrc = $(this).parent().parent().children('.car-pic-box').children().children().attr('src');
            name = $(this).parent().prev().html();
            $.ajax({
                type: 'get',
                url: "api/car.php",
                data: {
                    login: getCookie('user'),
                    type: 3,
                    listid: listid,
                    price: price,
                    picsrc: picsrc,
                    name: name
                },
                dataType: 'json',
                beforeSend:function(){
                    $('.title-mess div').show()
                },
                success: function () {
                    $('.title-mess div').hide()  
                    $('.title-mess p').show()                
                    renderShop();
                    diaoYong();
                },
                complete:function(){
                    setTimeout(function(){
                        $('.title-mess p').hide()
                    },1000)
                },
            })
        })
    }
    //渲染页面
    function renderShop() {
        $('.shlist').each(function (i, val) {
            if ($(val).data('type') == listid) {
                flagg = false;//若已经添加购物车,直接改变数目,不添加页面
                var htm = $(this).children('.car-intro').children('.opreation3').children('.sin-num').html();
                var htm2 = parseInt(htm) + 1;//必须取整,因为获取的为字符串
                $(this).children('.car-intro').children('.opreation3').children('.sin-num').html(htm2);
            }
        })
        if (flagg) {
            //若没有相同的产品,则渲染页面
            var str = '';
            str += '<ul class="shlist" data-type="' + listid + '">';
            str += '<li class="list-shop"><label class="lab-xuan"><input type="checkbox" class="checkSingle"></label></li>';
            str += '<li class="car-box"><a href="detail.html" class="car-img"><img src="' + picsrc + '" alt=""></a><a href="" class="car-serve"><i class="iconfont icon-renzhengdunpaianquanbaozhangzhibao-xianxing"></i><span class="serve-wen">选服务</span></a></li>';
            str += '<li class="car-intro">';
            str += '<p class="car-name">' + name + '</p>';
            str += '<div class="opreation"><span class="sin-price1">￥<span class="sin-price">' + price + '</span></span></div> ';
            str += '<div class="opreation2"><span class="del">删除</span></div>';
            str += '<div class="opreation3"><span class="reduce">-</span><span class="sin-num">1</span><span class="add">+</span></div> ';
            str += '</li>';
            str += '</ul>';
            $('.car-list').append(str);
            if ($('.car-list').children().length == 0) {
                $('.car-none2').show();
                $('.car-foot').hide();
            } else {
                $('.car-none2').hide();
                $('.car-foot').show();
            }
        }
        flagg = true;//若有商品flag=false,若不改变,则没有商品,则无法添加,所以要改变
    }
    function winData(){
        var flag = true;
        var objoffdetH = $('.car-spe').offset().top;
        var windowH = $(window).height(); 
        var page=0;
        $(window).on('scroll',function(){
            var winScrollH = $(window).scrollTop();
            if(winScrollH + windowH > objoffdetH && flag == true){
                page++;
                flag = false;
                $.ajax({
                    type: 'get',
                    url: "api/car2.php",
                    data: {
                      page: page
                    },
                    dataType: "json",
                    beforeSend:function(){
                        str2='';
                        str2+='<div class="car-loading"><img src="images/car/car39.gif" alt=""></div>';
                        $('.car-body').append(str2);
                    },
                    success: function (data) {
                        $('.car-load').hide();
                        if(data.code==1){
                            var str='';
                            $(data.data).each(function(i,val){
                                str+='<li data-type="'+val.listid+'">';
                                // str+='<div class="car-pic-box"><a href=""><img src="images/car/sec33.gif" data-original="'+val.src+'"  alt=""></a></div>'
                                str+='<div class="car-pic-box"><a href="detail.html"><img src="'+val.src+'" alt=""></a></div>'
                                str+='<p class="item-name">'+val.name+'</p>'
                                str+='<p class="item-price"><span>￥<span>'+val.prices+'</span></span><i class="iconfont icon-gouwuche"></i></p>'
                                str+='</li>'
                            })
                            var ulNode=document.createElement('ul');
                            ulNode.className="car-item";
                            ulNode.innerHTML=str;
                            $('.car-body').append(ulNode);
                            // $('img').lazyload()
                            flag=true;
                        };
                        if(data.data.length!==2){
                            flag=false;
                        } 
                    },
                    complete:function(){
                        $('.car-loading').remove();
                    }
                  })
            }
        })
    }
    function handCookie(){
        function checkCookie(){
            var user = getCookie("user");
            if(user != null){
                $('.car-login').hide();
            }else{
                $('.car-login').show();
            }
        }
        checkCookie()
    }
    return {
        addShop: addShop,
        wiScroll: wiScroll,
        winData:winData,
        handCookie:handCookie
    }
})()
shop.addShop();
shop.wiScroll();
shop.winData();
shop.handCookie()
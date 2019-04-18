function diaoYong(){
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
                    console.log($num)
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
                    console.log($(this).next().html())
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
                    console.log($sinN);
                    console.log($sinP);
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
                    console.log(i)
                    $(this).parent().parent().parent().detach();//必须这样写
                    // $('.shlist').eq(i).detach()//不能这样写,因为删除i值在变
                    if ($('.car-list').children().length == 0) {
                        $('.car-none2').show();
                        $('.car-foot').hide();
                    } else {
                        $('.car-none2').hide();
                        $('.car-foot').show();
                    }
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
        //点击删除全部
        function delAll2() {
            FastClick.attach(document.body);
            $('.car-none3').on('click', function (e) {
                e.preventDefault();
                $('.checkSingle').each(function (i, val) {
                    if (val.checked) {
                        $(this).parent().parent().parent().detach();//必须这样写
                    }
                    if ($('.car-list').children().length == 0) {
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

var shopCar=(function(){
    //页面刷新发送ajax
    function windAjax(){
        $(window).on('load',function(){
            console.log('aaaaa')
            $.ajax({
                type:'get',
                url:"api/car.php",
                data:{
                    login:'wsj123',
                    type:0
                },
                dataType:'json',
                success:function(data){
                    console.log(data)
                    var html = ejs.render(document.getElementById('tpl').innerHTML, { data: data });
                    $('.car-list').append(html);
                    diaoYong();//数据渲染完以后,调用上面的函数
                    
                }
            })
        })
    }
    // 点击加号发送ajax
    function addAjax(){
        // FastClick.attach(document.body);        
        $('.add').on('click',function(){
            var listid=$(this).parent().parent().parent().data('type');
            var shu=$(this).prev().html();
            console.log(666666666)
            console.log(listid)
            console.log(shu)
            $.ajax({
                type:'get',
                url:"api/car.php",
                data:{
                    login:'wsj123',
                    type:1,
                    listid:listid,
                    shu:shu+1
                },
                dataType:'json',
                success:function(data){

                }
            })
        })
    }
    return {
        windAjax:windAjax,
        // addAjax:addAjax
    }
})()
shopCar.windAjax();
// shopCar.windAjax();

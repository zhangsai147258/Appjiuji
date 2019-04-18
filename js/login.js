$(function(){
    //隐藏菜单出现
    var flag = true;
    $('.header-menu-btn').on('touchstart',function(){
        if(flag){
            $('.menu').css({height:'1.1rem'});
            flag=false;
        }else{
            $('.menu').css({height:'0'});
            flag=true;
        }
    })
    //登录方式切换
    $('.main-tabs p').on('touchstart',function(){
        console.log($(this).index());
        if($(this).index() == 2){
            $('.main-tabs p').css({color:'#333'});
            $('.get-pwd-btn').show();
            $(this).css({color:'#f21c1c'});
            $('.user').attr('placeholder','手机号码');
            $('.pwd').attr('placeholder','动态密码');
        }else{
            $('.main-tabs p').css({color:'#333'});
            $('.get-pwd-btn').hide();
            $(this).css({color:'#f21c1c'});
            $('.user').attr('placeholder','用户名/手机号');
            $('.pwd').attr('placeholder','请输入密码');
        }
    })
    //免登录勾选
    $('.login-time').on('touchstart',function(){
        if(flag){
            $(this).css({
                background:'#d9d9d9',
                border:'.02rem solid #d9d9d9'
            });
            $('.login-time-tabs').css({marginLeft:'.04rem'});
            flag=false;
        }else{
            $(this).css({
                background:'#1aad19',
                border:'.02rem solid #1aad19'
            });
            $('.login-time-tabs').css({marginLeft:'.4rem'});
            flag=true;
        }
    })
    //登录提交
    $('.submit-btn').on('touchstart',function(){
        $.ajax({
            type:'get',
            url:'api/login.php',
            data:'?user='+$('.user').val()+'&pwd='+$('.pwd').val(),
            dataType:'json',
            beforeSend:function(){
                $('.submit-btn').html('登录中...');
            },
            success:function(data){
                console.log(data);
                if(data == 0){
                    if(flag){
                       setCookie('user',$('.user').val(),90); 
                    }else{
                        setCookie('user',$('.user').val(),1);
                    }
                    $('.submit-btn').css({background:'red'});
                    $('.submit-btn').html('登录成功');
                    setTimeout(function(){
                        location.href="index.html";
                    },100)
                }else if(data == 2){
                    alert('密码错误');
                    $('.submit-btn').html('登录');    
                }else{
                    alert('用户名不存在');
                    $('.submit-btn').html('登录');
                }
            }
        })
    })
    function setCookie(name,value,day){
        var date = new Date();
        var expireDays = day;
        date.setDate(date.getDate() + expireDays);  
        // date.toGMTString();//计算机标准时间格式
        document.cookie = name + "=" + escape(value) + ";expires="+ date.toGMTString();
    }
});
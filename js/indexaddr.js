$('#gt').on('touchstart','#adminBox',function(){
    $('#gt').css({bottom:0});
    console.log(1);
})
Zepto(function ($) {
    FastClick.attach(document.body);
    $('#gt').on('click','.fa-angle-left',function(){
        $('#gt').css({bottom:'unset'});
        console.log(2);
    })
    $('#gt').on('click','span',function(){
        $('#gt').css({bottom:'unset'});
        console.log(2);
    })
    $('#gt').on('click','i',function(){
        $('#gt').css({bottom:'unset'});
        console.log(2);
    })
});
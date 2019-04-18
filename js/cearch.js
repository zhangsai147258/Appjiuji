// sug.so.360.cn/suggest?word=a&encodein=utf-8&encodeout=utf-8&pq=&callback=__jsonp0__&t=2583559
function sear(){
    $('.search-guess').hide()
    $('.flex-childen-noshrink input').click(function () {
        console.log(111)       
        // $('.search-guess').empty();
        var userVal = $(this).val();
        // console.log(userVal);
        $.ajax({
           type: "get",
           url: "https://search.mi.com/search/expand",
           data: "word=" + userVal + "a&jsonpcallback=xmsearch",
           dataType: "jsonp",
           success: function (data) {
            // console.log(data.s);
            $('.search-guess').show();
            // str='';
              $.each(data.s, function (index, val) {
                var html=ejs.render($('#tpl').html(),{data:data});
                $('.search-guess').html(html);

              });
           },
        });
     });

}
sear();
// https://search.mi.com/search/expand?keyword=a&jsonpcallback=xmsearch
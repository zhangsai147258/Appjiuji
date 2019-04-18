(function ($) {
    $.fn.slideDown = function (duration) {
        // get old position to restore it then
        var position = this.css('position');

        // show element if it is hidden (it is needed if display is none)
        this.show();

        // place it so it displays as usually but hidden
        this.css({
            position: 'absolute',
            visibility: 'hidden'
        });

        // get naturally height
        var height = this.height();

        // set initial css for animation
        this.css({
            position: position,
            visibility: 'visible',
            overflow: 'hidden',
            height: 0
        });

        // animate to gotten height
        this.animate({
            height: height
        }, duration);
    };


    $.fn.slideUp = function (duration) {
        // get old position to restore it then
        var position = this.css('position');

        // show element if it is hidden (it is needed if display is none)
        this.show();

        // place it so it displays as usually but hidden
        this.css({
            position: 'absolute',
            visibility: 'hidden'
        });

        // get naturally height
        var height = this.height();

        // set initial css for animation
        this.css({
            position: position,
            visibility: 'visible',
            overflow: 'hidden',
            height: 0
        });

        // animate to gotten height
        this.animate({
            height: 0 
        }, duration);
    };
})(Zepto);




    // $(function () {
    //     // $('.gmore').on('click', function () {
    //     //     $('.popup').slideDown(200);
    //     // });
    //     // $('.gmore').on('click', function () {
    //     //     $('.popup').slideUp(200);
    //     // });
    //     $('.gmore').click(function(){
    //         $('.popup').slideToggle('fast');
    //     })
    // });

    $(function () {
        var n=1;
        $('.gmore').click(function () {
            n++;
            if (n%2==0) {
                
                $('.popup').animate({height:1+'rem'},200);
                $('.popup a').animate({display:'block'},800);

         
            } else {
               
                $('.popup').animate({height:0},200);
                $('.popup a').animate({display:'none'},800);
            }
        })
    })



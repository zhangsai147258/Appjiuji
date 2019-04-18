//封装slidedown事件
// $('.slide').slideDown(开始值,结束值,动画时间);
(function ($) {
    $.fn.slideDown = function (value,value2,duration) {    
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
        // var style = value;
        
        // set initial css for animation
        this.css({
        position: position,
        visibility: 'visible',
        overflow: 'hidden',
        top: value
        });

        // animate to gotten height
        this.animate({
            top: value2
        }, duration);
    };
})(Zepto);
//使用方法
// $(function () {
//   $('.slide-trigger').on('click', function () {
//     $('.slide').slideDown(2000);
//   });
// });
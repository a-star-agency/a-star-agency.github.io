$(document).ready(function() {
    var width = $(window).width();
    var height = $(window).height();

    var whalf = width / 2;
    var hhalf = height / 2;

    $('.behind-full-screen-top').height(height);
    $('.behind-full-screen-top').children().each(function() {
        var x = Math.random() * width;
        var y = Math.random() * height;
        var o = (Math.abs(x - whalf) + Math.abs(y - whalf)) / (width + height);

        $(this).css({
            top: y + 'px',
            left: x + 'px',
            opacity: o
        });
    });
});
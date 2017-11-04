$(document).ready(function() {
    $('a.internal').click(function(event) {
        let id = $(event.target).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 300);

        return false;
    });
});
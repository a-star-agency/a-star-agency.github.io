$(document).ready(function() {
    $('a.internal').click(function(event) {
        let id = $(event.target).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 300);

        return false;
    });
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-109497041-1');
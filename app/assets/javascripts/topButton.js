$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }

    $("#top").click(function() {
        if ($(this).scrollTop() > 500) {

            $("html, body").stop().animate({
                scrollTop: 0
            }, "slow");
        }
    });
});

$("#top").click(function() {

    $('html, body').stop().animate({
        scrollTop: 0
    }, "slow");
    return false;
});
$(document).ready(function () {
    $("#landing h1, #landing p, #landing .btn").css("opacity", "1");

    $(window).scroll(function () {
        $('.col-md-4 , .col-md-6 , .col-lg-4').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + $(window).height() && !$(this).hasClass('fadeIn')) {
                $(this).addClass('fadeIn');
            }
        });
    });
});
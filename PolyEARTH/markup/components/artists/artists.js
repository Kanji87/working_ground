$('.artists__gallery-container').bxSlider({
    'pager': false,
    'controls': true,
    'touchEnabled': false
});

$('.artists__grid-link').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 600);
});

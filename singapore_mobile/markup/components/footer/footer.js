$(function () {
    $('.js-show-about').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.footer').find('.footer__about').toggleClass('footer__about--opened');
    });
});

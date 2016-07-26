'use sctrict';

$(function () {
    $('.js-open-side-menu').on('click', function (e) {
        e.preventDefault();
        $('.side-menu__wrapper').addClass('side-menu__wrapper--active');
    });

    $('.js-close-side-menu').on('click', function (e) {
        e.preventDefault();
        $('.side-menu__wrapper').removeClass('side-menu__wrapper--active');
    });

    $('.js-side-menu-open-content').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.side-menu__list-item').find('.side-menu__list-item-content').toggleClass('side-menu__list-item-content--opened');
    });
});

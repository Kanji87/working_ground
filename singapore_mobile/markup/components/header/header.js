$(function () {
    $('.js-open-menu').on('click', function () {
        $(this).toggleClass('header__menu-link--active');
        $('.js-main-menu').toggleClass('l-grid__main-menu--opened');
    });
});

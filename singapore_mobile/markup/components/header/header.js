$(function () {
    $('.js-open-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header__menu-link--active');
        $('.js-main-menu').toggleClass('l-grid__main-menu--opened');
    });
});

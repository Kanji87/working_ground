$(function () {
    $('.js-open-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header__menu-link--active');
        $('.js-main-menu').toggleClass('l-grid__main-menu--opened');
        $('.js-main-important').removeClass('l-grid__important--opened');
        $('.js-open-important').removeClass('header__important-link--active');
    });

    $('.js-open-important').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header__important-link--active');
        $('.js-important-list').hide();
        $('.js-main-important').toggleClass('l-grid__important--opened');
        $('.js-main-menu').removeClass('l-grid__main-menu--opened');
        $('.js-open-menu').removeClass('header__menu-link--active');
    });

    $('.l-grid__important .c-index-block__more').on('click', function (e) {
        e.preventDefault();
        $('.js-important-list').show();
        $('.l-grid__important').animate({scrollTop: $('.l-grid__important').height()}, 300);
    });
});

$(function () {
    $('.js-toggle-info').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('c-toggle-info--active');
        $('.c-weekly__item-modifier').toggleClass('c-weekly__item-modifier--active');
    });
});

$('.nav-list__item-link--subnav').on('click', function (e) {
    e.preventDefault();
});

$('.nav-articles__open-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('nav-articles__open-btn--active');
    $('.nav-articles__list').toggleClass('nav-articles__list--active');
});


$('.nav-list__item--subnav').on('click', '.js-open-subnav', function (e) {
    e.preventDefault();
    $(this).closest('.nav-list__item--subnav').find('.subnav-list').toggleClass('subnav-list--active');
    $(this).closest('.nav-list__item--subnav').find('.nav-list__item-link').first().toggleClass('nav-list__item-link--active');
});

// $('.nav-articles__link').each(function () {
if ( $('.nav-articles__link--active').length ) {
    $('.js-open-subnav').addClass('nav-articles__link--active');
}
// });

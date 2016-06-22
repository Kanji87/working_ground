$('.nav-list__item-link--subnav').on('click', function (e) {
    e.preventDefault();
});

$('.nav-articles__open-btn').on('click', function (e) {
    e.preventDefault();
    $('.nav-articles__list').toggleClass('nav-articles__list--active');
});


$('.nav-list__item--subnav').on('click', '.nav-list__item-link', function (e) {
    e.preventDefault();
    $(this).closest('.nav-list__item--subnav').find('.subnav-list').toggleClass('subnav-list--active');
    $(this).closest('.nav-list__item--subnav').find('.nav-list__item-link').first().toggleClass('nav-list__item-link--active');
});

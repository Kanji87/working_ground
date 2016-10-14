'use strict';

$(function () {
    $('.js-nav-toggle').on('click', function () {
        $('.header__nav').addClass('header__nav--active');
    });

    $('.header__nav').on('mouseleave', function () {
        if ( $(this).hasClass('header__nav--active') ) {
            // setTimeout(function () {
            //     $('.header__nav').removeClass('header__nav--active');
            // }, 3000);

            setTimeout(function () {
                $(document).on('mousemove', function (event) {
                    if (!$(event.target).closest('.header__nav').length) {
                        setTimeout(function () {
                            $('.header__nav').removeClass('header__nav--active');
                            $(document).unbind('mousemove');
                        }, 1000);
                    }
                });
            }, 2000);
        } else {
            return false;
        }
    });

});

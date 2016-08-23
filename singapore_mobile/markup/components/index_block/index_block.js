$(function () {
    var slide = $('.js-index-slider').find('.c-index-slider__item'),
        firstSlide = $('.js-index-slider').find('.c-index-slider__item').eq(0),
        secondSlide = $('.js-index-slider').find('.c-index-slider__item').eq(1),
        slider = $('.js-index-slider').find('.c-index-slider'),
        slideWidth = slide.width(),
        prevButton = $('.c-index-block__prev'),
        nextButton = $('.c-index-block__next');

    secondSlide.css('left', slide.width());
    slider.width(slideWidth * 2).css('height', '100%');
    // slide.css('height', 'calc(100% - 80px)');

    firstSlide.addClass('js-index-slider-end');
    prevButton.addClass( prevButton.attr('class') + '--inactive' );

    $('.c-index-block__next').on('click', function (e) {
        e.preventDefault();
        $('.js-index-slider').animate({scrollTop: 0}, 300);
        $('.c-index-slider-grid').css('overflow-y', 'hidden');
        // $('.js-index-list').fadeOut(500);
        if ( !secondSlide.hasClass('js-index-slider-end') ) {
            slide.each(function () {
                var thisPos = $(this).position().left;
                // console.log(thisPos);
                $(this).animate({
                    left: thisPos - slideWidth
                }, 300 );
            });
            firstSlide.removeClass('js-index-slider-end');
            secondSlide.addClass('js-index-slider-end');
            nextButton.addClass( $(this).attr('class') + '--inactive' );
            prevButton.removeClass( 'c-index-block__prev--inactive' );
        } else {
            return false;
        }
    });

    $('.c-index-block__prev').on('click', function (e) {
        e.preventDefault();
        $('.js-index-slider').animate({scrollTop: 0}, 300);
        $('.c-index-slider-grid').css('overflow-y', 'hidden');
        // $('.js-index-list').fadeOut(500);
        if ( !firstSlide.hasClass('js-index-slider-end') ) {
            slide.each(function () {
                var thisPos = $(this).position().left;
                // console.log(thisPos);
                $(this).animate({
                    left: thisPos + slideWidth
                }, 300 );
            });
            firstSlide.addClass('js-index-slider-end');
            secondSlide.removeClass('js-index-slider-end');
            prevButton.addClass( $(this).attr('class') + '--inactive' );
            nextButton.removeClass( 'c-index-block__next--inactive' );
        } else {
            return false;
        }
    });

    if ( $('.js-index-block-more').length ) {
        $('.js-index-block-more').on('click', function (e) {
            e.preventDefault();
            // $(this).closest('.c-index-slider__item').css('overflow-y', 'visible');
            $('.c-index-slider-grid').css('overflow-y', 'visible');
            $(this).closest('.c-index-slider__item').find('.js-index-list').show();
            $('.js-index-slider').animate({scrollTop: $('.l-grid').height()}, 300);
        });
    }
});

$(function () {
    var slide = $('.js-index-slider').find('.c-index-block'),
        firstSlide = $('.js-index-slider').find('.c-index-block').eq(0),
        secondSlide = $('.js-index-slider').find('.c-index-block').eq(1),
        slider = $('.js-index-slider').find('.c-index-slider'),
        slideWidth = slide.width(),
        prevButton = $('.c-index-block__prev'),
        nextButton = $('.c-index-block__next');

    secondSlide.css('left', $('.c-index-block').width());
    slider.width(slideWidth * 2).height('100%');

    firstSlide.addClass('js-index-slider-end');
    prevButton.addClass( prevButton.attr('class') + '--inactive' );

    $('.c-index-block__next').on('click', function () {
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

    $('.c-index-block__prev').on('click', function () {
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
});

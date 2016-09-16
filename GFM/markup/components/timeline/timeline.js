$(function () {
    if ( $('.c-timeline__slider').length ) {
        $('.c-timeline__slider').bxSlider({
            adaptiveHeight: true,
            pager: false,
            nextText: '>',
            prevText: '<',
            hideControlOnEnd: true,
            infiniteLoop: false
            // nextSelector: 'c-slider__next',
            // prevSelector: 'c-slider__prev'
        });
    }
});

$(function () {
    if ( $('.js-article-slider').length ) {
        $('.js-article-slider').bxSlider({
            captions: true,
            // adaptiveHeight: true,
            pager: true,
            pagerType: 'short',
            controls: true,
            nextText: '',
            prevText: '',
            onSliderLoad: function (currentIndex) {
                $(this).closest('.l-article-slider').find('.c-article-slider__caption').html($(this).closest('.l-article-slider').find('.js-article-slider li').eq(currentIndex + 1).find('img').attr('title'));
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                $(this).closest('.l-article-slider').find('.c-article-slider__caption').html($slideElement.find('img').attr('title'));
            }
        });
    }
});

$(function () {
    if ( $('.js-article-slider').length ) {
        var articleSliderCaption = $('c-article-slider__caption');
        var fotoramaDiv = $('.js-article-slider').on(
            'fotorama:ready ' +
            'fotorama:show',
            function (e, fotorama) {
                fotorama.$caption = fotorama.$caption || $(this).next('.c-article-slider__nav').next('.c-article-slider__caption');
                var activeFrame = fotorama.activeFrame,
                    activeIndex = fotorama.activeIndex + 1;

                fotorama.$caption.html(activeFrame.caption);

                $('.c-article-slider__counter').html('<span class="c-article-slider__current-count">' + activeIndex + '</span>' + '<span class="c-article-slider__count-seporator"> / </span>' + '<span class="c-article-slider__total-count">' + fotorama.size + '</span>');

                if ( articleSliderCaption.is(':empty') ) {
                    articleSliderCaption.hide();
                } else {
                    articleSliderCaption.show();
                }
            }
        ).fotorama({
            click: false,
            swipe: true,
            width: '100%',
            height: '400',
            nav: false,
            arrows: false,
            loop: true,
            autoplay: false,
            stopautoplayontouch: true,
            margin: 0,
            fit: 'cover'
        });

        var fotorama = fotoramaDiv.data('fotorama');

        $('.c-article-slider__prev').bind('click touchstart', function () {
            fotorama.show('<');
            return false;
        });

        $('.c-article-slider__next').bind('click touchstart', function () {
            fotorama.show('>');
            return false;
        });
    }
});

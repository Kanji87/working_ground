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

                $(this).closest('.l-article-slider').find('.c-article-slider__counter').html('<span class="c-article-slider__current-count">' + activeIndex + '</span>' + '<span class="c-article-slider__count-seporator"> / </span>' + '<span class="c-article-slider__total-count">' + fotorama.size + '</span>');

                if ( articleSliderCaption.is(':empty') ) {
                    articleSliderCaption.hide();
                } else {
                    articleSliderCaption.show();
                }
            });

        $('.js-article-slider').on(
            'fotorama:ready', function (e, fotorama) {
                $(this).closest('.l-article-slider').find('.c-article-slider__prev').on('click', function () {
                    fotorama.show('<');
                    return false;
                });

                $(this).closest('.l-article-slider').find('.c-article-slider__next').on('click', function () {
                    fotorama.show('>');
                    return false;
                });

                // var recalcFotoramaDiv = function () {
                //     if (window.matchMedia('(max-width: 320px)').matches ) {
                //         fotorama.resize({
                //             height: 320
                //         });
                //     } else if (window.matchMedia('(max-width: 400px)').matches ) {
                //         fotorama.resize({
                //             height: 400
                //         });
                //     }
                // };

                // setTimeout(recalcFotoramaDiv, 300);
                // $(window).on('resize', recalcFotoramaDiv());
            });

        $('.js-article-slider').fotorama({
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

        // var fotorama = fotoramaDiv.data('fotorama');
    }
});

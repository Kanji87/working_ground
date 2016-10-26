'use strict';

$(function () {
    // if ( window.matchMedia('(min-width: 1280px)').matches ) {
    if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
        console.log('desktop');
    } else {
        if ( window.matchMedia('(min-width: 750px').matches ) {
            $('head').prepend('<meta name="viewport" content="width=device-width">');
            console.log('tablet');
        } else {
            $('head').prepend('<meta name="viewport" content="width=320, minimal-ui">');
            $('body').addClass('mobile');
            console.log('mobile');
        }
    }

    // $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">').prepend('<link href="/static/css/main.css" rel="stylesheet" type="text/css">');

    if ( $('.c-tile__fotorama').length ) {
        // var $fotoramaDiv = $('.c-tile__fotorama').fotorama({
        //     width: '100%',
        //     height: 498,
        //     navwidth: 270,
        //     arrows: false,
        //     shadows: false,
        //     swipe: true,
        //     click: true,
        //     autoplay: 5000,
        //     loop: true,
        //     stopautoplayontouch: false
        // });

        var $fotoramaDiv = $('.c-tile__fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        $('.c-tile__fotorama').on('fotorama:showend', function () {
            $('.c-tile__slider').on('click', function () {
                if ( fotorama.activeIndex === 0 ) {
                    fotorama.show('>');
                } else {
                    fotorama.show('<');
                }
            });
        }).fotorama({
            width: '100%',
            height: 498,
            navwidth: 270,
            arrows: false,
            shadows: false,
            swipe: true,
            click: true,
            autoplay: 5000,
            loop: true,
            stopautoplayontouch: false
        });
    }
});


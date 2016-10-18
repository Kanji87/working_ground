'use strict';

$(function () {
    // if ( window.matchMedia('(min-width: 1280px)').matches ) {
    if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=320, minimal-ui">');
        $('body').addClass('mobile');
    }

    // $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">').prepend('<link href="/static/css/main.css" rel="stylesheet" type="text/css">');

    if ( $('.c-tile__fotorama').length ) {
        $('.c-tile__fotorama').fotorama({
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


$(function () {

    if ( $('.c-calendar__slider').length ) {
        var monthNum = new Date().getMonth() - 3;

        if ( monthNum >= 7 ) {
            monthNum = 7;
        }

        console.log(monthNum);

        $('.c-calendar__slider').bxSlider({
            nextSelector: '.c-calendar__next',
            prevSelector: '.c-calendar__prev',
            nextText: '',
            prevText: '',
            touchEnabled: false,
            pager: false,
            adaptiveHeight: true,
            infiniteLoop: false
        }).goToSlide(monthNum);
    }
});

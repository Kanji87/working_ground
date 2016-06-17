var nav = $('.nav'),
    header = $('.header');

$(document).mouseup(function (e) {
    if ( !nav.is(e.target)
            && nav.has(e.target).length === 0
        ) {
        header.removeClass('opened');
    }
});

// $('.open-btn').on('click', function () {
//     if ( !header.hasClass('opened') ) {
//         header.addClass('opened');
//     } else {
//         $(document).mouseup(function (e) {
//             if ( !nav.is(e.target)
//                     && nav.has(e.target).length === 0
//                 ) {
//                 header.removeClass('opened');
//             }
//             if ( $('.open-btn').is(e.target) ) {
//                 return false;
//             }
//         });
//     }
// });

function showPolyIcon() {
    $(window).scroll(function () {
        if ( $(window).scrollTop() < 100 ) {
            $('.header__poly-link').removeClass('header__poly-link--visible');
        } else if ( $(window).scrollTop() >= 100 ) {
            if ( $('.header__poly-link').hasClass('header__poly-link--visible') ) {
                return false;
            } else {
                $('.header__poly-link').addClass('header__poly-link--visible');
            }
        }
    });
}

showPolyIcon();

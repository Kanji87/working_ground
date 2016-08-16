$(function () {
    $('.js-play-video').on('click', function () {
        var videoPlayer = $(this).children('.c-article-video__player'),
            videoCover = $(this).children('.c-article-video__cover');
        if ( videoPlayer.hasClass('c-article-video__player--play') ) {
            videoPlayer.removeClass('c-article-video__player--play');
            videoPlayer.fadeOut();
            videoCover.fadeIn();
            $(this).find('video')[0].pause();
        } else {
            videoPlayer.addClass('c-article-video__player--play');
            videoPlayer.fadeIn();
            videoCover.fadeOut();
            $(this).find('video')[0].play();
        }
    });
});

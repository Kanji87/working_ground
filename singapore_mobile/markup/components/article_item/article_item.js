$(function () {
    if ( $('.c-article-section').length ) {
        if ( window.matchMedia('(max-width: 340px)').matches ) {
            $('.c-article-section__content-grid').css('max-height', '105px');
            console.log('340px');
        } else if ( window.matchMedia('(max-width: 580px)').matches ) {
            $('.c-article-section__content-grid').css('max-height', '118px');
            console.log('580px');
        } else if ( window.matchMedia('(max-width: 768px)').matches ) {
            $('.c-article-section__content-grid').css('max-height', '145px');
            console.log('768px');
        }

        $('.js-show-text').on('click', function (e) {
            var contentSectionGrid = $(this).closest('.c-article-section').find('.c-article-section__content-grid'),
                contentSection = $(this).closest('.c-article-section'),
                contentHeight = $(this).closest('.c-article-section').find('.c-article-section__content').outerHeight() + 60;
            e.preventDefault();
            if ( !contentSection.hasClass('c-article-section__content--opened') ) {
                contentSectionGrid.css('max-height', contentHeight + 'px');
                contentSection.addClass('c-article-section__content--opened');
            } else {
                if ( window.matchMedia('(max-width: 340px)').matches ) {
                    contentSectionGrid.css('max-height', '105px');
                } else if ( window.matchMedia('(max-width: 580px)').matches ) {
                    contentSectionGrid.css('max-height', '125px');
                } else if ( window.matchMedia('(max-width: 768px)').matches ) {
                    contentSectionGrid.css('max-height', '145px');
                }
                contentSection.removeClass('c-article-section__content--opened');
            }
        });
    }
});

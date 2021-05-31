function triggerNav() {
    var exitBlock = $('.page-header__exit');

    function closeCloseBlock(evt) {
        var target = $(evt.target);
        closeTrigger();
    }

    function closeTrigger() {
        exitBlock.animate({opacity: 0}, 150, function () {
            exitBlock.removeClass('open');
            $('body').off('click', closeCloseBlock);
        })
    }

    $('body').on('click', '.js-nav-trigger', function () {

        if(exitBlock.hasClass('open')) {
            closeTrigger();
        } else {
            exitBlock.addClass('open');
            exitBlock.animate({opacity: 1}, 150);
            $('body').on('click', closeCloseBlock);
        }
    })
}

triggerNav();
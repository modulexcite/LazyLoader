var LazyLoader = function () {
};
// Static
LazyLoader.init = function () {
    $('img.defer').addClass('loading');
};
// Static
LazyLoader.loadImages = function (target, callback) {
    target.each(function () {
        var elem = $(this),
            dataSrc,
            attr,
            i,
            img = new Image(),
            onload = function () {
                elem.attr('src', dataSrc)
                    .addClass('loaded')
                    .removeClass('loading')
                    .removeClass('defer');
                if (typeof (callback) === 'function') {
                    callback.apply(elem, [img]);
                } else {
                    LazyLoader.showLoadedImage(elem, dataSrc);
                }
            };
        dataSrc = $(this).attr('data-src');

        img.src = dataSrc;

        if (img.readyState === 'complete') {
            onload();
        } else {
            img.onload = function () {
                onload();
            };
        }
    });
};
// Static
LazyLoader.showLoadedImage = function (elem, dataSrc) {
    elem.css('opacity', 0);
    setTimeout(function () {
        elem.addClass('fade-fast');
        elem.css('opacity', 1);
    }, 20);
};        
        
        

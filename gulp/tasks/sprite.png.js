'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/images/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            imgPath: '/assets/img/sprite.png',
            cssName: 'sprite.scss'
        }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/common'));

        return $.merge(imgStream, cssStream);
    });
};
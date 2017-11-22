const gulp = require('gulp');
const mandrillTemplates = require('gulp-mandrill-templates');

gulp.task('publish', function () {
    return gulp.src('dist/**/*.html')
        .pipe(mandrillTemplates({ key: process.env.MANDRILL_KEY }))
        .pipe(gulp.dest('dist'));
});
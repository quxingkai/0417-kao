var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('./src/data/data.json');
gulp.task('default',function(){
    gulp.src('src')
        .pipe(server({
            port:9999,
            open:true,
            livereload:true,
            middleware:function(req, res, next){
                if(/\/info/g.test(req.url)){
                    res.end(JSON.stringify(url));
                }
                next();
            }
        }))
})
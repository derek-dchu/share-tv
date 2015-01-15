"use strict";

var path = require('path');

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    notify = require('gulp-notify'),
    mocha = require('gulp-mocha'),
    exit = require('gulp-exit');


gulp.task('default', ['develop']);

gulp.task('develop', function() {
  nodemon({
        script: 'bin/www',
        env: { PORT: 3000 }
      }).on('restart', function() {
    console.log('restart server...');
  });
});

gulp.task('test-app', function() {
  process.env.PORT = 3001;
  return gulp.src('test/app.js')
      .pipe(mocha({
        reporter: 'spec'
      }))
      .pipe(notify({ message: "App test complete" }))
      .pipe(exit());
});
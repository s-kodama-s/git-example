'use strict'

import gulp      from 'gulp';
import easymock  from 'easymock';
import webserver from 'gulp-webserver';
import plumber   from 'gulp-plumber';

const webHost = 'localhost';
const webPort = 18000;
const webRootDir = 'dist-dev';


gulp.task('easymock', () => {
  var server = new easymock.MockServer({
  }).start();
});



gulp.task('webserver', ['easymock'], () => {
  gulp.src(webRootDir)
    .pipe(plumber())
    .pipe(webserver({
      host: webHost,
      port: webPort

    }))
});
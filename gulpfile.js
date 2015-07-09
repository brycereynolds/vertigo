"use strict";

var gulp = require('gulp');
var prettify = require('gulp-js-prettify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('beautify', function () {
  gulp.src(['**/*.js', '!node_modules/**/*.js'])
    .pipe(prettify({
      "indent_size": 2,
      "indent_char": " ",
      "eol": "\n",
      "indent_level": 0,
      "indent_with_tabs": false,
      "preserve_newlines": true,
      "max_preserve_newlines": 10,
      "jslint_happy": true,
      "space_after_anon_function": false,
      "brace_style": "collapse",
      "keep_array_indentation": false,
      "keep_function_indentation": false,
      "space_before_conditional": true,
      "break_chained_methods": false,
      "eval_code": false,
      "unescape_strings": false,
      "wrap_line_length": 0,
      "wrap_attributes": "auto",
      "wrap_attributes_indent_size": 2,
      "space_in_paren": false,
      "end_with_newline": true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('lint', function () {
  gulp.src(['**/*.js', '!node_modules/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
'use strict';
module.exports = function(grunt) {

grunt.initConfig({
    
       jshint: {
      all: [
        'Gruntfile.js'
        
      ],
      options: {
        jshintrc: '.jshintrc',
      },
},
  casperjs: {
    options: {
        test : true,
      async: {
        parallel: false
      }
    },
    files: ['Test/test.js']
  },
});
grunt.loadNpmTasks('grunt-casperjs');
    grunt.registerTask('test', ['casperjs']);
};
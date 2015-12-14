module.exports = function(grunt) {

  "use strict";
  //
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      beforeconcat: ['scripts/**/*.js']//,
      //afterconcat: ['dist/output.js']
    },
    uglify: {
      dist: {
        files: [{
            expand: true,
            cwd: "scripts",
            src: "**/*.js",
            dest: "dist"
        }]
        
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/timeslotter.min.css": "styles/main.less"
        }
      }
    },
    watch: {
        css: {
            files: "styles/**/*.less",
            tasks: "buildcss"
        },
        js: {
            files: "scripts/**/*.js",
            tasks: "buildjs"
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('buildjs', ['jshint', 'uglify']);
  grunt.registerTask('buildcss', ['less']);
};
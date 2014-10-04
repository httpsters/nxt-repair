module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    protractor: {
      options: {
        keepAlive: true,
        configFile: "test/e2e/protractor.conf.js"
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/unit/karma.conf.js'
      }
    },
    sass: {
      dist: {
        files: {
          'src/css/style.css':'src/sass/style.scss'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'src/css',
        src: ['style.css'],
        dest: 'src/css/',
        ext: '.min.css'
      }
    },
    watch: {
      sass: {
        files: ['src/sass/style.scss', 'src/app/**/*.html'],
        tasks: ['sass']
      },
      cssmin: {
        files: ['src/css/*.css', '!src/css/*.min.css'],
        tasks: ['cssmin'],
        options: {
          livereload: livereloadPort
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          // hostname: 'localhost',
          port: 3000,
          livereload: livereloadPort
        }
      }
    },
    open: {
      index: {
        path: 'http://0.0.0.0:3000'
        // path: 'http://localhost:3000'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('unit', ['karma']);
  grunt.registerTask('e2e', ['protractor:singlerun']);
  grunt.registerTask('test', ['karma', 'protractor:singlerun']);
  grunt.registerTask('style', ['sass', 'cssmin']);

  grunt.registerTask('default', ['sass', 'cssmin', 'connect', 'open', 'watch']);

};
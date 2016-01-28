module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      options: {
        sourceMap: true
      },
      compile: {
        files: [
          { 'build/angular/scripts/app.js': 'build/angular/scripts/app.coffee' }
        ]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/bootstrap.min.js'
        ],
        dest: 'build/scripts/angular-vendors.js'
      }
    },
    directives: {
      angular: {
        files: { 'build/angular/scripts/app.coffee': 'angular/scripts/app.coffee'}
      }
    },
    serve: {
      options: {
        port: 9000,
        serve: {
          'path': 'build'
        }
      }
    },
    haml: {
      layout: {
        files: [
          { 'build/angular/index.html': 'angular/index.haml' }
        ]
      },
      views: {
        files: [
          { expand: true, cwd:'angular/views', src: '**/*.haml', dest: 'build/angular/views', ext : '.html' }
        ]
      }
    },
    mkdir: {
      angular: {
        options: {
          create: ['build/angular/views']
        },
      },
    },
    cssmin: {
      vendor: {
        files: {
          'build/styles/vendor.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/components-font-awesome/css/font-awesome.min.css'
          ]
        }
      },
      app: {
        files: {
          'build/styles/app.min.css': [
            'build/styles/app.css'
          ]
        }
      }
    },
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'bower_components/components-font-awesome/fonts/*',
            dest: 'build/fonts/'
          }
        ]
      }
    },
    sass: {
      dist: {
        files: {
          'build/styles/app.css': 'common/styles/app.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-sprockets-directives');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask(
    'default', [
      'mkdir',
      'sass',
      'copy',
      'concat',
      'directives',
      'coffee:compile',
      'cssmin:vendor',
      'cssmin:app',
      'haml:layout',
      'haml:views'
    ]
  );
}
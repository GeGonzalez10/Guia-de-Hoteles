module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files:[{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      watch: {
        files: ['css/*.scss'],
        tasks: ['css'] }
      },
      browserSync:{
        dev: {
          bsFiles: { //browser files
            src: [
              'css/*.css',
              '*.html',
              'js/*.js'
            ]
          },
          options: {
            watchTask: true,
            server: {baseDir: './' //directorio base para el servidor
          }
        }
      }
    },
    imagemin:{
      dynamic: {
        files:[{
          expand: true,
          cwd: './',
          src: 'imagenes/*.{png,gif,jpg,jpeg}',
          dest: 'dist/'
        }]
      }
    },
    
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('img:compress', ['imagemin']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};

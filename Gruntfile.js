// Gruntfile.js

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

	less: {
      build: {
        files: {
          'index.css': 'index.less'
        }
      }
    },

	watch: {
		lessfiles: {
			files: 'index.less', tasks: 'less'
		}
	}

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};

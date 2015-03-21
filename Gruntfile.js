module.exports = function (grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},

		imageSizeExport: {
			options: {
				path: 'tmp/pictures/**/*.jpg',
				breakpointDelimiter: '--'
			},

			simple: {
				options: {
					output: 'test/expected/simple.json'
				}
			},
			custom: {
				options: {
					output: 'test/expected/custom.yaml',
					template: 'test/source/custom.hbs'
				}
			},
			folders: {
				options: {
					output: 'test/expected/folders.json',
					categorizeBy: 'folders',
					folderDepth: 2
				}
			},
			breakpoints: {
				options: {
					output: 'test/expected/breakpoints.json',
					categorizeBy: 'breakpoints'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-image-size-export');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['clean', 'imageSizeExport']);
	grunt.registerTask('default', ['test']);

};
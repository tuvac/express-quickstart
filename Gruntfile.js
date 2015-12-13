/*global module:false*/
'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n' +
            ' * <%= pkg.title || pkg.name %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * \n' +
            ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
            ' * @since <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * @version v<%= pkg.version %>\n' +
            ' */\n',
        less: {
            all: {
                options: {
                    paths: ['less'],
                    compress: true,
                    optimization: 2
                },
                files: {
                    'public/stylesheets/style.css': 'less/style.less'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task.
    grunt.registerTask('default', ['less']);

};

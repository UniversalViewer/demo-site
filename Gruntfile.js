module.exports = function (grunt) {

    grunt.initConfig({

        connect: {
            dev: {
                options: {
                    port: '8080',
                    base: '.',
                    directory: '.',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:8080/'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask("default", '', function(){

    });

    grunt.registerTask('serve', '', function() {
        grunt.task.run(
            'connect'
        );
    });
};

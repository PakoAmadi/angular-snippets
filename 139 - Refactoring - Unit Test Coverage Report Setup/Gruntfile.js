module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  require('load-grunt-tasks')(grunt, {scope: ['dependencies', 'devDependencies']});

  grunt.initConfig({
    shell: {
      test: {
        options: { stdout: true },
        command: 'jasmine-node spec/'
      }
    },
    karma: {
      plugins: [
        'karma-osx-reporter'
      ],
      unit: {
        configFile: 'karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unitAuto: {
        configFile: 'karma-unit.conf.js',
        autoWatch: true,
        singleRun: false
      },
    },
    clean: [".tmp"]
  });

  grunt.registerTask('test', 'shell:test');
  grunt.registerTask('autotest', [
    'autotest:unit'
  ]);

  grunt.registerTask('autotest:unit', [
    'karma:unitAuto'
  ]);

}

angular.module('app', ["ui.router", "projectData", "projectsList", "auth"])

    .config(function($urlRouterProvider){

//      $urlRouterProvider.when('/', '/projects');
//      $urlRouterProvider.otherwise('/');

    })

    .run(function($rootScope, $state){

      $rootScope.$state = $state;

    });
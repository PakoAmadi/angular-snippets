angular.module("projectsList", ["projectBoard"])

    .config(function ($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.when('/projects', '/projects/p1');

      $stateProvider.state('projects', {
        abstract: true,
        url: '/projects',
        templateUrl: "projectsList/projectsList.tpl.html",
        controller: function($scope, projectData){
          $scope.projects = projectData.getAll();
        }
      });
    });
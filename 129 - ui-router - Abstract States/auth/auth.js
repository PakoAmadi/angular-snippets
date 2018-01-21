angular.module("auth", [])

    .config(function ($stateProvider) {

      $stateProvider
          .state('sign', {
            abstract: true,
            url: '/sign',
            template: '<a ui-sref=".in">Sign In</a>' +
                '<a ui-sref=".up">Sign Up!</a>' +
                '<ui-view/>',
            controller: function($scope, authService){
              $scope.signIn = function(){
                authService.signIn();
              }
            },
            resolve: {},
            data: {},
            onEnter: function(){},
            onExit: function(){}
          })
          .state('sign.in', {
            url: '/in',
            template: '<h1>Sign In</h1>' +
                '<button class="btn btn-primary" ng-click="signIn()">Sign In Now</button>'
          })
          .state('sign.up', {
            url: '/up',
            template: '<h1>Sign Up for a Free Account.</h1>'
          })


    });
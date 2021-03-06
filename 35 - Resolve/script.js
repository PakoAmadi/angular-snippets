var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "view/app.html",
        controller: "AppCtrl",
        resolve: {
            app: function($q, $timeout) {
                var defer = $q.defer();
                $timeout(function() {
                    defer.resolve();
                }, 2000);
                return defer.promise;
            }
        }
      })
});

app.controller("AppCtrl", function($scope, $q) {
    $scope.model = {
        message: "I'm a great app!!!"
    }
});
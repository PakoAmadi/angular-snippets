var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
//  $routeProvider.when('/',
//    {
//      templateUrl: "app.html",
//      controller: "AppCtrl"
//    }
//  )
});

app.controller("AppCtrl", function($scope, $route) {
    $route.routes["/"] = {
        templateUrl: "app.html",
        controller: "AppCtrl"
    }

    $scope.model = {
        message: "This is my app!!!"
    }
});
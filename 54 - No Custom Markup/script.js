var app = angular.module("app", []);

app.controller("AppCtrl", function() {
    this.random = Math.random();
});

app.directive("app", function() {
    return {
        restrict: "C",
        controller: "AppCtrl as app"
    };
});

angular.bootstrap(document.getElementById("container"), ["app"]);
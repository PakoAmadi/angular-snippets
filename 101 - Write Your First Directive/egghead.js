var egghead = angular.module("egghead", []);

egghead.controller("AppCtrl", function () {
    var app = this;

    app.message = "Hello";
})

egghead.directive("myFirstDirective", function () {
    return function (scope, element, attrs) {
        element.text(scope.app.message + " " + attrs.message);
    }
})
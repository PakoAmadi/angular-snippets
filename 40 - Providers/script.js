var app = angular.module("app", []);

app.factory("game", function() {
    return {
        title: "StarCraft"
    };
});

app.controller("AppCtrl", function($scope, $injector) {
    $injector.invoke(function(game) {
        $scope.title = game.title;
        alert(game.title);
    });
});
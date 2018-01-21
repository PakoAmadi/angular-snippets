var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function() {
    var appctrl = this; 
    appctrl.ctrlFlavor = "blackberry";
});

app.directive("drink", function() {
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    };
});
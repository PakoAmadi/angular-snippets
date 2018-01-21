var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function() {
    var appctrl = this; 
    appctrl.ctrlFlavor = "blackberry";
});

app.directive("drink", function() {
    return {
        scope: {
            flavor: "@"
        },
        template: '<div>{{flavor}}</div>'
    };
});
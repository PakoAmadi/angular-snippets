var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function() {
    var appCtrl = this;

    appCtrl.sayHi = function() {
        alert("hi");
    };

    return appCtrl.AppCtrl = this;

});
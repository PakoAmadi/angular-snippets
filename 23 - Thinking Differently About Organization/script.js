var app = angular.module("phoneApp", []);

var phoneAppStuff = {};

phoneAppStuff.controllers = {};
phoneAppStuff.controllers.AppCtrl = function() {
    var appCtrl = this; 

    appCtrl.sayHi = function() {
        alert("hi");
    };

    return appCtrl.AppCtrl = this;

};

phoneAppStuff.directives = {};
phoneAppStuff.directives.panel = function() {
    return {
        restrict: "E"
    };
};

app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers); 
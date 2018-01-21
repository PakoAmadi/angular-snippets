var egghead = angular.module("egghead", ["ngSanitize"]);

egghead.controller("AppCtrl", function () {
    var app = this;

    app.someHtml = '<a href="http://egghead.io" style="color:red">Learn stuff!</strong>';
});

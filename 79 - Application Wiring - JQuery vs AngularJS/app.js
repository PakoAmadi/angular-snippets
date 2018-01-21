$(function () {
    $("#jquery-button").click(function () {
        $("#jquery-content").toggle()
    })
})

var compare = angular.module("compare", []);
compare.controller("AppCtrl", function () {
    var app = this;

    app.isHidden = false;
    app.toggle = function () {
        app.isHidden = !app.isHidden;
    }
})
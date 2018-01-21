var app = angular.module("app", ["ngAnimate"]);

app.controller("AppCtrl", function() {
    this.toggle = true;
});

app.animation(".toggle", function () {
    return {
        leave: function (element, done) {
            element.text("Nooooo!!!");
            TweenMax.to(element, 1, {opacity:0.5})
        },
        enter: function (element, done) {
            element.text("Yay, I'm alive!")
            TweenMax.from(element, 1, {opacity:0})
        }
    }
})
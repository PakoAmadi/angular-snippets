var app = angular.module("egghead", []);

app.config(function ($anchorScrollProvider) {
    $anchorScrollProvider.disableAutoScrolling();
})

app.controller("AppCtrl", function ($location, $anchorScroll) {
    var app = this;

    app.elms = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    //https://github.com/bgrins/TinyColor#color-combinations
    var colors = tinycolor.analogous("steelblue", app.elms.length, app.elms.length);

    app.goToAnchor = function (elm) {
        $location.hash(elm);

        $anchorScroll();

    }

    app.createStyle = function (index) {
        var color = colors[index]; //grabs a tinycolor of the array
        return {
            backgroundColor: color.toHexString(),
            borderBottom: "3px solid black",
            height: "100px"
        };
    }

})
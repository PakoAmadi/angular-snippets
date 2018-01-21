angular.module("demo", ["oc.lazyLoad"])
    .controller("AppCtrl", function ($injector, $ocLazyLoad) {

        var app = this;
        app.click = function () {
            $ocLazyLoad.load({
                name: "store",
                files: [
                    "store.js"
                ]
            }).then(function () {
                console.log($injector.get("cart"));
            })

        }
    })
angular.module("demo", ["ui.router", "oc.lazyLoad"])
    .config(function ($stateProvider) {
        $stateProvider.state('store', {
            templateUrl: "store/store.html",
            controller: "StoreCtrl as store",
            resolve: {
                store: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: "store",
                            files: ["store/store.js"]
                        }
                    )
                }
            }
        })
    })

    .controller("AppCtrl", function ($state) {
        var app = this;
        app.click = function () {
            $state.go("store")
        }
    })
angular.module("egghead", [])

    .factory("peopleCache", function ($cacheFactory) {
        return $cacheFactory("people");
    })

    .controller("AppCtrl", function ($http, peopleCache) {
        var app = this;

        app.loadPeople = function () {

            $http.get("http://www.json-generator.com/api/json/get/bMsbXGMAjm", {cache:peopleCache})
                .success(function (data) {
                    app.people = data;
                })
        }

        app.clearCache = function () {
            peopleCache.remove("http://www.json-generator.com/api/json/get/bMsbXGMAjm")
        }

    })
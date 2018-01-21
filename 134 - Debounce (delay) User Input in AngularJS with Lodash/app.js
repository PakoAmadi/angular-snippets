angular.module("egghead", [])

    .controller("AppCtrl", function ($http, $scope) {
        var app = this;
        app.infoMessage = "";
        app.searchTerm = "";
        app.debounceTerm = "";

        $http.get("//localhost:3000/people")
            .success(function (data) {
                app.people = data;
            })

        $scope.$watch("app.searchTerm", function (n, o) {
            if(n == o) return;
            app.infoMessage = "Loading...";
        })

        $scope.$watch("app.searchTerm", _.debounce(function (n, o) {
            app.debounceTerm = n;
            app.infoMessage = "";
            $scope.$apply();
        }, 500))
    })
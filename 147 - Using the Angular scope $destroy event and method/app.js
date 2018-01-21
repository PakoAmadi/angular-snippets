angular.module("demo", [])

    .factory("person", function () {
        return {
            firstName: "John",
            lastName: "Lindquist"
        }
    })

    .controller("MyCtrl", function ($scope, person) {
        var my = this;
        my.person = person;

        my.click = function () {
            $scope.$destroy();
        }

    })

    .directive("myDirective", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div style='border: 1px solid black'>My Directive</div>",
            link: function (scope) {
                scope.$on("$destroy", function () {
                    console.log("directive destroy");
                })
            }
        }
    })
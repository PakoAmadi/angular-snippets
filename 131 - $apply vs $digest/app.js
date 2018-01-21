angular.module("demo", [])
    .filter("heavy", function () {
        return function (val) {
            return val + "      heavy!!! " + moment().format('SSS');
        }
    })


    .controller("OuterCtrl", function ($scope, $element) {
        var outer = this;

        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })
    .controller("MiddleCtrl", function ($scope, $element) {
        var middle = this;

        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })
    .controller("InnerCtrl", function ($scope, $element) {
        var inner = this;

        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })

    .directive("digestButton", function ($rootScope) {
        return {
            restrict: "E",
            template: "<button class='btn'>$digest {{digestCount}}</button>",
            link: function (scope, element, attrs, ctrl) {
                scope.digestCount = 0;
                element.on("click", function () {
                    $rootScope.time = moment().format('h:mm:ss');
                    scope.digestCount++;
                    scope.$digest();
                })
            }
        }
    })

    .directive("applyButton", function ($rootScope) {
        return {
            restrict: "E",
            template: "<button class='btn'>$apply {{applyCount}}</button>",
            link: function (scope, element, attrs, ctrl) {
                scope.applyCount = 0;
                element.on("click", function () {
                    $rootScope.time = moment().format('h:mm:ss');
                    scope.applyCount++;
                    scope.$apply();
                })
            }
        }
    })
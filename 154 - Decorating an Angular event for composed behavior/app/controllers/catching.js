angular.module('app').controller('CatchingCtrl',
    ['$scope', 'eventDecorator',
        function ($scope, eventDecorator) {

            $scope.$on('USER_LOGGED_IN', function (e) {
                $scope.message = "Thanks for sending " + e.name;
            });

            $scope.$on('USER_LOGGED_OUT', function (e) {
                $scope.message = "Thanks for sending " + e.name;
            });

            eventDecorator($scope, ['USER_LOGGED_IN', 'USER_LOGGED_OUT']);
        }]);
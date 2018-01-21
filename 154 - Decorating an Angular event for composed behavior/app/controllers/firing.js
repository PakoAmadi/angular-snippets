angular.module('app')
    .controller('FiringCtrl',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            $scope.myEvents = ['USER_LOGGED_IN', 'USER_LOGGED_OUT'];
            $scope.myEvent = $scope.myEvents[0];

            $scope.fireEvent = function (eventName) {
                if (eventName) {
                    $rootScope.$broadcast(eventName);
                }
            };

        }]);
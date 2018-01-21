function WatchCtrl ($scope) {

    $scope.$watchCollection('user', function (newVal, oldVal) {
        console.log(newVal, oldVal);
    });

}

angular.module('app', [])
    .controller('WatchCtrl', WatchCtrl);
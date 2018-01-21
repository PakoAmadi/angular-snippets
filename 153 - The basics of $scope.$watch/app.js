function WatchCtrl ($scope) {

    function isLongEnough (pwd) {
        return pwd.length > 4;
    }

    function hasNumbers (pwd) {
        return /[0-9]/.test(pwd);
    }

    $scope.$watch('user.password', function (newVal, oldVal) {
        if (!newVal) return;

        $scope.reqs = [];

        if (!isLongEnough(newVal)) {
            $scope.reqs.push('Too short');
        }

        if (!hasNumbers(newVal)) {
            $scope.reqs.push('Must include numbers');
        }

        $scope.showReqs = $scope.reqs.length;
    });
}

angular.module('app', [])
    .controller('WatchCtrl', WatchCtrl);
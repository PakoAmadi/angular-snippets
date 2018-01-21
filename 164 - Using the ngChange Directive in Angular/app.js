function WatchCtrl ($scope) {

    function isLongEnough (pwd) {
        return pwd.length > 4;
    }

    function hasNumbers (pwd) {
        return /[0-9]/.test(pwd);
    }

    function checkPassword (value) {
        if (!value) return;

        $scope.reqs = [];

        if (!isLongEnough(value)) {
            $scope.reqs.push('Too short');
        }

        if (!hasNumbers(value)) {
            $scope.reqs.push('Must include numbers');
        }

        $scope.showReqs = $scope.reqs.length;
    }

    $scope.onChange = function () {
        checkPassword($scope.user.password);
    }
}

angular.module('app', [])
    .controller('WatchCtrl', WatchCtrl);
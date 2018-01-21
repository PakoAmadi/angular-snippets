angular.module('controllers').controller('MusicianCtrl',
    ['$scope',
        function ($scope) {
            $scope.onVote = function (musician, up) {
                if (up) {
                    musician.votes++;
                } else {
                    musician.votes--;
                }
                $scope.countVote(musician.name);
            };
        }]);
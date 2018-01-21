angular.module('controllers').controller('ElectionCtrl',
    ['$scope',
        function ($scope) {
            $scope.musicians = [
                {name: "Lemmy Kilmister", votes: 0},
                {name: "Bruce Dickinson", votes: 0},
                {name: "Danzig", votes: 0},
                {name: "Ronnie James Dio", votes: 0}
            ];
            $scope.totalVotes = 0;
            $scope.lastVote = null;

            $scope.countVote = function(name) {
                $scope.totalVotes++;
                $scope.lastVote = name;
            };
        }]);
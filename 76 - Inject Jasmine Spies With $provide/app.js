var app = angular.module('app', []);

app.controller('ProfileCtrl',
    ['$scope', 'ProfileSvc',
        function ($scope,
                  profileSvc) {

            $scope.favoriteBooks = profileSvc
                .favoriteBooks();

        }]);

app.service('ProfileSvc', function () {
    this.favoriteBooks = function () {
        return JSON.parse(
            localStorage.getItem('favoriteBooks')
        );
    };
});
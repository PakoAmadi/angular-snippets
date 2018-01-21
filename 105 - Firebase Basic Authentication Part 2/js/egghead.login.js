var app = angular.module('egghead', ['firebase']);

app.constant('FIREBASE_URI', 'https://ng-egghead.firebaseio.com/');

app.controller('MainCtrl', function ($scope, $firebaseSimpleLogin, FIREBASE_URI) {
    $scope.loginService = $firebaseSimpleLogin(new Firebase(FIREBASE_URI));
    $scope.newUser = { email: '', password: '' };
    $scope.currentUser  = null;

    $scope.getCurrentUser = function () {
        $scope.loginService.$getCurrentUser()
            .then(function(user){
                $scope.currentUser = user;
            });
    };

    $scope.logout = function () {
        $scope.loginService.$logout();
        $scope.currentUser = null;
    };

    $scope.getCurrentUser();

    $scope.login = function (email, password) {
        $scope.loginService.$login('password', {email:email, password:password})
            .then(function(user){
               $scope.currentUser = user;
                $scope.resetForm();
            });
    };

    $scope.register = function (email, password) {
        $scope.loginService.$createUser(email, password)
            .then(function(user){
                $scope.currentUser = user;
                $scope.resetForm();
            });
    };

    $scope.resetForm = function () {
        $scope.newUser = { email: '', password: '' };
    };
});



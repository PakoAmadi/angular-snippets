var app = angular.module('app', []);

app.controller('MainCtrl', function MainCtrl($scope) {
  'use strict';
  
  $scope.angularVersion = angular.version.full;
  $scope.val1 = 'val1';
  $scope.val2 = 'val2';
  $scope.val3 = 'val3';
  $scope.val4 = 'val4';
  
  $scope.$watchGroup([
    'val1',
    'val2',
    'val3',
    'val4'
  ], function(newVal, oldVal) {
    $scope.newVal = newVal;
    $scope.oldVal = oldVal;
  });
});

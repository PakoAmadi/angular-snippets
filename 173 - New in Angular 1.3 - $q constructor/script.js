var app = angular.module('app', []);

app.controller('MainCtrl', function MainCtrl($q) {
  'use strict';
  var vm = this;
  vm.angularVersion = angular.version.full;
  vm.fire = fire;
  
  function fire(rejectIt) {
    doAsync(rejectIt).then(function(data) {
      vm.resolvedValue = data;
    }, function(error) {
      vm.rejectedValue = error;
    });
  }
  
  function doAsync(rejectIt) {
    return $q(function(resolve, reject) {
    setTimeout(function() {
      var doneTime = new Date();
      if (!rejectIt) {
        resolve({
          resolvedData: 'resolved at ' + doneTime
        });
      } else {
        reject({
          rejectedData: 'rejected at ' + doneTime
        });
      }
    }, 500);
    });
  }
});
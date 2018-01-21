var app = angular.module('app', []);

app.controller('MainCtrl', function MainCtrl() {
  'use strict';
  
  var vm = this;
  vm.angularVersion = angular.version.full;
  vm.modelOptions = {
    timezone: 'UTC'
  };
});
var app = angular.module('app', ['ngMessages']);

app.controller('MainCtrl', function MainCtrl() {
  'use strict';
  var vm = this;
  vm.angularVersion = angular.version.full;
  
});
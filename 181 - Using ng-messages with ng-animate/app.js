var app = angular.module('app', ['ngMessages', 'ngAnimate']);

app.controller('MainCtrl', function MainCtrl() {
  'use strict';
  var vm = this;
  vm.angularVersion = angular.version.full;
  
});
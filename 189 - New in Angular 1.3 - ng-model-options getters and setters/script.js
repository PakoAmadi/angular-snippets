var app = angular.module('app', []);

app.controller('MainCtrl', function MainCtrl() {
  'use strict';
  
  var vm = this,
      _val = '';
  vm.angularVersion = angular.version.full;
  vm.modelOptions = {
    getterSetter: true,
    allowInvalid: true
  };
  vm.inputValue = function(val) {
    return angular.isDefined(val) ? (_val = val) : _val;
  }
});
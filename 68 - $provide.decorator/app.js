angular
  .module('app', [])
  .factory('System', function() {
    function System() {
      this.error = 15;
    }
    return System;
  })
  .controller('MainCtrl', function($scope, System) {
    $scope.system = new System();
  })
  .config(function($provide) {
    $provide.decorator('System', function($delegate) {

      Object.defineProperty($delegate.prototype, 'message', {
        get: function() { return parseMessage(this.error); }
      });

      function parseMessage(error) {
        return {
          15: 'Faulted'
        }[error];
      }

      return $delegate;

    });
  });
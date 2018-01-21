//updated to no longer use global function to represent controller.
angular.module('app', [])
  .controller('FirstCtrl', function() {
  var first = this;
  
  first.data = {message: "Hello"};
})
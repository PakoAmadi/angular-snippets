angular.module('app', [])

 .controller('FirstCtrl', function FirstCtrl() {
    var first = this;
  
    first.data = "First"
  })



 .controller('SecondCtrl', function SecondCtrl() {
    var second = this;
  
    second.data = "Second"
  })

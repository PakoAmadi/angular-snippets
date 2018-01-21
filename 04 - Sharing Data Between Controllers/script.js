angular.module('app', [])
  .service('greeting', function Greeting() {
    var greeting = this;
    greeting.message = 'Default';
  })
  .controller('FirstCtrl', function FirstCtrl(greeting) {
    var first = this;
  
    first.greeting = greeting;  
  })
  .controller('SecondCtrl', function SecondCtrl(greeting) {
    var second = this;
  
    second.greeting = greeting;  
  })
;
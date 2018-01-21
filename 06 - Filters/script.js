var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    return {message: "Message"};
});

myApp.filter('reverse', function(Data) {
    return function(text) {
      return text.split("").reverse().join("") + Data.message;
  };
});

function FirstCtrl(Data){
  var firstCtrl = this;
  firstCtrl.data = Data;
}

function SecondCtrl(Data){
  var secondCtrl = this;
   secondCtrl.data = Data;

  secondCtrl.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };
}

myApp.controller("FirstCtrl", FirstCtrl);

myApp.controller("SecondCtrl", SecondCtrl);
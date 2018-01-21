var app = angular.module('helloGreensock', ['ngAnimate']);

app.controller('MainCtrl', function ($scope) {
  $scope.questions = [
    {question: 'Question One', answer: 'Answer One'},
    {question: 'Question Two', answer: 'Answer Two'}
  ];
});

app.directive('question', function () {
  var controller = function ($scope) {
    $scope.showAnswer = false;
  };

  return {
    restrict: 'E',
    scope: true,
    controller: controller
  }
});

app.animation('.answer-animation', function () {
  TweenLite.set('.cardWrapper', {perspective: 800});
  TweenLite.set('.card', {transformStyle: 'preserve-3d'});
  TweenLite.set('.back', {rotationY: -180});
  TweenLite.set(['.back', '.front'], {backfaceVisibility: 'hidden'});

  return {
    beforeAddClass: function (element, className, done) {
      if (className == 'answer') {
        TweenLite.to(element.find('.card'), 1.2,
          {rotationY:180, ease:Back.easeOut, onComplete:done});
      }
      else {
        done();
      }
    },

    beforeRemoveClass: function (element, className, done) {
      if (className == 'answer') {
        TweenLite.to(element.find('.card'), 1.2,
          {rotationY:0, ease:Back.easeOut, onComplete:done});
      }
      else {
        done();
      }
    }
  };
});
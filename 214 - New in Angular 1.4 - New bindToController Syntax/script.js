angular.module('app', [])
  .controller('BodyCtrl', function BodyCtrl($scope) {
    var body = this;
  })
  .directive('body', function body() {
    return {
      scope: {note: '@'},
      bindToController: {message: '@'},
      controller: 'BodyCtrl as body',
      template: '<div>' +
      '<input type ="text" ng-model="body.message"/>' +
      '<h1>{{body.message}} {{note}}</h1>' +
      '</div>'
    };
  });
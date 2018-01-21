angular.module('egghead',[])
  .controller('MainCtrl', function($scope){
    var main = this;
    main.message = 'My message';
    main.output = 'Output goes here';
    
    $scope.$watch(function(){
      return main.message;
    }, function(newVal, oldVal){
      if(newVal === oldVal) return;
      main.output = 'Message Updated: ' + newVal;
    });
  })
;
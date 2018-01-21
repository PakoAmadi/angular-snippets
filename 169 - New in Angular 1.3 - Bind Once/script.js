var app = angular.module('app', ['angularStats']);

app.constant('Faker', Faker);

app.controller('MainCtrl', function MainCtrl(Faker) {
  'use strict';
  
  var vm = this;
  vm.angularVersion = angular.version.full;
  vm.visiblePeople = 10;
  vm.increment = increment;
  
  function increment(person, thing) {
    person[thing]++;
  }
  
  
  vm.people = [];
  var user = null;
  for (var i = 0; i < 100; i++) {
    user = Faker.Helpers.createCard();
    user.clicked = 0;
    user.recompileCount = 0;
    user.picture = Faker.Image.avatar();
    vm.people.push(user);
  }
});
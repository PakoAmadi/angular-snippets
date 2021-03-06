// this code has been updated to not
// use $scope! It now uses the "controller as"
// syntax instead.

var app = angular.module("superApp", []);

// controller declared on module so it can use "controller as"
app.controller("SuperHeroCtrl", function($element) {
  var superman = this;
  
  superman.abilities = [];

  superman.addStrength = function() {
    superman.abilities.push("strength");
  };

  superman.addSpeed = function() {
    superman.abilities.push("speed");
  };

  superman.addFlight = function() {
    superman.abilities.push("flight");
  };
  
  $element.addClass("button");
  $element.bind("mouseenter", function() {
    console.log(superman.abilities);
  });
})

app.directive("superhero", function() {
    return {
        restrict: "E",
        scope: {},

        controller: "SuperHeroCtrl as superhero"
  };
});

app.directive("strength", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    };
});

app.directive("speed", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    };
});

app.directive("flight", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    };
});
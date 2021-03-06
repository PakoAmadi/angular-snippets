angular
  .module("Models")
  .factory("Movie", [function() {
    return function Movie(title, type) {
      this.id    = _.uniqueId();
      this.title = title;
      this.type  = type;

      this.charge = function(daysRented) {
        return this[this.chargeFunctionName()](daysRented);
      }

      this.chargeFunctionName = function() {
        return this.type.titleize().split(" ").join("").camelize() + "Charge"
      }

      this.regularCharge = function(daysRented) {
        if (daysRented > 2) { return 2 + (daysRented - 2) * 1.5; }
        return 2;
      }

      this.newReleaseCharge = function(daysRented) {
        return daysRented * 3;
      }

      this.childrensCharge = function(daysRented) {
        if (daysRented > 3) { return 1.5 + (daysRented - 3) * 1.5; }
        return 1.5;
      }
    }
  }]);

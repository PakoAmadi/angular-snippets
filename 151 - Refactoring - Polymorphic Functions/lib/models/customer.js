angular
  .module("Models", [])
  .factory("Customer", [function() {
    return function Customer(name) {
      this.id      = _.uniqueId();
      this.name    = name;
      this.rentals = [];

      this.statement = function() {
        var totalAmount          = 0,
            frequentRenterPoints = 0,
            result = "Rental Record For " + this.name + "\n";

        _.each(this.rentals, function(rental) {
          totalAmount += rental.charge();
          frequentRenterPoints += rental.frequentRenterPoints();

          result += rental.movie.title + " " + rental.charge() + "\n";
        });

        // add footer notes
        result += "Amount owed is " + totalAmount + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points."

        return result;
      }
    }
  }]);

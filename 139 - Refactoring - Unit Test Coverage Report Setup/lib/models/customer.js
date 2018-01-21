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
          var thisAmount = 0,
              priceCode;

          if (rental.movie.type == "regular") {
            thisAmount += 2;
            if (rental.daysRented > 2) {
              thisAmount += (rental.daysRented - 2) * 1.5;
            }
          } else if (rental.movie.type == "new release") {
            thisAmount += rental.daysRented * 3
          } else if (rental.movie.type == "childrens") {
            thisAmount += 1.5;
            if (rental.daysRented > 3) {
              thisAmount += (rental.daysRented - 3) * 1.5;
            }
          }

          // add frequent renter points
          frequentRenterPoints += 1;

          // add bonus for a two day new release rental
          if (rental.movie.type == "new release" && rental.daysRented > 1) {
            frequentRenterPoints += 1;
          }

          result += rental.movie.title + " " + thisAmount + "\n";
          totalAmount += thisAmount;
        });

        // add footer notes
        result += "Amount owed is " + totalAmount + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points."

        return result;
      }
    }
  }]);

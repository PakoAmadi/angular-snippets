angular
  .module("Models")
  .factory("Rental", [function() {
    return function Rental(customer, movie, daysRented) {
      this.id         = _.uniqueId();
      this.customer   = customer;
      this.movie      = movie;
      this.daysRented = daysRented;

      this.customer.rentals.push(this);

      this.frequentRenterPoints = function() {
        if (this.movie.type == "new release" && this.daysRented > 1) {
          return 2;
        }

        return 1;
      }

      this.charge = function() {
        var thisAmount = 0;

        if (this.movie.type == "regular") {
          thisAmount += 2;
          if (this.daysRented > 2) {
            thisAmount += (this.daysRented - 2) * 1.5;
          }
        } else if (this.movie.type == "new release") {
          thisAmount += this.daysRented * 3
        } else if (this.movie.type == "childrens") {
          thisAmount += 1.5;
          if (this.daysRented > 3) {
            thisAmount += (this.daysRented - 3) * 1.5;
          }
        }

        return thisAmount;
      }

    }
  }]);

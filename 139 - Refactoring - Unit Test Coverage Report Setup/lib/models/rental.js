angular
  .module("Models")
  .factory("Rental", [function() {
    return function Rental(customer, movie, daysRented) {
      this.id         = _.uniqueId();
      this.customer   = customer;
      this.movie      = movie;
      this.daysRented = daysRented;

      this.customer.rentals.push(this);
    }
  }]);

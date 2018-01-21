describe("Customer", function() {

  var customer;
  beforeEach(function() {
    customer = new Customer("Brett");
  });

  describe("Regular Rentals", function() {
    it("correctly computes regular rentals of 2 days or less", function() {
      var movie    = new Movie("Forgetting Sarah Marshall", "regular");
      var rental   = new Rental(customer, movie, 2);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "Forgetting Sarah Marshall 2\n" +
        "Amount owed is 2\n" +
        "You earned 1 frequent renter points."
      );
    });

    it("correctly computes regular rentals of greater than 2 days", function() {
      var movie    = new Movie("Forgetting Sarah Marshall", "regular");
      var rental   = new Rental(customer, movie, 5);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "Forgetting Sarah Marshall 6.5\n" +
        "Amount owed is 6.5\n" +
        "You earned 1 frequent renter points."
      );
    });
  });

  describe("New Releases", function() {
    it("correctly computes new releases with one-day rentals", function() {
      var newRelease = new Movie("22 Jump Street", "new release");
      var rental = new Rental(customer, newRelease, 1);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "22 Jump Street 3\n" +
        "Amount owed is 3\n" +
        "You earned 1 frequent renter points."
      );
    });

    it("correctly computes new releases with rentals greater than one day", function() {
      var newRelease = new Movie("22 Jump Street", "new release");
      var rental = new Rental(customer, newRelease, 2);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "22 Jump Street 6\n" +
        "Amount owed is 6\n" +
        "You earned 2 frequent renter points."
      );
    });
  });

  describe("Childrens", function() {
    it("correctly computes childrens releases with 3 day or less rentals", function() {
      var childrens = new Movie("How to Train Your Dragon", "childrens");
      var rental    = new Rental(customer, childrens, 1);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "How to Train Your Dragon 1.5\n" +
        "Amount owed is 1.5\n" +
        "You earned 1 frequent renter points."
      );
    });

    it("correctly computes childrens movies with rentals greater than three days", function() {
      var childrens = new Movie("How to Train Your Dragon", "childrens");
      var rental = new Rental(customer, childrens, 20);

      expect(customer.statement()).toEqual(
        "Rental Record For Brett\n" +
        "How to Train Your Dragon 27\n" +
        "Amount owed is 27\n" +
        "You earned 1 frequent renter points."
      );
    });
  });
});

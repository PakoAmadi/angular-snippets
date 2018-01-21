describe("Rental", function() {
  var customer, movie, rental;
  beforeEach(function() {
    customer = new Customer("Brett");
    movie    = new Movie("Forgetting Sarah Marshall", "regular");
    rental   = new Rental(customer, movie, 5);
  });

  it("creates rentals", function() {
    expect(rental.customer).toEqual(customer);
  });
});

describe("Movie", function() {
  it("creates movies", function() {
    var movie = new Movie("Forgetting Sarah Marshall", "regular");
    expect(movie.title).toEqual("Forgetting Sarah Marshall");
  });
});

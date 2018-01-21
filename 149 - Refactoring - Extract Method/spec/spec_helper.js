var Customer, Movie, Rental;
beforeEach(module('Models'));
beforeEach(inject(function(_Customer_, _Movie_, _Rental_) {
  Customer = _Customer_;
  Movie    = _Movie_;
  Rental   = _Rental_;
}));


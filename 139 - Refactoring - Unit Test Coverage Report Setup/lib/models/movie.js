angular
  .module("Models")
  .factory("Movie", [function() {
    return function Movie(title, type) {
      this.id    = _.uniqueId();
      this.title = title;
      this.type  = type;
    }
  }]);

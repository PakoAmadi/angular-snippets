angular
  .module('BaseClass')
  .factory('BCBase', ['BCCacheable', 'BCValidatable', function(Cacheable, Validatable) {
    function Base(attributes) {
      var _constructor = this;
      var _prototype   = _constructor.prototype;
      privateVariable(_constructor, 'primaryKey', 'id');

      _constructor.new = function(attributes) {
        var instance = new _constructor(attributes);
        _constructor.cache(instance);
        return instance;
      };

      _constructor.extend(Cacheable);
      _constructor.extend(Validatable);
      _constructor.include(Validatable);
    };

    return Base;
  }]);

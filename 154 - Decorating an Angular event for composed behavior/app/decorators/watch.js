angular.module('app')
    .factory('watchDecorator',
    ['AfterMethod',
        function (afterMethod) {
            function _createWrapper(fn) {
                var newFn = function () {
                    var orig = fn.apply(fn, arguments);
                    afterMethod.apply(fn, arguments);
                    return orig;
                };
                newFn.toString = function () {
                    return fn.toString();
                };
                return newFn;
            }

            //Decorator Method
            return function (scope, properties) {
                for (var i = 0; i < scope.$$watchers.length; i++) {
                    var watcher = scope.$$watchers[i];
                    var idx = properties.indexOf(watcher.exp);
                    if (idx !== -1) {
                        watcher.fn = _createWrapper(watcher.fn);
                    }
                }
                return scope;
            };
        }]);
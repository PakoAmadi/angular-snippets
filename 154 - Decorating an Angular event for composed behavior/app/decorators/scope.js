angular.module('app')
    .factory('scopeDecorator',
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
                return function (scope, functions) {
                    for (var i = 0; i < functions.length; i++) {
                        var fName = functions[i];
                        if (typeof scope[fName] == 'function') {
                            scope[fName] = _createWrapper(scope[fName]);
                        }
                    }
                    return scope;
                };
            }]);
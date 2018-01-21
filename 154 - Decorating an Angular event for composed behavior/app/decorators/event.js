angular.module('app')
    .factory('eventDecorator',
    ['MixpanelTracker',
        function (mixpanelTracker) {
            function _createWrapper(fn) {
                var newFn = function () {
                    var orig = fn.apply(fn, arguments);
                    mixpanelTracker.apply(fn, arguments);
                    return orig;
                };
                newFn.toString = function () {
                    return fn.toString();
                };
                return newFn;
            }

            //Decorator Method
            return function (scope, events) {
                for (var eventName in scope.$$listeners) {
                    if (events.indexOf(eventName) !== -1) {
                        for (var i = 0; i < scope.$$listeners[eventName].length; i++) {
                            scope.$$listeners[eventName][i] = _createWrapper(scope.$$listeners[eventName][i]);
                        }
                    }
                }
                return scope;
            };
        }]);
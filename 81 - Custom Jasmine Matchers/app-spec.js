describe("app", function () {
    var $scope,
        controller;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('StatusCtrl', {$scope: $scope});
    }));
    beforeEach(function() {
        this.addMatchers({
            toBeTypeOf: function(expected) {
                this.message = function() {
                    return this.actual + " is not type of " + expected;
                };

                return typeof this.actual === expected;
            }
        });
    });

    describe("Initialization", function () {
        it("Should define a levelUp function on the controller", function () {
            expect(controller.levelUp).toBeTypeOf('function');
        });

        it("Should define a levelDown function on the $scope", function () {
            expect($scope.levelDown).toBeTypeOf('function');
        });
    });

});
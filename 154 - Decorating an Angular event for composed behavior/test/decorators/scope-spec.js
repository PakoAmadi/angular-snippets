describe("scopeDecorator", function () {
    var afterMethodSpy,
        $scope,
        scopeBefore;

    beforeEach(function () {
        afterMethodSpy = jasmine.createSpy('AfterMethod');
    });
    beforeEach(function () {
        module('app', {
            AfterMethod: afterMethodSpy
        });
    });
    beforeEach(inject(function ($rootScope, scopeDecorator) {
        $scope = $rootScope.$new();

        //Methods
        $scope.plainCount = 0;
        $scope.plain = function () {
            $scope.plainCount++;
            return true;
        };

        $scope.withArgsCount = 0;
        $scope.withArgs = function (arg) {
            $scope.withArgsCount += arg;
            return arg;
        };

        //Before
        scopeBefore = _.clone($scope);

        //After
        scopeDecorator($scope, ['plain', 'withArgs']);
    }));

    describe("Before", function () {

        it("Should not call the afterMethod on the scopeBefore.plain method", function () {
            scopeBefore.plain();
            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

        it("Should not call the afterMethod on the scopeBefore.withArgs method", function () {
            scopeBefore.withArgs(26);
            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

    });

    describe("After", function () {

        describe("plain", function () {
            it("Should return the same value as the scopeBefore method", function () {
                expect($scope.plain()).toEqual(scopeBefore.plain());
            });

            it("Should modify the plainCount property on the scope", function () {
                $scope.plain();
                expect($scope.plainCount).toEqual(1);
            });

            it("Should have the same toString signature", function () {
                expect($scope.plain.toString()).toEqual(scopeBefore.plain.toString());
            });

            it("Should call the afterMethod when run", function () {
                $scope.plain();
                expect(afterMethodSpy).toHaveBeenCalledWith();
            });
        });

        describe("withArgs", function () {
            it("Should return the same value as the scopeBefore method", function () {
                expect($scope.withArgs(26)).toEqual(scopeBefore.withArgs(26));
            });

            it("Should modify the withArgsCount property on the scope", function () {
                $scope.withArgs(17);
                expect($scope.withArgsCount).toEqual(17);
            });

            it("Should have the same toString signature", function () {
                expect($scope.withArgs.toString()).toEqual(scopeBefore.withArgs.toString());
            });

            it("Should call the afterMethod when run, with arguments", function () {
                $scope.withArgs(50);
                expect(afterMethodSpy).toHaveBeenCalledWith(50);
            });
        });

    });
});
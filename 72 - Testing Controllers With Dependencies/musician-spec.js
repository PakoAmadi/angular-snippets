describe("MusicianCtrl", function () {
    var $scope,
        controller,
        testMusician;

    beforeEach(function () {
        module("controllers");

        inject(function (_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();

            //Spies
            $scope.countVote = jasmine.createSpy();

            controller = $controller("MusicianCtrl", {$scope: $scope});
        });

        testMusician = {name: "Phil Collins", votes: 0};
    });

    describe("onVote", function () {
        it("Should increment the votes on the passed in musician when called with up as true", function () {
            $scope.onVote(testMusician, true);
            expect(testMusician.votes).toEqual(1);
        });

        it("Should decrement the votes on the passed in musician when called with up as false", function () {
            $scope.onVote(testMusician, false);
            expect(testMusician.votes).toEqual(-1);
        });

        it("Should call $scope.countVote with the musician name when up is true", function () {
            $scope.onVote(testMusician, true);
            expect($scope.countVote).toHaveBeenCalledWith("Phil Collins");
        });

        it("Should call $scope.countVote with the musician name when up is false", function () {
            $scope.onVote(testMusician, false);
            expect($scope.countVote).toHaveBeenCalledWith("Phil Collins");
        });
    });
});
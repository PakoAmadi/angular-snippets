describe("ElectionCtrl", function () {
    var $scope,
        controller;

    beforeEach(function () {
        module("controllers");

        inject(function (_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            controller = $controller("ElectionCtrl", {$scope: $scope});
        });
    });

    it("Should set the $scope.musicians object when initialized", function () {
        expect($scope.musicians).toEqual([
            {name: "Lemmy Kilmister", votes: 0},
            {name: "Bruce Dickinson", votes: 0},
            {name: "Danzig", votes: 0},
            {name: "Ronnie James Dio", votes: 0}
        ]);
    });

    it("Should instantiate the $scope.totalVotes to 0", function () {
        expect($scope.totalVotes).toEqual(0);
    });

    it("Should instantiate the $scope.lastVote to null", function () {
        expect($scope.lastVote).toBeNull();
    });

    describe("countVote", function () {
        beforeEach(function () {
            $scope.totalVotes = 0;
        });

        it("Should increment $scope.totalVotes when called", function () {
            $scope.countVote("Phil Collins");
            expect($scope.totalVotes).toEqual(1);
        });

        it("Should set the $scope.lastVote to the name passed in", function () {
            $scope.countVote("Mick Jagger");
            expect($scope.lastVote).toEqual("Mick Jagger");
        });
    });
});
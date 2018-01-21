describe("Providers", function () {
    var $scope,
        controller,
        profileSvcSpy,
        favoriteBooks = ["Lowside of the Road", "Life", "The Grand Pursuit"];

    beforeEach(module('app', function($provide) {
        profileSvcSpy = jasmine.createSpyObj("ProfileSvc", ["favoriteBooks"]);
        profileSvcSpy.favoriteBooks.andReturn(favoriteBooks);

        $provide.value("ProfileSvc", profileSvcSpy);
    }));
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('ProfileCtrl', {$scope: $scope});
    }));

    describe("Initialization", function () {
        it("Should call the profileSvc.favoriteBooks with no arguments", function () {
            expect(profileSvcSpy.favoriteBooks).toHaveBeenCalledWith();
        });

        it("Should set the $scope.favoriteBooks from the profileService", function () {
            expect($scope.favoriteBooks).toEqual(favoriteBooks);
        });
    });

});
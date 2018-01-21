describe("watchDecorator", function () {
    var afterMethodSpy,
        $scope,
        nameSpy,
        ageSpy,
        placesVacationSpy,
        watchDecorator;

    beforeEach(function () {
        afterMethodSpy = jasmine.createSpy('AfterMethod');
        nameSpy = jasmine.createSpy('$watch name');
        ageSpy = jasmine.createSpy('$watch age');
        placesVacationSpy = jasmine.createSpy('$watch places.vacation')
    });
    beforeEach(function () {
        module('app', {
            AfterMethod: afterMethodSpy
        });
    });
    beforeEach(inject(function ($rootScope, _watchDecorator_) {
        $scope = $rootScope.$new();

        //Properties
        $scope.name = "Lemmy Kilmister";
        $scope.age = 65;
        $scope.places = {
            lived: ['New York', 'London', 'LA'],
            vacation: ['Rio', 'Tokyo', 'Shanghai', 'Austin']
        };

        //Watchers
        $scope.$watch('name', nameSpy);
        $scope.$watch('age', ageSpy);
        $scope.$watch('places.vacation', placesVacationSpy, true);
        $scope.$digest();

        watchDecorator = _watchDecorator_;
    }));

    describe("Before", function () {
        it("Should not call the afterMethod when the $scope.name is changed", function () {
            $scope.name = "Lemmy Ian Kilmister";
            $scope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

        it("Should not call the afterMethod when the $scope.places.vacation is changed", function () {
            $scope.places.vacation.push('Kansas City');
            $scope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });
    });

    describe("After", function () {
        var returnedScope;
        beforeEach(function () {
            returnedScope = watchDecorator($scope, ['name', 'places.vacation']);
        });

        it("Should call the name watcher when the name is changed", function () {
            $scope.name = "Lemmy Ian Kilmister";
            $scope.$digest();

            expect(nameSpy).toHaveBeenCalledWith('Lemmy Ian Kilmister', 'Lemmy Kilmister', $scope);
        });

        it("Should call the afterMethod when the name is changed", function () {
            $scope.name = "Ronnie James Dio";
            $scope.$digest();

            expect(afterMethodSpy).toHaveBeenCalledWith("Ronnie James Dio", "Lemmy Kilmister", $scope);
        });

        it("Should call the places.vacations watcher when the places.vacations is changed", function () {
            $scope.places.vacation.shift();
            $scope.$digest();

            expect(placesVacationSpy).toHaveBeenCalledWith(['Tokyo', 'Shanghai', 'Austin'], ['Rio', 'Tokyo', 'Shanghai', 'Austin'], $scope);
        });

        it("Should call the afterMethod when the places.vacations is changed", function () {
            $scope.places.vacation.push('New Orleans');
            $scope.$digest();

            expect(afterMethodSpy).toHaveBeenCalledWith(['Rio', 'Tokyo', 'Shanghai', 'Austin', 'New Orleans'], ['Rio', 'Tokyo', 'Shanghai', 'Austin'], $scope);
        });

        it("Should call the ageSpy when age is changed", function () {
            $scope.age -= 1;
            $scope.$digest();

            expect(ageSpy).toHaveBeenCalledWith(64, 65, $scope);
        });
        
        it("Should not call the afterMethod when age is changed", function () {
            $scope.age += 1;
            $scope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

        it("Should return the scope", function () {
            expect(returnedScope).toEqual($scope);
        });
    });
});
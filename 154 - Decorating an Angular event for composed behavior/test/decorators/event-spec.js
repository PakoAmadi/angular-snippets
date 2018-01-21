ddescribe("eventDecorator", function () {
    var afterMethodSpy,
        $rootScope,
        $scope,
        eventWithoutDataSpy,
        eventWithDataSpy,
        nonDecoratedEventSpy,
        eventDecorator;

    beforeEach(function () {
        afterMethodSpy = jasmine.createSpy('AfterMethod');
        eventWithoutDataSpy = jasmine.createSpy('eventWithoutData');
        eventWithDataSpy = jasmine.createSpy('eventWithData');
        nonDecoratedEventSpy = jasmine.createSpy('nonDecoratedEvent')
    });
    beforeEach(function () {
        module('app', {
            MixpanelTracker: afterMethodSpy
        });
    });
    beforeEach(inject(function (_$rootScope_, _eventDecorator_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();

        //Event
        $scope.$on('myEventWithoutData', eventWithoutDataSpy);
        $scope.$on('myNonDecoratedEvent', nonDecoratedEventSpy);
        $scope.$on('myEventWithData', eventWithDataSpy);

        eventDecorator = _eventDecorator_;
    }));

    describe("Before", function () {
        it("Should not call the afterMethod when myEventWithoutData is broadcast", function () {
            $rootScope.$broadcast('myEventWithoutData');
            $rootScope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

        it("Should not call the afterMethod when myEventWithData is broadcast", function () {
            $rootScope.$broadcast('myEventWithData', {name: 'Lemmy Kilmister'});
            $rootScope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });
    });

    describe("After", function () {
        var returnedScope;

        beforeEach(function () {
            returnedScope = eventDecorator($scope, ['myEventWithoutData', 'myEventWithData']);
        });

        it("Should call the eventWithOutData handler when myEventWithoutData is broadcast", function () {
            $rootScope.$broadcast('myEventWithoutData');
            $rootScope.$digest();

            expect(eventWithoutDataSpy).toHaveBeenCalledWith(jasmine.any(Object));
        });

        it("Should call the afterMethod when myEventWithoutData is broadcast", function () {
            $rootScope.$broadcast('myEventWithoutData');
            $rootScope.$digest();

            expect(afterMethodSpy).toHaveBeenCalledWith(jasmine.any(Object));
        });

        it("Should call the eventWithData handler when myEventWithoutData is broadcast", function () {
            $rootScope.$broadcast('myEventWithData', {name: "Kurt Vile"});
            $rootScope.$digest();

            expect(eventWithDataSpy).toHaveBeenCalledWith(jasmine.any(Object), {name: "Kurt Vile"});
        });

        it("Should call the afterMethod when myEventWithoutData is broadcast", function () {
            $rootScope.$broadcast('myEventWithData', {name: "George Romero"});
            $rootScope.$digest();

            expect(afterMethodSpy).toHaveBeenCalledWith(jasmine.any(Object), {name: "George Romero"});
        });

        it("Should call the nonDecoratedEvent handler when the event is broadcast", function () {
            $rootScope.$broadcast('myNonDecoratedEvent');
            $rootScope.$digest();

            expect(nonDecoratedEventSpy).toHaveBeenCalledWith(jasmine.any(Object));
        });

        it("Should not call the afterMethod when the non decorated event is broadcast", function () {
            $rootScope.$broadcast('myNonDecoratedEvent');
            $rootScope.$digest();

            expect(afterMethodSpy).not.toHaveBeenCalled();
        });

        it("Should return the scope", function () {
            expect(returnedScope).toEqual($scope);
        });
    });
});
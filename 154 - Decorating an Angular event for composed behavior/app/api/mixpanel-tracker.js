angular.module('app').value('MixpanelTracker', function () {
    if (arguments.length > 0) {
        //This should be tracking the event.name
        console.log("MIXPANEL FIRING: " + arguments[0].name);
        mixpanel.track(arguments[0].name);
    } else {
        throw "You have tracked an event that does not pass any arguments, check your code.";
    }
});
angular.module("store", [])
    .controller("StoreCtrl", function () {
        var store = this;
        store.message = "I'm a message from the controller";
    })
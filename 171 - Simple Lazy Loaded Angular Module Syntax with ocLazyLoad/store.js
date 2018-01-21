angular.module("store", [{
    name: "cart",
    files: ["cart/cart.js"]
}])
    .controller("StoreCtrl", function (list) {
        var store = this;
        store.message = list.items
    })
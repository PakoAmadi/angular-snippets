angular.module("store", [{
    name: "cart",
    files: ["cart/cart.js", "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.js"]
}])
    .controller("StoreCtrl", function (list) {
        var store = this;
        store.message = list.items;

        store.date = moment().format('MMMM Do YYYY, h:mm:ss a');

    })
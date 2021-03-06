var egghead = angular.module("egghead", []);

egghead.controller("AppCtrl", function () {
    var app = this;

    app.people = [{"firstName":"Sonia","lastName":"Hodges"},{"firstName":"Benedict","lastName":"Morrow"},{"firstName":"Keegan","lastName":"Fields"},{"firstName":"Jade","lastName":"Martinez"},{"firstName":"Jaquelyn","lastName":"Suarez"},{"firstName":"Leo","lastName":"Hughes"},{"firstName":"Skyler","lastName":"Sharp"},{"firstName":"Genevieve","lastName":"Villarreal"},{"firstName":"Beau","lastName":"Hendrix"},{"firstName":"Lara","lastName":"Howard"},{"firstName":"Jonah","lastName":"Crawford"},{"firstName":"Kendall","lastName":"Lane"},{"firstName":"Kimberly","lastName":"Mcclain"},{"firstName":"Ingrid","lastName":"Salinas"},{"firstName":"Moses","lastName":"Mcpherson"},{"firstName":"Britanney","lastName":"Sweeney"},{"firstName":"Patricia","lastName":"Perez"},{"firstName":"Roth","lastName":"Heath"},{"firstName":"Nora","lastName":"Osborne"},{"firstName":"Giacomo","lastName":"Shepard"}]
});

egghead.directive("debug", function ($compile) {
    return {
        terminal: true,
        priority: 1000000,
        link: function (scope, element) {
            var clone = element.clone();
            element.attr("style", "color:red");
            clone.removeAttr("debug");
            var clonedElement = $compile(clone)(scope);
            element.after(clonedElement);
        }
    }
})
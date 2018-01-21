angular.module("app", ["ui.router"]).config(function config($stateProvider) {
    $stateProvider.state("home", {url: "", templateUrl: "templates/home.html"})
});
var module;
try {
    module = angular.module("app")
} catch (e) {
    module = angular.module("app", [])
}
module.run(["$templateCache", function ($templateCache) {
    $templateCache.put("templates/home.html", "<div>\n" + "    <h1>Hello everyone</h1>\n" + "    <div>I hope you'll enjoy my web app</div>\n" + "</div>")
}]);
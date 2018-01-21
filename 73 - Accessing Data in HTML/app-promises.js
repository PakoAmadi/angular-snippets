var app = angular.module("app", []);
app.service("TodoService", function ($q, $timeout) {

    this.getTodos = function () {
        var d = $q.defer();

        $timeout(function () {
            d.resolve(
                [
                    {item: "Clean room", done: false},
                    {item: "Eat lunch", done: false},
                    {item: "Wash car", done: false}
                ]

            )
        }, 3000)

        return d.promise;
    }


    this.addTodo = function (item) {
        this.todos.push({item: item, done: false})
    }
})
app.controller("TodoCtrl", function (TodoService) {
    var todoCtrl = this;

    TodoService.getTodos().then(function (result) {
        todoCtrl.todos = result;
    });
    todoCtrl.addTodo = TodoService.addTodo;
})
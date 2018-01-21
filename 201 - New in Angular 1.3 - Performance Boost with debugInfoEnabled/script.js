angular.module("app", ["ui.router"])

    .config(function config($stateProvider, $compileProvider) {
        $stateProvider.state("home", {
            url: "",
            templateUrl: "templates/home.html"
        })

        $compileProvider.debugInfoEnabled(false);
    })

    .directive("note", function note() {
        return {
            template: "<div>{{ note.message }} {{ note.person }}</div>",
            controller: "NoteController as note",
            bindToController: true,
            scope: {
                message: "@"
            }
        }
    })

    .controller("NoteController", function NoteController() {
        var note = this;

        note.person = "John";
    })

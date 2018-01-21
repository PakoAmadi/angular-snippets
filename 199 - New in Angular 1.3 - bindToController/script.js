angular.module("app", [])

    .directive("note", function note() {
        return {
            scope: {
                message: "@"
            },
            bindToController: true,
            controller: "NoteCtrl as note",
            template: "<div>{{note.message}}</div>"
        };
    })

    .controller("NoteCtrl", function NoteCtrl() {
        var note = this;
    })

    .directive("pad", function pad() {
        return {
            scope: {
                message: "@"
            },
            bindToController: true,
            controller: "PadCtrl as pad",
            template: "<div>{{pad.message}}</div>"
        };
    })

    .controller("PadCtrl", function PadCtrl() {
        var pad = this;
    });





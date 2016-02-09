angular.module('todoApp').controller('TodoController', ['todoService', TodoController]);

function TodoController(todoService) {
    "use strict";
    todoService.todoSubject.subscribe(function (todos) {
        this.todos = todos;
    }.bind(this));

    this.addTodo = function (text) {
        var newTodo = {
            text: text,
            done: false
        };
        todoService.addTodo(newTodo);
    };

    this.deleteTodo = function (index) {
        todoService.deleteTodo(index);
    };

    this.editTodo = function () {
        todoService.editTodo();
    };
}

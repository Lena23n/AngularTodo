function TodoService() {
    "use strict";
    this.getData();
    this.todoSubject = new Rx.ReplaySubject();
    this.todoSubject.onNext(this.todos);
}

TodoService.prototype.addTodo = function add(newTodo) {
    "use strict";
    this.todos.push(newTodo);
    localStorage.todos = angular.toJson(this.todos);
    this.todoSubject.onNext(this.todos);
};

TodoService.prototype.deleteTodo = function deleteTodo(index) {
    this.todos.splice(index, 1);
    localStorage.todos = angular.toJson(this.todos);
    this.todoSubject.onNext(this.todos);
};

TodoService.prototype.getData = function () {
    this.todos = [];
    this.todos = angular.fromJson(localStorage.todos) || [];
};

TodoService.prototype.editTodo = function edit() {
    localStorage.todos = angular.toJson(this.todos);
    this.todoSubject.onNext(this.todos);
};
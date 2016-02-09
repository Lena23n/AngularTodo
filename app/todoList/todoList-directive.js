angular.module('todoApp').directive('todoList', TodoListDirective);

function TodoListDirective () {
    "use strict";
    return {
        templateUrl: 'app/todoList/todoList.html',
        controllerAs: 'todoListController',
        scope: {
            todos: '=',
            deleteItem: '&',
            editItem: '&'
        },
        controller: ['$scope', function ($scope) {
            this.todos = $scope.todos;

            this.deleteItem = function ($index) {
                $scope.deleteItem({index: $index});
            };

            this.editItem = function () {
                $scope.editItem();
            };
        }]
    };
}
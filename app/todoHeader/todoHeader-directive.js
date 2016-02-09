angular.module('todoApp').directive('todoHeader', TodoHeaderDirective);

function TodoHeaderDirective() {
    "use strict";
    return {
        templateUrl: 'app/todoHeader/todoHeader.html',
        controllerAs: 'todoNewController',
        scope: {
            add: '&'
        },
        controller: ['$scope', '$attrs', function ($scope, $attrs) {
            this.add = function add() {
                var text = this.newText;

                if (text) {
                    $scope.add({text: text});
                    this.newText = "";
                }
            };
        }]
    }
}
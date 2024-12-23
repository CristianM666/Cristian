(function (){
    'use strict';

var ShoppingList1 = [
    "Leche", "Donas", "Galletas", "Chocolate", "Peanut Butter", "Pepto Bismol", 
    "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var ShoppingList2 = [
    {
        name: "Leche", 
        quantity: "2"
    },
    {
        name: "Donas",
        quantity: "200"
    },
    {
        name: "Galletas",
        quantity: "300"
    },
    {
        name: "Chocolate",
        quantity: "5"
    }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope){
    $scope.ShoppingList1 = ShoppingList1
    $scope.ShoppingList2 = ShoppingList2
}

})();
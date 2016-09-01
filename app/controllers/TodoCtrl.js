'use strict';

app.controller('TodoCtrl', function($scope, $location) {
  $scope.items = null;

  $scope.newTask = {};

  $scope.newItem = () => {
    $location.url('/items/new');
  };

  $scope.allItem = () => {
    $location.url('/items/list');
  };

  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    $scope.newTask = {};
  };
});

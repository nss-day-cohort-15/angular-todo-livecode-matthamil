'use strict';

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location) {
  $scope.newTask = {
    assignedTo: '',
    dependencies: '',
    dueDate: '',
    isCompleted: false,
    location: '',
    task: '',
    urgency: 'normal'
  };

  $scope.addNewItem = () => {
    ItemStorage.postNewItem($scope.newTask)
      .then((data) => {
        $location.url('/items/list');
      });
  };
});

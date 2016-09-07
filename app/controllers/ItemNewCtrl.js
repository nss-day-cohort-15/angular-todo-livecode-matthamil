'use strict';

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location, AuthFactory) {
  $scope.newTask = {
    assignedTo: '',
    dependencies: '',
    dueDate: '',
    isCompleted: false,
    location: '',
    task: '',
    urgency: 'normal',
    uid: AuthFactory.getUid()
  };

  $scope.addNewItem = () => {
    ItemStorage.postNewItem($scope.newTask)
      .then((data) => {
        $location.url('/items/list');
      });
  };
});

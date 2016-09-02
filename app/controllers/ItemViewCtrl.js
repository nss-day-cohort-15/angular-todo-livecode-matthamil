'use strict';

app.controller('ItemViewCtrl', function($scope, ItemStorage, $routeParams, $location) {
  $scope.items = [];

  ItemStorage.getItemList()
    .then((itemCollectionArr) => {
      $scope.items = itemCollectionArr;

      $scope.selectedItem = $scope.items.filter(item => item.id === $routeParams.itemId)[0];
    });

  $scope.editItem = () => {
    ItemStorage.editItem($scope.selectedItem)
    .then((success) => {
      $location.url('/items/list');
    });
  };

  $scope.goBackToList = () => {
    $location.url('/items/list');
  };
});

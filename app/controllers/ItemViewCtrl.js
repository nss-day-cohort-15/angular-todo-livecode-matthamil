'use strict';

app.controller('ItemViewCtrl', function($scope, ItemStorage, $routeParams) {
  $scope.items = [];

  ItemStorage.getItemList()
    .then((itemCollectionArr) => {
      $scope.items = itemCollectionArr;

      $scope.selectedItem = $scope.items.filter(item => item.id === $routeParams.itemId)[0];
    });
});

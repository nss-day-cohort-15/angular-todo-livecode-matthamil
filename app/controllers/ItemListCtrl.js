'use strict';

app.controller('ItemListCtrl', function($scope, ItemStorage) {
  ItemStorage.getItemList()
    .then((itemCollection) => {
      $scope.items = itemCollection;
    });
});

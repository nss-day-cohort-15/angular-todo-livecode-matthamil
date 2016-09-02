'use strict';

app.controller('ItemListCtrl', function($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
    .then((itemCollectionArr) => {
      $scope.items = itemCollectionArr;
    });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
      .then((response) => {
        ItemStorage.getItemList()
          .then((itemCollectionArr) => {
            $scope.items = itemCollectionArr;
          });
      });
  };

  $scope.changeCompleted = (objWithProperties) => {
    ItemStorage.editChecked(objWithProperties)
      .then((response) => {
        ItemStorage.getItemList()
          .then((itemCollectionArr) => {
            $scope.items = itemCollectionArr;
          });
      });
  };
});

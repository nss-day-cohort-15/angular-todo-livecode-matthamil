'use strict';

app.controller('ItemListCtrl', function($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
    .then((itemCollectionArr) => {
      $scope.items = itemCollectionArr;
    });
});

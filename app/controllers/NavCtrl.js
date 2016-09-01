'use strict';

app.controller('NavCtrl', function($scope, SearchTermData, $location) {
  $scope.searchText = SearchTermData;

  $scope.navItems = [
    { name: 'Logout',    url: '#/logout' },
    { name: 'All Items', url: '#/items/list' },
    { name: 'New Items', url: '#/items/new' }
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});

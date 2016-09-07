'use strict';

app.controller('NavCtrl', function($scope, SearchTermData, $location) {
  $scope.searchText = SearchTermData;

  $scope.navItems = [
    {
      name: 'Login',
      url: '#/login',
      showState: '!$parent.isLoggedIn'
    },
    {
      name: 'Logout',
      url: '#/logout',
      showState: '$parent.isLoggedIn'
    },
    {
      name: 'All Items',
      url: '#/items/list',
      showState: '$parent.isLoggedIn'
    },
    {
      name: 'New Items',
      url: '#/items/new',
      showState: '$parent.isLoggedIn'
    }
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});

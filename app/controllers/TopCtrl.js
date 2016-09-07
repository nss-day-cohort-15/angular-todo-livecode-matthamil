'use strict';

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $scope.isLoggedIn = true;
      console.log('Current user logged in:', user.uid);
    }
    else {
      $scope.isLoggedIn = false;
      $window.location.href = '#/login';
    }
    $scope.$apply();
  });

  $scope.logout = () => {
    AuthFactory.logoutUser()
      .then((data) => {
        console.log('User logged out:', data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
});

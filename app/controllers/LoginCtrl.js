'use strict';

app.controller('LoginCtrl', function($scope, $window, AuthFactory) {
  $scope.account = {
    email: '',
    password: ''
  };

  $scope.register = () => {
    console.log('Register user');
    AuthFactory.createUser($scope.account)
      .then((userData) => {
        console.log(userData);
        $scope.login();
      }, (error) => {
        console.error('Error creating user:', error);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.login = () => {
    console.log('Login');
    AuthFactory.loginUser($scope.account)
      .then((userData) => {
        if (userData) {
          AuthFactory.setUid(userData.uid);
          $window.location.href = '#/items/list';
        }
        else {
          $window.location.href= '#/login';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
});

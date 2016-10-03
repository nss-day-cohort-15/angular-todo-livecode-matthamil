'use strict';

const app = angular.module('TodoApp', ['ngRoute'])
  .constant('FIREBASE_URL', 'https://angular-to-do-e6fcc.firebaseio.com/');

const isAuth = (AuthFactory) => new Promise((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl',
      resolve: {isAuth}
    })
    .when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl',
      resolve: {isAuth}
    })
    .when('/items/view/:itemId', {
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl',
      resolve: {isAuth}
    })
    .otherwise('/');
});

app.run(($location, FB_CREDENTIALS) => {
  const CREDENTIALS = FB_CREDENTIALS;
  const authConfig = {
    apiKey: CREDENTIALS.key,
    authDomain: CREDENTIALS.authDomain
  };
  firebase.initializeApp(authConfig);
});

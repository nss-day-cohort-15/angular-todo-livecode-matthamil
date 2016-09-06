'use strict';

app.factory('AuthFactory', ($q) => {
  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.error(error);
      });
  };
});

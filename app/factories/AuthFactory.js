'use strict';

app.factory('AuthFactory', () => {
  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.error('Error creating new user with email and password:', error);
      });
  };

  let loginUser = (userObj) => {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error) => {
        console.error('Error signing in with user:', error);
      });
  };

  return {
    createUser,
    loginUser
  };
});

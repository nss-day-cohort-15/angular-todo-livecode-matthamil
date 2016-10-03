'use strict';

app.factory('AuthFactory', ($q) => {
  let _uid;

  const setUid = (uid) => {
    _uid = uid;
  };

  const getUid = () => _uid;

  const createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.error('Error creating new user with email and password:', error);
      });
  };

  const loginUser = (userObj) => {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error) => {
        console.error('Error signing in with user:', error);
      });
  };

  const logoutUser = () => {
    return firebase.auth().signOut();
  };

  const isAuthenticated = () => firebase.auth().currentUser ? true : false;

  return {
    setUid,
    getUid,
    createUser,
    loginUser,
    logoutUser,
    isAuthenticated
  };
});

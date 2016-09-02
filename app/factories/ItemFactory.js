'use strict';

app.factory('ItemStorage', ($q, $http, FIREBASE_URL) => {
  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_URL}/items.json`)
        .success((itemObject) => {
          // Adding the keys to each object
          Object.keys(itemObject).forEach((key) => {
            itemObject[key].id = key;
            items.push(itemObject[key]);
          });
          resolve(items);
        })
        .error((error) => {
          reject(error);
        });
    });
  };

  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_URL}/items.json`, JSON.stringify(newItem))
        .success((objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error((err) => {
          reject(err);
        });
    });
  };

  return {
    getItemList,
    postNewItem
  };
});

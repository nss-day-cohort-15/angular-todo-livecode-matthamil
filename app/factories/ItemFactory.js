'use strict';

app.factory('ItemStorage', ($q, $http, FIREBASE_URL, AuthFactory) => {
  const getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_URL}/items.json?orderBy="uid"&equalTo="${AuthFactory.getUid()}"`)
        .success((itemObject) => {
          if (itemObject) {
            // Adding the keys to each object
            Object.keys(itemObject).forEach((key) => {
              itemObject[key].id = key;
              items.push(itemObject[key]);
            });
          }
          resolve(items);
        })
        .error((error) => {
          reject(error);
        });
    });
  };

  const postNewItem = (newItem) => {
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

  const deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_URL}/items/${itemId}.json`)
        .success((objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error((err) => {
          reject(err);
        });
    });
  };

  const editItem = (itemObj) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_URL}/items/${itemObj.id}.json`, JSON.stringify(itemObj))
        .success((objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error((err) => {
          reject(err);
        });
    });
  };

  const editChecked = (itemObj) => {
    return $q((resolve, reject) => {
      $http.patch(`${FIREBASE_URL}/items/${itemObj.id}.json`, JSON.stringify(itemObj))
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
    postNewItem,
    deleteItem,
    editItem,
    editChecked
  };
});

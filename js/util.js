/* Null Check */
function isNull(str) {
  if (str === null || typeof str === "undefined" || str === "" || str === 0)
    return true;
  return false;
}

/* null check To Replace default */
function nvl(ori, def) {
  if (isNull(ori)) return def;
  return ori;
}

/* Ramdom Index Create */
function createRandomIndex(params) {
  let options = Object.assign(
    {
      min: null,
      max: 10,
    },
    params
  );
  let rdIndex = Math.floor(Math.random() * options.max); //Max Index Set
  if (!isNull(options.min)) rdIndex += options.min; //Min Index Set
  return rdIndex;
}

/* Set Local Storage  */
function setStorage(key, data) {
  if (isNull(key)) return;
  //let storageData = Object.assign({}, data);
  localStorage.setItem(key, JSON.stringify(data));
}

/* Get Local Storage  */
function getStorage(key) {
  if (isNull(key)) return null;
  let storageData = localStorage.getItem(key);
  if (!isNull(storageData)) {
    storageData = JSON.parse(storageData);
  }
  return storageData;
}

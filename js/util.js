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

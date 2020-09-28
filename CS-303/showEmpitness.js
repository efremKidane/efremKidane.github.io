"use strict";
/**
 *
 * @param {object} obj is the object needs to be checked.
 * @returns {boolean} true if the object is empty and false if it is not empty.
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let obj = {};

let output = isEmpty(obj);

console.log(output);
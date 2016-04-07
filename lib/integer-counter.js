"use strict";

module.exports = function(initVal) {
  let actualVal = initVal;

  return {
    increment: () => {
      return ++actualVal;
    },
    decrement: () => {
      return --actualVal;
    },
    reset: () => {
      return actualVal = initVal;
    },
    getData: () => {
      return actualVal;
    }
  }
}

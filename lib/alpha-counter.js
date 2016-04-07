"use strict";

module.exports = function(initChar) {

  let actualChar = initChar;

  return {
    increment: () => {
      actualChar = String.fromCharCode(actualChar.charCodeAt() + 1);
      return actualChar;
    },
    decrement: () => {
      actualChar = String.fromCharCode(actualChar.charCodeAt() - 1);
      return actualChar;
    },
    toUpper: () => {
      actualChar = actualChar.toUpperCase();
      return actualChar;
    },
    toLower: () => {
      actualChar = actualChar.toLowerCase();
      return actualChar;
    },
    getData: () => {
      return actualChar;
    }
  }
}

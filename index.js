"use strict";

let IntegerCounter = require('./lib/integer-counter');
let AlphaCounter = require('./lib/alpha-counter');

module.exports = function(opt) {
  opt = opt || {};
  let possibleDataSets = ['integerCounter', 'alphaCounter'];
  let dataSetInstances = [
    IntegerCounter(opt.intInitVal || 0),
    AlphaCounter(opt.alphaInitVal || 'a')
  ];
  let actualCounter = 0;

  function switchEvent() {
    actualCounter++;
    let arrayIndex = actualCounter % possibleDataSets.length;
    return {
      dataSet: possibleDataSets[arrayIndex],
      actualValue: dataSetInstances[arrayIndex].getData()
    }
  }

  return {
    switchEvent: switchEvent,
    integerCounter: dataSetInstances[0],
    alphaCounter: dataSetInstances[1]
  }
}

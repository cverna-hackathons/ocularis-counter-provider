"use strict";

let assert = require('assert');
let Provider = require('../index');

describe('Provider interface', () => {
  describe('#constructor', () => {
    it('should correctly set up default values of counters', () => {
      let p = Provider();
      assert.equal(p.integerCounter.getData(), 0);
      assert.equal(p.alphaCounter.getData(), 'a');
    });
    it('should correctly set up counter initial values from params', () => {
      let p = Provider({
        intInitVal: 19,
        alphaInitVal: 'g'
      });
      assert.equal(p.integerCounter.getData(), 19);
      assert.equal(p.alphaCounter.getData(), 'g');
    });
  });

  describe('#switchEvent', () => {
    let p = Provider();

    it('should move to alpha counter', () => {
      let result = p.switchEvent();
      assert.equal(result.dataSet, 'alphaCounter');
      assert.equal(result.actualValue, 'a');
    });

    it('should cycle back to integer counter', () => {
      let result = p.switchEvent();
      assert.equal(result.dataSet, 'integerCounter');
      assert.equal(result.actualValue, 0);
    });
  });
});

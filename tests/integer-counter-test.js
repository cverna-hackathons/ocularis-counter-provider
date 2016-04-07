"use strict";

let assert = require('assert');
let IntegerCounter = require('../lib/integer-counter');

describe('Integer counter', () => {
  let integerCounter = IntegerCounter(10);

  describe('#increment', () => {
    it('should be 11', () => {
      assert.equal(integerCounter.increment(), 11);
    });
    it('should be 12', () => {
      assert.equal(integerCounter.increment(), 12);
    });
  });
  describe('#decrement', () => {
    it('should be 11', () => {
      assert.equal(integerCounter.decrement(), 11);
    });
  });
  describe('#reset', () => {
    it('should be 10', () => {
      assert.equal(integerCounter.reset(), 10);
    });
  })
})

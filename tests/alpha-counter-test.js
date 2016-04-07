"use strict";

let assert = require('assert');
let AlphaCounter = require('../lib/alpha-counter');

describe('alpha-counter', () => {

  describe('#increment', () => {
    let alphaCounter = AlphaCounter('a');

    it('should return "b"', () => {
      assert.equal(alphaCounter.increment(), 'b');
    });
    it('should return "c"', () => {
      assert.equal(alphaCounter.increment(), 'c');
    });
  });

  describe('#decrement', () => {
    let alphaCounter = AlphaCounter('z');

    it('should return "y"', () => {
      assert.equal(alphaCounter.decrement(), 'y');
    });
    it('should return "x"', () => {
      assert.equal(alphaCounter.decrement(), 'x');
    });
  });

  describe('#toUpper', () => {
    let alphaCounter = AlphaCounter('z');

    it('should return "Z"', () => {
      assert.equal(alphaCounter.toUpper(), 'Z');
    });

    it('should still be "Z" after multiple calls', () => {
      assert.equal(alphaCounter.toUpper(), 'Z');
    });

  });

  describe('#toLower', () => {
    let alphaCounter = AlphaCounter('Z');

    it('should return "z"', () => {
      assert.equal(alphaCounter.toLower(), 'z');
    });

    it('should still be "z" after multiple calls', () => {
      assert.equal(alphaCounter.toLower(), 'z');
    });

  });
});

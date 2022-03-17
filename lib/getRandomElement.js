"use strict";

var _ = require("lodash"),
    map = require("./map"),
    { seedPRNG } = require("./prng");


module.exports = function getRandomElement(array, seed = false) {

  let i;

  if (seed) {
    i = _.floor(map(seedPRNG(seed), 0, 1, 0, array.length - 1));
  } else {
    i = _.random(0, array.length - 1);
  }

  return array[i];
};

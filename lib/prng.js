var seedrandom = require("seedrandom");

let prng = seedrandom();

function seedPRNG(seed) {
  return seedrandom(seed).quick();
}

module.exports = { prng, seedPRNG };

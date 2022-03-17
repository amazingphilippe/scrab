'use strict';

var _ = require('lodash'),
    getRandomPunctuation = require('./getRandomPunctuation'),
    getRandomWords = require('./getRandomWords'),
    { seedPRNG } = require("./prng"),
    map = require("./map"),
    defaults;

function maybeGetSeparator(seed = _.random(1, true)) {
    if (_.floor(map(seedPRNG(seed), 0, 1, 0, 5)) === 5) {
        return getRandomPunctuation({
            middle: true,
            seed: seed
        });
    }
    return '';
}

defaults = {
    capitalizeFirst: true,
    punctuate: true,
    sentence: true
};

module.exports = function getRandomSentence(options) {

    var words, sentence;

    options = _.extend({}, defaults, options || {});

    words = getRandomWords(options);

    if (options.punctuate) {
        sentence = words.reduce(function (soFar, word) {
            return soFar + maybeGetSeparator(options.seed) + ' ' + word;
        });
    } else {
        sentence = words.join(' ');
    }

    if (options.punctuate) {
        sentence += options.scream ? '!!!' : getRandomPunctuation({
            end: true,
            seed: options.seed
        });
    }

    return sentence;

};

'use strict';

var _ = require('lodash'),
    capitalize = require('./capitalize'),
    getRandomWord = require('./getRandomWord'),
    { seedPRNG } = require("./prng"),
    map = require("./map"),
    defaults;

defaults = {
    min: 2,
    max: 8,
    capitalizeFirst: false,
    sentence: false
};

module.exports = function getRandomWords(options) {

    var numWords, wordOptions, words, i, preposition, conjunction;

    if (typeof options === 'number') {
        numWords = options;
        wordOptions = {};
    } else {
        options = _.extend({}, defaults, options || {});
        wordOptions = options;
        numWords = _.floor(map(seedPRNG(options.seed), 0, 1, options.min, options.max));
    }

    words = [];

    for (i = 0; i < numWords; i++) {

        if (options.sentence) {
            switch (_.floor(map(seedPRNG(options.seed), 0, 1, 0, 12))) {
            case 5:
                preposition = true;
                break;
            case 11:
                conjunction = true;
            }
        }

        if (options.prepositions !== undefined) {
            preposition = options.prepositions;
        }

        if (options.conjunctions !== undefined) {
            conjunction = options.conjunctions;
        }

        words.push(getRandomWord(_.extend(wordOptions, {
            preposition: preposition,
            conjunction: conjunction,
            seed: options.seed + i || _.random(1, true)
        })));

    }

    if (typeof options === 'number') {
        return words;
    }

    if (options.capitalizeFirst) {
        if (words.length > 0) {
            words[0] = capitalize(words[0]);
        }
    }

    return words;
};

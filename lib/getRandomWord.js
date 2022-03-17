'use strict';

var _ = require('lodash'),
    getRandomElement = require('./getRandomElement'),
    scream = require('./scream'),
    capitalize = require('./capitalize'),
    wordlist = require('wordlist-english'),
    prepositions = require('./prepositions.json'),
    conjunctions = require('./conjunctions.json'),
    { seedPRNG } = require("./prng"),
    dictionary,
    defaults;

dictionary = {
    common: [].concat(
        wordlist['english/10']
    ),
    lesser: [].concat(
        wordlist['english/20'],
        wordlist['english/35']
    ),
    least: [].concat(
        wordlist['english/40'],
        wordlist['english/50']
    )
};

defaults = {
    capitalize: false,
    scream: false,
};

module.exports = function getRandomWord(options) {

    var word, roll;

    options = _.extend({}, defaults, options || {});

    if (options.preposition) {
        word = getRandomElement(prepositions, options.seed);
    } else if (options.conjunction) {
        word = getRandomElement(conjunctions, options.seed);
    } else {
        roll = seedPRNG(options.seed);
        if (roll >= 0.99) {
            word = getRandomElement(dictionary.least, options.seed);
        } else if (roll >= 0.9) {
            word = getRandomElement(dictionary.lesser, options.seed);
        } else {
            word = getRandomElement(dictionary.common, options.seed);
        }
    }

    if (options.scream) {
        word = scream(word);
    } else if (options.capitalize) {
        word = capitalize(word);
    }

    return word;

};

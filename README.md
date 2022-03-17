> A fork to experiment seeding the phrase to always get deterministic results. Current status: This actually works!

# scrab

A random word and sentence generation utility.

## Install

This will install the regular unseeded package a the moment.

```bash
npm install --save scrab
```

## Usage

```javascript
var scrab = require('scrab');

console.log('My favorite word of all time is "' + scrab.word() + '".');
// => My favorite word of all time is "interpretation".

scrab.word({
    preposition: true
});
// => "off"
// => "down"

scrab.word({
    conjunction: true
});
// => "so"
// => "and"

// Capitalize the first letter of random words.
scrab.word({
    capitalize: true
});
// => "Contact"

// Get a bunch of random words.
scrab.words();
// => ["secret", "senility", "bedside", "corrupting", "was", "indicates"]

// Get totally random sentences.
scrab.sentence();
// => "Significance including budget; creates because where?"
// => "Bed perform justify emergency!""
// => "Lay: his; matter after while until.""

// Get sentences with specific criteria.
scrab.sentence({
    min: 2,
    max: 3,
    capitalize: true,
    punctuate: false
});
// => "Incline Supposedly Books"

// SCREAM!!!
scrab.sentence({
    scream: true
});
// => GRANTED DRUNKS; THEMSELVES DISCUSSES!!!
// => REPRODUCE LIMITED PROGRESSIVE SAVES, CONCRETE DOPING!!!
```

## Usage with a seed

Set seed to a number between 0 and 1. You should always get the same word, words or sentence back.

```javascript

// A word
scrab.word({
  seed: 0.69,
});
// => lifetime
// => lifetime
// => lifetime

// Words. The seed also impacts the number of words, when not specified.
scrab.words({seed: 0.42});
// => discover,excessive,connections
// => discover,excessive,connections
// => discover,excessive,connections

scrab.words({ seed: 0.99, min: 5, max: 5 });
// => coding,mistake,heat,art,patch
// => coding,mistake,heat,art,patch
// => coding,mistake,heat,art,patch

// A sentence
scrab.sentence({ seed: 0.314159, min: 8, max: 15 });
// => Tarter approved imposed within by to concerning for off behind from on along considering!
// => Tarter approved imposed within by to concerning for off behind from on along considering!
// => Tarter approved imposed within by to concerning for off behind from on along considering!
```

#!/usr/bin/env node

"use strict";

var scrab = require("../lib/scrab.js"),
  run = require("./run");

// Word

run(function () {
  scrab.word();
});

run(function () {
  scrab.word({
    capitalize: true,
  });
});

run(function () {
  scrab.word({
    scream: true,
  });
});

run(function () {
  scrab.word({
    seed: 0.69,
  });
});

run(function () {
  scrab.word({
    preposition: true,
  });
});

run(function () {
  scrab.word({
    conjunction: true,
  });
});

// Words

run(function () {
  scrab.words();
});

run(function () {
  scrab.words({seed: 0.42});
});

run(function () {
  scrab.words({
    min: 1,
    max: 2,
  });
});

run(function () {
  scrab.words({
    capitalize: true,
  });
});

run(function () {
  scrab.words({
    capitalizeFirst: true,
  });
});

run(function () {
  scrab.words({
    scream: true,
  });
});

// Sentence

run(function () {
  scrab.sentence();
});

run(function () {
  scrab.sentence({ seed: 0.314159, min: 8, max: 15 });
});

run(function () {
  scrab.sentence({
    min: 1,
    max: 2,
  });
});

run(function () {
  scrab.sentence({
    capitalize: true,
  });
});

run(function () {
  scrab.sentence({
    scream: true,
  });
});

run(function () {
  scrab.sentence({
    punctuate: false,
  });
});

run(function () {
  scrab.sentence({
    capitalizeFirst: false,
  });
});

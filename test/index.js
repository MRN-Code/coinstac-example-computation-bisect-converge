'use strict';

const path = require('path');
const sim = require('coinstac-simulator');
const noop = require('lodash/noop');

const declaration = path.resolve(__dirname, './declaration');
sim.setup(declaration, (err) => {
  if (err) { throw err; }
  sim.teardown(noop); // waits for test to complete
});

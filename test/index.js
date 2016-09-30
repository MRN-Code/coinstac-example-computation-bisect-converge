'use strict';

const coinstacSimulator = require('coinstac-simulator');
const path = require('path');

/* eslint-disable no-console */
coinstacSimulator.run(path.join(__dirname, 'declaration.js'))
  .then(() => console.log('done'))
  .catch(error => console.error(error));
/* eslint-enable no-console */


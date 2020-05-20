/**
 * For some reason a weird character shows up in
 * el_greek.js when json-to-js runs.
 * This script is a workaround.
 */

const fs = require('fs');

fs.copyFileSync('./data/bibles/el_greek.safe.js', './data/bibles/el_greek.js');
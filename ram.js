'use strict';
const name = 'ram';
const central = require('./central');

function ram() {
  central.add(name, {top: '100%'});
  return name;
}

module.exports = ram;

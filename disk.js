'use strict';
const name = 'disk';
const central = require('./central');

function disk() {
  central.add(name, {disk: '20%'});
  return name;
}

module.exports = disk;

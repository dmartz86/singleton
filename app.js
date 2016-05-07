const ram = require('./ram');
const disk = require('./disk');
const central = require('./central');
const log = console.log;
const results = [];

// play
log(central.list());
results.push(ram());
log(central.list());
results.push(disk());
log(central.list());

// clean
results.map(r => central.del(r));
log(central.list());

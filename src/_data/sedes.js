const events = require('./events.json');

module.exports = [...new Set(events.map(e => e.sede))];

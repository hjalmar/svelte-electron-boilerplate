const applicationHandlers = require('./ipc-handlers/application.js');

module.exports = (app, win) => {
  applicationHandlers(app, win);
}
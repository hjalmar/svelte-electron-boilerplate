const { contextBridge } = require('electron');
const applicationMethods = require('./ipc-methods/application.js');

// are we in electron? only available in node context
// export const isElectron = process.versions.hasOwnProperty('electron');

// expose electron functions globally through contextBridge
contextBridge.exposeInMainWorld('electron', {
  ...applicationMethods
});
const path = require('path');

const config = {
  // app root directives. Dependeing on how you build run or view the app
  // it all falls under different directories. electron-builder by default 
  // have asar enabled so unless personally changed leave this config as is
  asar: true, // have this match your build configs asar
  asarRoot: './public',
  buildRoot: '../app/public',
  webRoot: '../frontend-app/public',
  // extended configuration
  disableVsync: false,
  showMenu: false,
  // override devtools cli argument
  overrideDevTools: false,
  disable_x_frame: false,
  // electron browserwindow settings
  // https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
  electron: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 1280,
    height: 850,
    minWidth: 1100,
    minHeight: 650,
    titleBarStyle: 'hidden',
    frame: false,
    // NOTE: hasShadow is only mac option?
    hasShadow: true,
    // NOTE: if transparent is set to 'true' the isMaximized() will always return false(windows only??) https://github.com/electron/electron/issues/9092
    transparent: false,
    resizable: true,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      // nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
  }
};

module.exports = config;
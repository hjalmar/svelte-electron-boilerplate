// modules to control application life and create native browser window
const { protocol, app, BrowserWindow, session, ipcMain } = require('electron');
// utils
const url = require('url');
const path = require('path');
// external config
const config = require('./config.js');

const argv = process.argv.slice(2);
const production = !argv.find(_ => _ === '--dev');
const devTools = !argv.find(_ => _ === '--devtools');

// disable vsync??
if(config.disableVsync){
  app.commandLine.appendSwitch('disable-frame-rate-limit');
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow(){
  // intercept the file protocol so we can load the web-app and electron-app 
  // from the same relative path, be it web, build with/without asar bundle
  let WEB_FOLDER = config.webRoot;
  if(production){
    WEB_FOLDER = config.asar ? config.asarRoot : config.buildRoot;
  }
  const PROTOCOL = 'file';
  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    // Strip protocol
    let url = request.url.substr(PROTOCOL.length + 1);
    // Build complete path for node require function
    url = path.join(__dirname, WEB_FOLDER, url);
    // Replace backslashes by forward slashes (windows)
    // url = url.replace(/\\/g, '/');
    url = path.normalize(url);
    callback({path: url});
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    ...config.electron
  });

  // Open the DevTools.
  if(config.overrideDevTools || !devTools){
    mainWindow.webContents.openDevTools();
  }
  
  // We set a intercept on incoming requests to disable x-frame-options headers.
  mainWindow.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] }, (details, callback) => {
    
    // disable x-frame to be able to load external pages in an iframe
    if(config.disable_x_frame){
      if(details.responseHeaders['X-Frame-Options']){
        delete details.responseHeaders['X-Frame-Options'];
      }else if(details.responseHeaders['x-frame-options']){
        delete details.responseHeaders['x-frame-options'];
      }
    } 

    // update the header
    callback({
      cancel: false, 
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['default-src \'none\'']
      }
    });
  });

  // remove menu
  if(!config.showMenu){
    mainWindow.setMenu(null);
  }

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: PROTOCOL + ':',
    slashes: true
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', function (){
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // create the window
  createWindow();
  // include the ipc calls and bindings
  require('./ipc.js')(app, mainWindow);
});

// app.on('maximize', () => {console.log('maximize');});
// app.on('unmaximize', () => {console.log('unmaximize');});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});
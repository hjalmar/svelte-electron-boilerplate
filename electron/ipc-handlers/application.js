const { ipcMain: ipc, dialog } = require('electron');
const shell = require('electron').shell;

/*
  No need to wrap functions that don't use the app or win object in the module export 
*/
// handle external links
ipc.handle('external-link', (event, href) => shell.openExternal(href));

// ipc calls that requires the app and window object. 
module.exports = (app, win) => {
  // screen toggles 
  ipc.handle('toggle-fullscreen', () => win.setFullScreen(!win.isFullScreen()));
  ipc.handle('app-minimize', () => win.minimize());
  ipc.handle('app-maximize', () => {
    // first handle if we are in fullscreen
    if(win.isFullScreen()){
      win.setFullScreen(false);
      return;
    }
    if(win.isMaximized()){
      win.unmaximize();
    }else{
      win.maximize();
    }
  });
  
  // close application
  ipc.handle('app-quit', _ => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if(process.platform !== 'darwin'){
      app.quit();
    }
  });
}
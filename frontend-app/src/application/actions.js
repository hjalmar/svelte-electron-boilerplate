import ActionsManager from '~/application/ActionsManager.js';

// electron only actions 
if(globalThis.electron){
  ActionsManager.register('close_window', _ => globalThis.electron.quit());
  ActionsManager.register('minimize_window', _ => globalThis.electron.minimize());
  ActionsManager.register('maximize_window', _ => globalThis.electron.maximize());
  ActionsManager.register('toggle_fullscreen_window', _ => globalThis.electron.toggleFullscreen());
  // external links
  ActionsManager.register('external_link', href => globalThis.electron.externalLink(href));
}

// webapp only actions
if(!globalThis.electron){
  ActionsManager.register('toggle_fullscreen_window', () => {
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  });
}


// actions for both applications
ActionsManager.register('toggle_theme', _ => document.documentElement.dataset.theme = document.documentElement.dataset.theme == 'dark' ? 'light' : 'dark');
ActionsManager.register('light_theme', _ => document.documentElement.dataset.theme = 'light');
ActionsManager.register('dark_theme', _ => document.documentElement.dataset.theme = 'dark');

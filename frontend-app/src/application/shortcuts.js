import ActionsManager from "./ActionsManager.js";
import ShortcutsManager from 'hotkeys-manager';

// shortcuts manager 
export const shortcuts = new ShortcutsManager(window, {
  // once: false,
});

// subscribe to events
const unsubscribe = shortcuts.subscribe(({ e, Hotkey, on }) => {
  e.preventDefault();
  if(on && Hotkey.data && ActionsManager.exist(Hotkey.data)){
    ActionsManager.execute(Hotkey.data);
  }
});

// global commands
// toggle fullscreen on f11 and altleft + enter combo. 
shortcuts.set(['f11'], { data: ActionsManager.action('toggle_fullscreen_window') });
shortcuts.set(['altleft', 'enter'], { data: ActionsManager.action('toggle_fullscreen_window') });

// enable certain groups
// shortcuts.enableGroups(
//   '*',
//   'global',
//   'project', 
// );
// shortcuts.enableAllGroups();
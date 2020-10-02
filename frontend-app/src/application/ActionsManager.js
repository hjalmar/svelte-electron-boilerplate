import { EnumerableList, Enum } from 'enums-manager';

export class ActionsManager{
  constructor(...actions){
    // define
    this.__actions = this.define(...actions);
    this.__binds = new Map();
  }
  define(...args){
    return new EnumerableList(...args);
  }
  action(key){
    return this.__actions.get(key);
  }
  register(k, f){
    if(typeof k === 'string'){
      this.register(this.action(k), f);
      return;
    }
    if(!(k instanceof Enum)){
      throw new Error(`Invalid key value. Expecting instance of 'Enum'`);
    }
    if(this.__binds.has(k)){
      throw new Error(`Action already defined : [${k}]`);
    }
    if(typeof f !== 'function'){
      throw new Error(`Invalid callback function`);
    }
    this.__binds.set(k, f);
  }
  exist(value){
    return this.__binds.has(value);
  }
  call(k, ...args){
    if(typeof k === 'string'){
      this.call(this.action(k), ...args);
      return;
    }
    if(!(k instanceof Enum)){
      throw new Error(`Invalid key. Expecting 'Enum'`);
    }
    
    if(!this.__binds.has(k)){
      throw new Error(`Action for '${k}' does not exist`);
    }
    // handle promises to allow for chaining
    return new Promise((resolve, reject) => {
      try{
        resolve(this.__binds.get(k).call(null, ...args));
      }catch(error){
        reject(error.message);
      }
    });
  }
  execute(...args){
    return this.call(...args);
  }
}

// create actions
const actions = new ActionsManager(
  'noop', // a blank command
  // application
  'close_window',
  'minimize_window',
  'maximize_window',
  'toggle_fullscreen_window',
  'external_link',
  // themes
  'toggle_theme',
  'light_theme',
  'dark_theme',
);

export default actions;
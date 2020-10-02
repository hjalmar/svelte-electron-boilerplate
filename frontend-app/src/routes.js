// libraries
import Router, { router, location as RouterLocation } from 'svelte-standalone-router';

// stores
import { title } from '~/stores/application.js';

// either export the Router component here or simply get it from the library 
// where you want to inject the Router component 
// export default Router;

// pages
import Home from "~/pages/home.svelte";
import About from "~/pages/about.svelte";
import Error from "~/pages/error.svelte";

// windows specific configurations
// NOTE: target windows specific system. Is there a more reliable solution to that?
// could this confict with macos/linux dists?
const win = location.pathname.match(/^(\/[a-z]\:)/i);
const base = win ? win[1] : '/';

// create and initialize router
export const app = router({
  initial: globalThis.electron ? base : location.pathname,
  base
});

// general error catch
app.catch((req, res) => {
  title.update(title => {
    return 'Error | Page Not Found';
  });
  res.send(Error, {slug: req.path});
});

// NOTE: this might not be an ideal solution to tackle the fact that windows have a drive letter prefix in the filepath. 
// so the location in the electron app would be `/C:/route` and not simply `/route`. Since it's my own router i've contemplated on 
// if that is it's responsibility or not. For now the conclusion is that it's in the users own hands to handle it themselves. 
// This solution works but could be seen as a hacky workaround and an unneeded call to the store.
if(globalThis.electron){
  app.use((req, res, next) => {
    RouterLocation.set(location.pathname.split(base)[1]);
    next();
  });
}

// handle dynamic title through slugs
app.use((req, res, next) => {
  title.update(title => 'Svelte Electron Boilerplate ' + (req.params && req.params.slug ? '| ' + req.params.slug : ''));
  next();
});

// project routes
app.get('/', (req, res) => res.send(Home));
app.get('/:slug->about', (req, res) => res.send(About, {...req.params}));

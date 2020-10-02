import '~/routes';
import '~/application/actions.js';
import '~/application/shortcuts.js';

// initialize svelte
import Init from './Init.svelte';
const app = new Init({
  target: document.querySelector('body')
});

export default app;
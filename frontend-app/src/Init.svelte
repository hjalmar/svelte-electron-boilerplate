<script>
  import { onMount } from 'svelte';
  import { redirect } from 'svelte-standalone-router';

  import { title } from '~/stores/application.js';

  import App from './App.svelte';  

  onMount(() => {
    // electron specific initializations
    if(globalThis.electron){
      // if we are in electron context add a class to the body element
      // of electron to be able to distinguish between webapp and electron
      document.body.classList.add('electron');  
      // we only want to redirect on an electron application
      // this only if you need to get the correct location of the startup page 
      // since the initial pathname is the filepath to the local file and not '/' as we expect.
      redirect('/');
    }
  });
</script>
<svelte:head>
  <title>{$title}</title>
  <!-- during development we want to inject liverealod. so we set this csp here so electron doesn't complain -->
  <!-- could scripts from other source be executed before? maybe, probably, but whatever. Maybe should be removed all together since livereload is not bundled on build? -->
  <meta http-equiv="Content-Security-Policy" content="script-src 'self'">
</svelte:head>

<App {...$$props} />
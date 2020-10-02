<script>
  import Windowbuttons from '~/components/windowbuttons.svelte';
  
  import Nav from './nav.svelte';

  // export let fileMenu = [];
</script>
<header id="titlebar">
  <div class="title app-region">Electron template</div>
  <div>
    {#if globalThis.electron}
      <Windowbuttons />
    {/if}
  </div>
  <Nav />
</header>
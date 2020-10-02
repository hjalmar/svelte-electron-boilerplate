<script>
  import Router from 'svelte-standalone-router';
  import Titlebar from '~/components/titlebar.svelte';
</script>
<div id="app">
  <Titlebar />
  <main>
    <div id="main-content">
      <Router />
    </div>
  </main>
</div>

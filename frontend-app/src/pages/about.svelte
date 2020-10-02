<script>
  import { navigate } from 'svelte-standalone-router';
  export let slug = '';
</script>

<section>
  <h1>Hello! you have visited the page `{slug}`</h1>
  <p>
    This is a placeholder subpage showing the router implementation for handling additional routes.
  </p>
  <p>
    Logos and icons used in this boilerplate is my personal brand. Use them as references to change to your own custom icons 
    more suitable for your own application.
  </p>
  <p>
    <button class="button" on:click={_ => navigate('/')}>Go back home</button>
  </p>
  
</section>
<script>
  import { link } from 'svelte-standalone-router';
  export let slug = '';
</script>
<section>
  <h1>404 Page does not exist ({slug})</h1>
  <p>
    You've visited an invalid url. <a href="/" use:link>Go back home</a>
  </p>
</section>

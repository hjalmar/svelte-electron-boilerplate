<script>
  import ActionsManager from '~/application/ActionsManager.js';
  const { href } = $$props;
</script>
{#if !globalThis.electron}
  <a href="/" {...$$props}><slot/></a>
{:else}
  <a href="/" {...$$props} on:click|preventDefault={_ => ActionsManager.execute('external_link', href)}><slot/></a>
{/if}
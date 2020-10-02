<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  let show = false;
  onMount(() => {
    show = true;
  });
</script>
{#if show}
  <div in:fly={{x: -300, duration: 600}} out:fly={{y: -50, duration: 200}}><slot></slot></div>
  <!-- <div in:fade={{delay: 1000, duration: 1000}} out:fade={{duration: 1000}}><slot></slot></div> -->
  <!-- <div><slot></slot></div> -->
{/if}
<style>
  div{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
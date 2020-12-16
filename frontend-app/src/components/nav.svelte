<script>
  import { onDestroy, onMount } from 'svelte';
  import { link } from 'svelte-standalone-router';

  import ActionsManager from '~/application/ActionsManager.js';
  
  import External from '~/components/external.svelte';

  // Could we clean this up a bit? or simply just not bother?
  let isActive = false;
  let topLevelElements = [];
  let childElements = [];
  const clearActive = (e) => {
    topLevelElements.forEach(_ => _.classList.remove('show'));
    isActive = false;
  }
  window.addEventListener('click', clearActive);

  // toplevel handlers
  const toplevelClickHandler = e => {
    e.stopPropagation();
    // NOTE: this will toggle active menu and close menu if a sublink is clicked as well
    isActive = !isActive;
    e.currentTarget.classList.toggle('show');
  };
  const toplevelOverHandler = e => {
    topLevelElements.forEach(_ => _.classList.remove('show'));
    if(isActive){
      e.currentTarget.classList.add('show');
    }
  };

  onMount(() => {
    // top level menu
    topLevelElements = document.querySelectorAll('nav > ul > li');
    topLevelElements.forEach(li => li.addEventListener('click', toplevelClickHandler));
    topLevelElements.forEach(li => li.addEventListener('mouseover', toplevelOverHandler));
  });

  onDestroy(() => {
    // clear active 
    window.removeEventListener('click', clearActive);
    // clear toplevel
    topLevelElements.forEach(li => li.removeEventListener('click', toplevelClickHandler));
    topLevelElements.forEach(li => li.removeEventListener('mouseover', toplevelOverHandler));
  });
</script>

<nav id="main-nav" class="no-drag">
  <ul>
    <li class:show={false}>
      <span>file</span>
      <ul>
        <li>
          <span>pages</span>
          <ul>
            <li><a href="/" use:link>home</a></li>
            <li><a href="/about" use:link>about</a></li>
            <li><a href="/error-page" use:link>error page</a></li>
          </ul>
        </li>
        {#if globalThis.electron}
          <li>
            <a href="/" on:click|preventDefault={_ => ActionsManager.execute('close_window')}>quit</a>
          </li>
        {/if}
        </ul>
    </li>
    <li>
      <span>edit</span>
      <ul>
        <li>
          <span>themes</span>
          <ul>
            <li><a href="/" on:click|preventDefault={_ => ActionsManager.execute('light_theme')}>light</a></li>
            <li><a href="/" on:click|preventDefault={_ => ActionsManager.execute('dark_theme')}>dark</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <span>help</span>
      <ul>
        <li><External href="https://github.com/hjalmar/svelte-electron-boilerplate">Visit github page</External></li>
      </ul>
    </li>
  </ul>
</nav>
<script>
  import { navigate } from 'svelte-standalone-router';
  import External from '~/components/external.svelte';
</script>

<section>
  <h1>Hi! Welcome to the Electron boilerplate application</h1>
  <p>
    This boilerplate project is based around <em>node</em>, <em>electron</em> and <em>svelte</em>. It is set up around the idea 
    of an <em>actions manager</em> and a centralized way of executing tasks. While it's not required, executing actions is a way to avoid tightly coupling 
    of components and redundency. Instead of hardcoding the same functionality around different parts of the application, you instead execute the centralized action.
  </p>
  <p>
    This boilerplate also includes configuration and libraries that include <em>electron-builder</em>, <em>hotkeys manager</em>, <em>routing</em>, <em>ipc calls</em> 
    to perform those native tasks, and more.
  </p>
  <h2>External browser links</h2>
  <p>
    In a webbapplication linking to an external page is pretty straightforward, but in an electron application it's not. 
    This boilerplate comes with a custom component to handle such cases.
  </p>
  <p>
    <External href="https://example.com">example.com</External>
  </p>
  <h2>Application hotkeys</h2>
  <p>
    Hotkeys is essential for that native feel and smooth intuitive interaction with the ui. 
    Out of the box you can test the hotkeys manager simply by pressing <em>F11</em> or <em>AltLeft + Enter</em>
    to toggle the applications fullscreen state.
  </p>
  <h2>Support</h2>
  <p>
    Open source in all it's glory is amazing and I personally love to share the knowledge I've accumulated over my years programming 
    and doing webdevelopment. A small tip helps greatly to incentivize having packages up to date and the tools and services sometimes 
    needed to be able to do so. While it's 100% not required, if you find this project beneficial to you and your work, any contribution 
    would be highly appreciated.
  <p>
    <External class="button" href="https://www.paypal.com/donate?hosted_button_id=N7CCZ2K5L2GV6">Tip on paypal</External>
  </p>
  <p>
    Additional support like bug reporting and feature requests are also highly encouraged. Do so in respective 
    package repository that it may concern. Cheers!
  </p>
  <p>
    <External class="button" href="https://github.com/hjalmar">github.com/hjalmar</External>
  </p>
</section>

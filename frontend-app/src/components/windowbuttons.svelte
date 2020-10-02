<script>
  import ActionsManager from '~/application/ActionsManager.js';
  const windowCommand = (command) => ActionsManager.execute(`${command}_window`);
</script>

<div id="windowbuttons">
  <button class="minimize" on:click|preventDefault={_ => windowCommand('minimize')}>minimize</button>
  <button class="maximize" on:click|preventDefault={_ => windowCommand('maximize')}>maximize</button>
  <button class="close" on:click|preventDefault={_ => windowCommand('close')}>close</button>
</div>
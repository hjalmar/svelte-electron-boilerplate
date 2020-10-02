<script>
  export let change = _ => _;
</script>
<div class="switch-button">
  <input type="checkbox" id="cbx" style="display:none" on:change={change} />
  <label for="cbx" class="toggle"><span></span></label>    
</div>

<style>
  .toggle{
    position: relative;
    display: block;
    width: 42px;
    height: 24px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
  }
  .toggle:before{
    content: "";
    position: relative;
    top: 1px;
    left: 1px;
    width: 40px;
    height: 22px;
    display: block;
    background: rgba(0, 0, 0, 0.295);
    border-radius: 12px;
    transition: background 0.2s ease;
  }
  .toggle span{
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    display: block;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(154,153,153,0.75);
    transition: all 0.2s ease;
  }

  #cbx:checked + .toggle:before{
    background: var(--accent-color);
  }
  #cbx:checked + .toggle span {
    transform: translateX(18px);
  }
</style>
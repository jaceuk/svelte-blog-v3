<script>
  import moon from '@images/moon.svg';
</script>

<div class="panel">
  <div class="content">
    <slot />
  </div>
  <img class="moon" src={moon} alt="" />
</div>

<style>
  .panel {
    padding: var(--size-extra-large);
  }

  .moon {
    top: -152px;
  }
</style>

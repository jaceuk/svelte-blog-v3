<script>
  import moon from '@images/moon.svg';
</script>

<div class="panel">
  <div class="content">
    <slot />
  </div>
  <img class="moon" src={moon} alt="" />
</div>

<style lang="scss">
  .panel {
    padding: var(--size-extra-large);

    @media (max-width: 820px) {
      padding: var(--size-large) var(--size-medium);
    }
  }

  .moon {
    top: -192px;
  }
</style>

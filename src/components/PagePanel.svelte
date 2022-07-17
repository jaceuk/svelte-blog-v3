<script>
  import moon from '@images/moon.svg';
</script>

<section class="panel">
  <div class="content">
    <slot />
  </div>
  <img class="moon" src={moon} alt="" />
</section>

<style lang="scss">
  .panel {
    padding: var(--size-extra-large);

    @media (max-width: 900px) {
      padding: var(--size-large) var(--size-medium);
    }
  }

  .moon {
    top: -192px;
  }
</style>

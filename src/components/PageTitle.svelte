<script lang="ts">
  import moon from '@images/moon.svg';
</script>

<div class="title-container">
  <div class="title">
    <h1><slot /></h1>
  </div>
</div>

<img class="moon" src={moon} alt="" />

<style>
  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .title-container {
    margin: var(--size-medium) 0;
    max-width: 650px;
  }

  .moon {
    filter: grayscale(1);
    position: absolute;
    bottom: -391px;
    right: -56px;
    z-index: 10;
  }
</style>

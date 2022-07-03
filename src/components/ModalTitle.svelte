<script lang="ts">
  import moon from '@images/moon.svg';
</script>

<header class="panel">
  <div class="title-container">
    <div class="title">
      <div class="h3"><slot name="type" /></div>
      <h1><slot /></h1>
    </div>
  </div>

  <img class="moon" src={moon} alt="" />
</header>

<style>
  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .h3 {
    text-transform: uppercase;
  }

  .title-container {
    margin: var(--size-large) 0;
    max-width: 1000px;
    z-index: 20;
    position: relative;
  }

  .moon {
    filter: grayscale(1);
    position: absolute;
    bottom: -351px;
    right: -56px;
    z-index: 10;
  }
</style>

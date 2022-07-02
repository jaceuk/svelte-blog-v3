<script lang="ts">
  import moon from '@images/moon.svg';
</script>

<header class="panel">
  <div class="title-container">
    <div class="title">
      <h1><slot /></h1>
    </div>
  </div>

  <img class="moon" src={moon} alt="" />
</header>

<style>
  .panel {
    padding-top: 129px;
  }

  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .title-container {
    margin: var(--size-medium) 0 var(--size-large) 0;
    max-width: 1000px;
    z-index: 20;
    position: relative;
  }

  .moon {
    filter: grayscale(1);
    position: absolute;
    bottom: -391px;
    right: -56px;
    z-index: 10;
  }
</style>

<script lang="ts">
  import moon from '@images/moon.svg';

  export let type = '';
  export let subtitle = '';
</script>

<header class="panel">
  <div class="title-container">
    <div class="title">
      {#if type}
        <div class="h3 type">{type}</div>
      {/if}
      <h1><slot /></h1>
      <slot name="subtitle" />
      {#if subtitle}
        <div class="h3">{subtitle}</div>
      {/if}
    </div>
  </div>

  <img class="moon" src={moon} alt="" />
</header>

<style lang="scss">
  .type {
    text-transform: uppercase;
  }

  .panel {
    padding-top: 129px;
  }

  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding: 0 var(--size-medium) 0 calc(var(--size-extra-large) - 8px);

    @media (max-width: 820px) {
      padding: 0 var(--size-base) 0 calc(var(--size-medium) - 8px);
    }
  }

  .title-container {
    margin: var(--size-medium) 0;
    max-width: 1000px;
    z-index: 20;
    position: relative;
  }

  .moon {
    bottom: -351px;
  }
</style>

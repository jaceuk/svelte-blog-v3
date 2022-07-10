<script lang="ts">
  import moon from '@images/moon.svg';
  import Transition from '@components/Transition.svelte';

  export let type = '';
  export let subtitle = '';
</script>

<header class="panel">
  <div class="title-container">
    <Transition>
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
    </Transition>
  </div>

  <img class="moon" src={moon} alt="" />
</header>

<style lang="scss">
  .type {
    text-transform: uppercase;
  }

  .panel {
    padding-top: 129px;

    @media (max-width: 900px) {
      padding-top: 100px;
    }
  }

  .title {
    border-left: 8px solid var(--color-accent);
    padding: 0 var(--size-medium) 0 calc(var(--size-extra-large) - 8px);

    @media (max-width: 900px) {
      padding: 0 var(--size-base) 0 calc(var(--size-medium) - 8px);
    }
  }

  .title-container {
    margin: var(--size-medium) 0 var(--size-large) 0;
    max-width: 1000px;
    z-index: 20;
    position: relative;
  }

  .moon {
    bottom: -351px;
  }
</style>

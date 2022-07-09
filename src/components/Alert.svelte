<script lang="ts">
  import Checked from '@components/svgs/Checked.svelte';
  import Warning from '@components/svgs/Warning.svelte';

  export let type: string;
</script>

<div class="container {type}" role={type === 'error' ? 'alert' : undefined}>
  <div class="icon-container">
    {#if type === 'success'}
      <Checked />
    {/if}

    {#if type === 'error'}
      <Warning />
    {/if}
  </div>
  <div class="text-container"><slot /></div>
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: var(--size-base);
    align-items: flex-start;
    font-weight: var(--font-weight-bold);
    padding: var(--size-base);
    color: var(--color-text);
    border-radius: var(--border-radius-small);
    background-color: transparent;

    &.success {
      color: var(--color-good);
      border: 2px solid var(--color-good);

      .icon-container {
        color: var(--color-good);
      }
    }

    &.error {
      color: var(--color-poor);
      border: 2px solid var(--color-poor);

      .icon-container {
        color: var(--color-poor);
      }
    }

    .icon-container {
      padding-top: var(--size-small);
    }

    .text-container {
      min-height: 40px;
      display: flex;
      align-items: center;
    }
  }
</style>

<script context="module" lang="ts">
  interface ILoad {
    status: number;
    error: {
      message: string;
    };
  }

  export function load({ status, error }: ILoad) {
    return {
      props: {
        status,
        message: error.message,
      },
    };
  }
</script>

<script lang="ts">
  import PagePanel from '@components/PagePanel.svelte';
  import PageHeader from '@components/PageHeader.svelte';

  export let status: number;
  export let message: string;
</script>

<PageHeader>
  {#if status == 404}
    Error 404
  {:else}
    Error 500
  {/if}
</PageHeader>

<PagePanel>
  <div class="container">
    {#if status === 404}
      <h2>This is not the page you're looking for.</h2>
    {:else}
      <h2>There has been a disturbance in the force.</h2>
    {/if}
  </div>
</PagePanel>

<style lang="scss">
  .container {
    max-width: 800px;
    display: flex;
    gap: var(--size-large);
    flex-direction: column;
  }
</style>

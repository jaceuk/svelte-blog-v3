<script lang="ts">
  import { Shadow } from 'svelte-loading-spinners';
</script>

<div class="container">
  <Shadow size={30} color="#FFFFFF" />
  <slot />
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: var(--size-medium);
    align-items: center;
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-bold);
    margin: var(--size-base);
    color: var(--color-white);
    text-align: center;
    margin-top: var(--size-large);

    @media (max-width: 900px) {
      flex-direction: column;
      padding: var(--size-base);
      border-radius: var(--border-radius-medium);
      font-size: var(--font-size-h3);
    }
  }
</style>

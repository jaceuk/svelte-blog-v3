<script lang="ts">
  export let type: string;
</script>

<div class={`tag ${type}`}>
  <slot />
</div>

<style lang="scss">
  .tag {
    padding: var(--size-base) var(--size-medium);
    border-radius: var(--border-radius-small);
    background: var(--color-tag-primary);

    &.secondary {
      background: var(--color-tag-secondary);
    }
  }
</style>

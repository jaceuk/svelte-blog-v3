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
    background: rgba(255, 153, 0, 0.1);

    &.secondary {
      background: rgba(255, 255, 255, 0.05);
    }
  }
</style>

<script lang="ts">
  export let text = '';
  export let href: string;
  export let disabled = false;
  export let label = '';
  export let type = '';
</script>

<a {href} class:more={type} aria-disabled={disabled} aria-label={label}>{text}<slot /></a>

<style lang="scss">
  a {
    background: var(--color-white);
    color: var(--color-nearly-black);
    border-radius: var(--border-radius-super);
    padding: var(--size-base) var(--size-medium);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    box-shadow: var(--card-box-shadow);
    transition: var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--size-small);
    text-decoration: none;
    width: fit-content;
    display: flex;
    align-items: center;
    margin-top: auto;

    &:hover {
      background: var(--color-black);
      color: var(--color-white);
    }

    &[aria-disabled='true'] {
      cursor: default;
      opacity: 0.2;
      pointer-events: none;

      &:hover,
      &:focus {
        background-color: var(--color-white);
        color: var(--color-nearly-black);
      }
    }

    &.more {
      border-radius: none;
      background-color: transparent;
      color: var(--color-orange);
      box-shadow: none;
      padding: 0;

      &:hover,
      &:focus {
        color: var(--color-white);
      }
    }
  }
</style>

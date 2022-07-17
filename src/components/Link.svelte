<script lang="ts">
  export let href: string;
  export let disabled = false;
  export let ariaLabel: string | undefined = undefined;
  export let target = '';
</script>

<a {href} aria-disabled={disabled} aria-label={ariaLabel} {target}><slot /></a>

<style lang="scss">
  a {
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    transition: var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--size-small);
    text-decoration: none;
    width: fit-content;
    display: flex;
    align-items: center;
    margin-top: auto;
    border-radius: none;
    background-color: transparent;
    color: var(--color-accent);
    box-shadow: none;
    padding: 0;

    &:hover,
    &:focus {
      color: var(--color-link-hover);
    }

    &[aria-disabled='true'] {
      cursor: default;
      opacity: 0.2;
      pointer-events: none;

      &:hover,
      &:focus {
        background-color: var(--color-text);
        color: var(--color-nearly-black);
      }
    }
  }
</style>

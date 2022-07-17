<script lang="ts">
  export let handleClick: () => void;
  export let type = '';
  export let ariaLabel: string | undefined = undefined;
</script>

<button aria-label={ariaLabel} class:link={type === 'link'} class:icon={type === 'icon'} on:click={handleClick}
  ><slot /></button
>

<style lang="scss">
  button {
    background: var(--color-white);
    color: var(--color-nearly-black);
    border-radius: var(--border-radius-super);
    padding: var(--size-base) var(--size-medium);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-nearly-black);
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

    &:hover {
      background: var(--color-black);
      color: var(--color-white);
    }

    &.link {
      border-radius: none;
      background-color: transparent;
      color: var(--color-accent);
      box-shadow: none;
      padding: 0;
      border: none;

      &:hover,
      &:focus {
        color: var(--color-link-hover);
      }
    }

    &.icon {
      border-radius: 0;
      background-color: transparent;
      color: var(--color-text);
      box-shadow: none;
      padding: var(--size-base);
      border: none;

      &:hover,
      &:focus {
        color: var(--color-link-hover);
      }
    }
  }
</style>

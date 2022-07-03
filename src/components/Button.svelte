<script lang="ts">
  export let text: string;
  export let handleClick: () => void;
</script>

<button on:click={handleClick}>{text}<slot /></button>

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
  }
</style>

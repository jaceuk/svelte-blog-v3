<script>
  import { navigating } from '$app/stores';
  import Button from '@components/Button.svelte';
  import Menu from '@components/svgs/Menu.svelte';
  import Close from '@components/svgs/Close.svelte';
  import { focusTrap } from 'svelte-focus-trap';

  let showMenu = false;

  function handleMenuToggle() {
    showMenu = !showMenu;
  }

  $: if ($navigating) showMenu = false;
</script>

<div class="button">
  <Button ariaLabel="Toggle menu" type="icon" handleClick={handleMenuToggle}>
    {#if showMenu}
      <Close />
    {:else}
      <Menu />
    {/if}
  </Button>
</div>

{#if showMenu}
  <nav use:focusTrap>
    <div class="links">
      <a class="link" href="/">Home</a>
      <a class="link" href="/blog/posts">Blog</a>
      <a class="link" href="/contact">Contact</a>
    </div>
  </nav>
{/if}

<style>
  .button {
    z-index: 150;
    position: relative;
  }

  nav {
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--color-overlay);
    padding: var(--size-medium);
    border-radius: var(--border-radius-medium);
  }

  .links {
    color: var(--color-text);
    font-size: var(--font-size-body);
    text-decoration: none;
    padding: var(--size-base);
    font-weight: var(--font-weight-bold);
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
</style>

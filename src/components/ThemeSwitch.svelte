<script lang="ts">
  import { browser } from '$app/env';
  import Button from '@components/Button.svelte';
  import Sun from '@components/svgs/Sun.svelte';
  import HalfMoon from '@components/svgs/HalfMoon.svelte';

  let theme: string;

  if (browser) {
    theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  function handleThemeToggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    if (browser) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }
</script>

<Button ariaLabel="Toggle dark/light mode" type="icon" handleClick={handleThemeToggle}>
  {#if theme === 'light'}
    <HalfMoon />
  {:else}
    <Sun />
  {/if}
</Button>

<style lang="scss">
</style>

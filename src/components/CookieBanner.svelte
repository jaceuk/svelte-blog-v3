<script lang="ts">
  import { browser } from '$app/env';
  import { fly } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  import Button from '@components/Button.svelte';

  let cookieConsent = (browser && !!localStorage.getItem('cookieConsent')) || false;

  function handleAccept() {
    cookieConsent = true;
    browser && localStorage.setItem('cookieConsent', 'true');
  }
</script>

{#if browser && !cookieConsent}
  <div class="container" out:fly={{ y: -50, duration: 200, easing: sineOut }}>
    <div class="inner">
      <div>
        This website uses cookies for analytical purposes. By continuing to use this website you are indicating that you
        are happy with this.
      </div>

      <Button handleClick={handleAccept}>Accept</Button>
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    background: rgba(var(--color-black-rgb), 0.8);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;

    @media (max-width: 900px) {
      padding: var(--size-medium);
    }
  }

  .inner {
    color: var(--color-accent);
    margin: auto;
    max-width: calc(var(--size-max-width) - 2 * var(--size-medium));
    padding: var(--size-large);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--size-large);

    @media (max-width: 900px) {
      flex-direction: column;
      gap: var(--size-medium);
      padding: var(--size-base);
    }
  }
</style>

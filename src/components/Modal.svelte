<script>
  import { createEventDispatcher } from 'svelte';
  import Close from '@components/svgs/Close.svelte';
  import { focusTrap } from 'svelte-focus-trap';
  import Overlay from '@components/Overlay.svelte';
  import Button from '@components/Button.svelte';

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('close');
  }
</script>

<Overlay>
  <div class="wrapper" use:focusTrap>
    <div class="close">
      <Button text="Close" handleClick={handleClose}>
        <Close />
      </Button>
    </div>

    <slot />
  </div>
</Overlay>

<style lang="scss">
  .close {
    position: absolute;
    top: var(--size-medium);
    right: var(--size-medium);
    z-index: 20;
  }

  .wrapper {
    margin: var(--size-medium);
  }
</style>

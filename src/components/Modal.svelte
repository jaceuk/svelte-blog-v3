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

    <div class="panel">Modal</div>
  </div>
</Overlay>

<style lang="scss">
  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Close from '@components/svgs/Close.svelte';
  import { focusTrap } from 'svelte-focus-trap';
  import Overlay from '@components/Overlay.svelte';
  import Button from '@components/Button.svelte';
  import Transition from '@components/Transition.svelte';

  export let image: string;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('close');
  }
</script>

<Overlay>
  <Transition>
    <div class="imageContainer" use:focusTrap>
      <div class="close">
        <Button handleClick={handleClose}>
          Close<Close />
        </Button>
      </div>

      <img class="image" src="/src/images/{image}" alt="" />
    </div>
  </Transition>
</Overlay>

<style lang="scss">
  .image {
    border-radius: var(--border-radius-medium);
    max-height: calc(100vh - 2 * var(--size-medium));
  }

  .imageContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: calc(100% - 2 * var(--size-medium));
    padding: var(--size-medium) 0;
    margin: auto;
  }

  .close {
    position: absolute;
    top: 0;
    right: calc(var(--size-medium) * -1);
    border-radius: var(--border-radius-max);
    padding: var(--size-base);
    cursor: pointer;
  }
</style>

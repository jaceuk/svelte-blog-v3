<script lang="ts">
  import { fade } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  import { inview } from 'svelte-inview';

  let isInView: boolean;

  const options = {
    unobserveOnEnter: true,
  };

  interface IProps {
    detail: any;
  }

  const handleEnter = ({ detail }: IProps) => {
    isInView = detail.inView;
  };
</script>

{#key isInView}
  <div use:inview={options} on:enter={handleEnter} in:fade={{ duration: 1000, easing: sineOut }} class="container">
    <slot />
  </div>
{/key}

<style>
  .container {
    height: 100%;
  }
</style>

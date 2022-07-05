<script lang="ts">
  import { fade, blur } from 'svelte/transition';
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

<div use:inview={options} on:enter={handleEnter} class="container">
  {#key isInView}
    <div in:fade={{ duration: 1000, easing: sineOut }} class="container">
      <slot />
    </div>
  {/key}
</div>

<style>
  .container {
    height: 100%;
  }
</style>

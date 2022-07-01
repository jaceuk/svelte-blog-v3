<script>
  import Navbar from '@components/Navbar.svelte';
</script>

<header class="panel">
  <Navbar />
  <slot />
</header>

<style>
  .panel {
    overflow: hidden;
  }
</style>

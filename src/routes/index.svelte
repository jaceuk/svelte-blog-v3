<script type="ts">
  import HomeTitle from '@components/HomeTitle.svelte';
  import Skills from '@components/Skills.svelte';
  import Projects from '@components/Projects.svelte';
</script>

<svelte:head>
  <title>Jason Newington - Developer, Designer and Geek</title>
</svelte:head>

<header class="panel">
  <HomeTitle />
</header>

<Skills />
<Projects />

<style>
  .panel {
    padding-top: 129px;
  }
</style>

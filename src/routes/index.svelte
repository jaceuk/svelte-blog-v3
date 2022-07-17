<script type="ts">
  import HomeTitle from '@components/HomeTitle.svelte';
  import Skills from '@components/Skills.svelte';
  import Projects from '@components/Projects.svelte';
</script>

<svelte:head>
  <title>Jason Newington - Developer, Designer and Geek</title>
  <meta
    name="description"
    content="I'm a passionate Front End Developer who focuses on writing clean, reusable, standards compliant code with accessiblity and best practice firmly in mind."
  />
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

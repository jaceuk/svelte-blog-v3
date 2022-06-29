<script lang="ts">
  import skills from '@data/skills.json';
  import developer from '@data/developer.json';
  import designer from '@data/designer.json';
  import geek from '@data/geek.json';
  import Card from '@components/Card.svelte';
</script>

<div class="panel">
  <div>
    <h2 class="h1 orange-text">{developer.title}</h2>

    {#each developer.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <div class="callout">
    <div>Experience</div>
    <div class="h1">20+</div>
    <div>years</div>
  </div>

  <div class="callout">
    <div>Projects</div>
    <div class="h1">??</div>
    <div>Lost count years ago!</div>
  </div>

  <div class="tags">
    {#each skills.primary.sort() as skill}
      <div class="tag">
        {skill}
      </div>
    {/each}
    {#each skills.secondary.sort() as skill}
      <div class="tag">
        {skill}
      </div>
    {/each}
  </div>

  <div>
    <h2>{designer.title}</h2>
    {#each designer.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <div>
    <h2>{geek.title}</h2>
    {#each geek.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</div>

<style>
  .panel {
    padding: var(--size-extra-large);
    display: grid;
    gap: var(--size-extra-large);
  }
</style>

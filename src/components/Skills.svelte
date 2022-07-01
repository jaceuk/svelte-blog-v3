<script lang="ts">
  import skills from '@data/skills.json';
  import developer from '@data/developer.json';
  import designer from '@data/designer.json';
  import geek from '@data/geek.json';
  import Callout from '@components/Callout.svelte';
  import moon from '@images/moon.svg';
</script>

<div class="panel">
  <h2 class="h1 orange-text">{developer.title}</h2>
  <div class="container">
    <div>
      {#each developer.text as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    <div class="callouts">
      <Callout header="Experience" content="20+" footer="years" />
      <Callout header="Projects" content="??" footer="Lost count!" />
    </div>

    <div class="tags">
      {#each skills.primary.sort() as skill}
        <div class="tag">
          {skill}
        </div>
      {/each}
      {#each skills.secondary.sort() as skill}
        <div class="tag secondary">
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

  <img class="moon" src={moon} alt="" />
</div>

<style lang="scss">
  .moon {
    filter: grayscale(1);
    position: absolute;
    top: -407px;
    right: -56px;
  }

  .panel {
    padding: var(--size-extra-large);
    overflow: hidden;
  }

  h2 {
    margin-bottom: var(--size-medium);
    position: relative;
    z-index: 10;
  }

  .tags {
    border-radius: var(--border-radius-medium);
    box-shadow: inset 0px 0px 0px var(--size-extra-small) var(--color-grey);
    padding: var(--size-medium);
    display: flex;
    flex-wrap: wrap;
    gap: var(--size-medium);
  }

  .tag {
    padding: var(--size-base) var(--size-medium);
    border-radius: var(--border-radius-small);
    background: rgba(255, 153, 0, 0.1);

    &.secondary {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .callouts {
    display: flex;
    gap: var(--size-medium);
    flex-direction: row;
    align-items: flex-start;
  }

  .container {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: var(--size-extra-large);
    grid-template-areas:
      'dev callouts'
      'tags tags'
      'design geek';

    div:nth-child(1) {
      grid-area: dev;
    }
    div:nth-child(2) {
      grid-area: callouts;
    }
    div:nth-child(3) {
      grid-area: tags;
    }
    div:nth-child(4) {
      grid-area: design;
    }
    div:nth-child(5) {
      grid-area: geek;
    }
  }
</style>

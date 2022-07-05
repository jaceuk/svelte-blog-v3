<script lang="ts">
  import skills from '@data/skills.json';
  import developer from '@data/developer.json';
  import designer from '@data/designer.json';
  import geek from '@data/geek.json';
  import Callout from '@components/Callout.svelte';
  import Tags from '@components/Tags.svelte';
  import moon from '@images/moon.svg';
  import SlideUp from '@components/SlideUp.svelte';
</script>

<div class="panel text-block">
  <SlideUp>
    <h2 class="h1 orange-text">{developer.title}</h2>
  </SlideUp>
  <div class="container">
    <SlideUp>
      <div class="developer text-block">
        {#each developer.text as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </SlideUp>

    <SlideUp>
      <div class="callouts">
        <Callout header="Experience" content="20+" footer="years" />
        <Callout header="Projects" content="??" footer="Lost count!" />
      </div>
    </SlideUp>

    <div class="skills">
      <SlideUp>
        <Tags {skills} />
      </SlideUp>
    </div>

    <SlideUp>
      <div class="designer text-block">
        <h2>{designer.title}</h2>
        {#each designer.text as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </SlideUp>

    <SlideUp>
      <div class="geek text-block">
        <h2>{geek.title}</h2>
        {#each geek.text as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </SlideUp>
  </div>

  <img class="moon" src={moon} alt="" />
</div>

<style lang="scss">
  .moon {
    top: -407px;
  }

  .panel {
    padding: var(--size-extra-large);
    overflow: hidden;

    @media (max-width: 820px) {
      padding: var(--size-large) var(--size-medium);
    }
  }

  h2 {
    position: relative;
    z-index: 20;
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
      'developer callouts'
      'skills skills'
      'designer geek';

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, auto);
      gap: var(--size-large);
      grid-template-areas:
        'developer'
        'callouts'
        'skills'
        'designer'
        'geek';
    }

    .developer {
      grid-area: developer;
    }
    .callouts {
      grid-area: callouts;
    }
    .skills {
      grid-area: skills;
    }
    .designer {
      grid-area: designer;
    }
    .geek {
      grid-area: geek;
    }
  }
</style>

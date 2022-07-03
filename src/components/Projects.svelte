<script lang="ts">
  import dogsToAdoptData from '@data/dogsToAdopt.json';
  import dogsToAdoptImage from '@images/dogs-to-adopt.jpg';
  import dogsToAdoptImageScreenshot from '@images/dogs-to-adopt-screenshot.jpg';
  import ESOBuilderData from '@data/ESOBuilder.json';
  import ESOBuilderImage from '@images/eso-builder.jpg';
  import ESOBuilderScreenshot from '@images/eso-builder-screenshot.jpg';
  import EVOHomeServicesData from '@data/EVOHomeServices.json';
  import EVOHomeServicesImage from '@images/evo.jpg';
  import EVOHomeServicesScreenshot from '@images/evo-screenshot.jpg';
  import VIPDineData from '@data/VIPDine.json';
  import VIPDineImage from '@images/vip-dine.jpg';
  import VIPDineScreenshot from '@images/vip-dine-screenshot.jpg';
  import wakefieldSecurityData from '@data/wakefieldSecurity.json';
  import wakefieldSecurityImage from '@images/wakefield.jpg';
  import wakefieldSecurityScreenshot from '@images/wakefield-screenshot.jpg';
  import projects from '@data/projects.json';
  import ProjectCard from '@components/ProjectCard.svelte';
  import moon from '@images/moon.svg';
</script>

<div class="panel" id="featured-projects">
  <div class="title-container">
    <div class="title">
      <h1>{projects.title}</h1>
      {#each projects.text as paragraph}
        <div class="h3">{paragraph}</div>
      {/each}
    </div>
  </div>

  <div class="projects">
    <div>
      <ProjectCard data={dogsToAdoptData} imageSRC={dogsToAdoptImage} screenshotSRC={dogsToAdoptImageScreenshot} />
    </div>

    <div>
      <ProjectCard data={VIPDineData} imageSRC={VIPDineImage} screenshotSRC={VIPDineScreenshot} />
    </div>

    <div>
      <ProjectCard data={ESOBuilderData} imageSRC={ESOBuilderImage} screenshotSRC={ESOBuilderScreenshot} />
    </div>

    <div>
      <ProjectCard
        data={EVOHomeServicesData}
        imageSRC={EVOHomeServicesImage}
        screenshotSRC={EVOHomeServicesScreenshot}
      />
    </div>

    <div>
      <ProjectCard
        data={wakefieldSecurityData}
        imageSRC={wakefieldSecurityImage}
        screenshotSRC={wakefieldSecurityScreenshot}
      />
    </div>
  </div>

  <img class="moon" src={moon} alt="" />
</div>

<style lang="scss">
  .moon {
    top: 96px;
  }

  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .title-container {
    margin: var(--size-extra-large) 0 0 0;
    z-index: 20;
    position: relative;
  }

  .projects {
    margin: var(--size-extra-large);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: var(--size-extra-large);
    z-index: 20;
    position: relative;
  }
</style>

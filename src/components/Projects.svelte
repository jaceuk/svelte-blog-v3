<script lang="ts">
  import dogsToAdoptData from '@data/projects/dogs-to-adopt.json';
  import dogsToAdoptImage from '@images/dogs-to-adopt.jpg';
  import ESOBuilderData from '@data/projects/eso-builder.json';
  import ESOBuilderImage from '@images/eso-builder.jpg';
  import EVOHomeServicesData from '@data/projects/evo-home-services.json';
  import EVOHomeServicesImage from '@images/evo-home-services.jpg';
  import VIPDineData from '@data/projects/vip-dine.json';
  import VIPDineImage from '@images/vip-dine.jpg';
  import wakefieldSecurityData from '@data/projects/wakefieldSecurity.json';
  import wakefieldSecurityImage from '@images/wakefield-security.jpg';
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
      <ProjectCard data={dogsToAdoptData} imageSRC={dogsToAdoptImage} />
    </div>

    <div>
      <ProjectCard data={VIPDineData} imageSRC={VIPDineImage} />
    </div>

    <div>
      <ProjectCard data={ESOBuilderData} imageSRC={ESOBuilderImage} />
    </div>

    <div>
      <ProjectCard data={EVOHomeServicesData} imageSRC={EVOHomeServicesImage} />
    </div>

    <div>
      <ProjectCard data={wakefieldSecurityData} imageSRC={wakefieldSecurityImage} />
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

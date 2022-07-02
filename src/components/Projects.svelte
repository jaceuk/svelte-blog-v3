<script lang="ts">
  import dogsToAdopt from '@data/dogsToAdopt.json';
  import dogsToAdoptImage from '@images/dogs-to-adopt.jpg';
  import ESOBuilder from '@data/ESOBuilder.json';
  import ESOBuilderImage from '@images/eso-builder.jpg';
  import EVOHomeServices from '@data/EVOHomeServices.json';
  import EVOHomeServicesImage from '@images/evo.jpg';
  import VIPDine from '@data/VIPDine.json';
  import VIPDineImage from '@images/vip-dine.jpg';
  import wakefieldSecurity from '@data/wakefieldSecurity.json';
  import wakefieldSecurityImage from '@images/wakefield.jpg';
  import projects from '@data/projects.json';
  import Card from '@components/Card.svelte';
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
      <Card type={dogsToAdopt.type} title={dogsToAdopt.title} intro={dogsToAdopt.intro} imageSRC={dogsToAdoptImage} />
    </div>

    <div>
      <Card type={VIPDine.type} title={VIPDine.title} intro={VIPDine.intro} imageSRC={VIPDineImage} />
    </div>

    <div>
      <Card type={ESOBuilder.type} title={ESOBuilder.title} intro={ESOBuilder.intro} imageSRC={ESOBuilderImage} />
    </div>

    <div>
      <Card
        type={EVOHomeServices.type}
        title={EVOHomeServices.title}
        intro={EVOHomeServices.intro}
        imageSRC={EVOHomeServicesImage}
      />
    </div>

    <div>
      <Card
        type={wakefieldSecurity.type}
        title={wakefieldSecurity.title}
        intro={wakefieldSecurity.intro}
        imageSRC={wakefieldSecurityImage}
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

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
  import Card from '@components/Card.svelte';
  import moon from '@images/moon.svg';
  import Transition from '@components/Transition.svelte';
</script>

<section class="panel" id="featured-projects">
  <div class="title-container">
    <Transition>
      <div class="title">
        <h1>{projects.title}</h1>
        {#each projects.text as paragraph}
          <div class="h3">{paragraph}</div>
        {/each}
      </div>
    </Transition>
  </div>

  <div class="projects">
    <div>
      <Card
        title={dogsToAdoptData.title}
        type={dogsToAdoptData.type}
        intro={dogsToAdoptData.intro}
        slug={dogsToAdoptData.slug}
        imageSRC={dogsToAdoptImage}
      />
    </div>

    <div>
      <Card
        title={VIPDineData.title}
        type={VIPDineData.type}
        intro={VIPDineData.intro}
        slug={VIPDineData.slug}
        imageSRC={VIPDineImage}
      />
    </div>

    <div>
      <Card
        title={ESOBuilderData.title}
        type={ESOBuilderData.type}
        intro={ESOBuilderData.intro}
        slug={ESOBuilderData.slug}
        imageSRC={ESOBuilderImage}
      />
    </div>

    <div>
      <Card
        title={EVOHomeServicesData.title}
        type={EVOHomeServicesData.type}
        intro={EVOHomeServicesData.intro}
        slug={EVOHomeServicesData.slug}
        imageSRC={EVOHomeServicesImage}
      />
    </div>

    <div>
      <Card
        title={wakefieldSecurityData.title}
        type={wakefieldSecurityData.type}
        intro={wakefieldSecurityData.intro}
        slug={wakefieldSecurityData.slug}
        imageSRC={wakefieldSecurityImage}
      />
    </div>
  </div>

  <img class="moon" src={moon} alt="" />
</section>

<style lang="scss">
  .moon {
    top: 96px;
  }

  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-accent);
    padding: 0 var(--size-medium) 0 calc(var(--size-extra-large) - 8px);

    @media (max-width: 900px) {
      padding: 0 var(--size-base) 0 calc(var(--size-medium) - 8px);
    }
  }

  .title-container {
    margin: var(--size-extra-large) 0 0 0;
    z-index: 20;
    position: relative;

    @media (max-width: 900px) {
      margin: var(--size-large) 0;
    }
  }

  .projects {
    margin: var(--size-extra-large);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: var(--size-extra-large);
    z-index: 20;
    position: relative;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: var(--size-large);
    }

    @media (max-width: 900px) {
      margin: var(--size-medium);
    }
  }
</style>

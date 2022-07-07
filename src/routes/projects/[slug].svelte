<script context="module" lang="ts">
  interface IParams {
    params: IParam;
  }
  interface IParam {
    slug: string;
  }
  interface IPostData {
    post: any;
    slug: string | null;
  }

  const allProjects = import.meta.globEager('../../data/projects/*.json');

  let projects: any[] = [];
  // Get the posts' slugs
  for (let path in allProjects) {
    const project = allProjects[path];
    projects.push(project);
  }

  export function load({ params }: IParams) {
    const { slug } = params;

    // Find the post with the slug
    const filteredProject: any = projects.find((project: any) => {
      return project.default.slug.toLowerCase() === slug.toLowerCase();
    });

    if (!filteredProject) return { status: 404 };

    return {
      props: {
        data: filteredProject.default,
      },
    };
  }
</script>

<script lang="ts">
  import PageHeader from '@components/PageHeader.svelte';
  import PagePanel from '@components/PagePanel.svelte';
  import Tags from '@components/Tags.svelte';
  import Lighthouse from '@components/Lighthouse.svelte';
  import Transition from '@components/Transition.svelte';
  import Modal from '@components/Modal.svelte';

  export let data: any;

  const title = data.title;
  const type = data.type;
  const overview = data.text;
  const slug = data.slug;
  const notes = data.notes;
  const skills = data.skills;
  const lighthouseScores = data.lighthouseScores;

  let showModal = false;

  function handleToggleModal() {
    showModal = !showModal;
    document.body.classList.toggle('modal-open');
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="xxxx" />
</svelte:head>

<PageHeader {type}>{title}</PageHeader>

<PagePanel>
  <div class="container">
    <Transition>
      <button class="screenshot" on:click={handleToggleModal}>
        <img src={`../src/images/${slug}-screenshot.jpg`} alt="" />
      </button>
    </Transition>

    <Transition>
      <div class="overview text-block">
        <h2>Overview</h2>
        {#each overview as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </Transition>

    <Transition>
      <div class="features text-block">
        <h2>Notes</h2>
        {#each notes as note}
          <p>{note}</p>
        {/each}
      </div>
    </Transition>

    <div class="tags"><Transition><Tags {skills} /></Transition></div>

    <Transition>
      <div class="lighthouse">
        <Lighthouse {lighthouseScores} />
      </div>
    </Transition>
  </div>
</PagePanel>

{#if showModal}
  <Modal image={`${slug}-screenshot.jpg`} on:close={handleToggleModal} />
{/if}

<style lang="scss">
  .container {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: var(--size-extra-large);
    grid-template-areas:
      'overview screenshot'
      'tags tags'
      'features lighthouse';

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, auto);
      gap: var(--size-large);
      grid-template-areas:
        'screenshot'
        'overview'
        'tags'
        'lighthouse'
        'features';
    }

    .overview {
      grid-area: overview;
    }

    .screenshot {
      grid-area: screenshot;
    }

    .features {
      grid-area: features;
    }

    .tags {
      grid-area: tags;
    }

    .lighthouse {
      grid-area: lighthouse;
    }
  }

  .screenshot {
    border-radius: var(--border-radius-medium);
    overflow: hidden;
    box-shadow: var(--card-box-shadow);
  }
</style>

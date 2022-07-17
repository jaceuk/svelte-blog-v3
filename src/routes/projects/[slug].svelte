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
  import Link from '@components/Link.svelte';
  import Button from '@components/Button.svelte';
  import NewWindow from '@components/svgs/NewWindow.svelte';

  export let data: any;

  const title = data.title;
  const url = data.url;
  const type = data.type;
  const overview = data.text;
  const slug = data.slug;
  const skills = data.skills;
  const intro = data.intro;
  const lighthouseScores = data.lighthouseScores;

  let showModal = false;

  function handleToggleModal() {
    showModal = !showModal;
    document.body.classList.toggle('no-scroll');
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={intro} />
</svelte:head>

<PageHeader {type}>{title}</PageHeader>

<PagePanel>
  <div class="container">
    <Transition>
      <div class="overview">
        <div class="screenshot-container">
          <button class="screenshot" on:click={handleToggleModal} aria-label={`View screenshot for ${title}`}>
            <img src={`../src/images/${slug}-screenshot.jpg`} alt="" />
          </button>

          <div class="links">
            <Button type="link" handleClick={handleToggleModal} ariaLabel={`View screenshot for ${title}`}>
              Screenshot<NewWindow />
            </Button>

            {#if url}
              <Link ariaLabel={`Visit the live website for ${title} (opens in a new tab)`} href={url} target="_blank">
                Live site<NewWindow />
              </Link>
            {/if}
          </div>
        </div>

        <div class="text-block">
          <h2>Overview</h2>
          {#each overview as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
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
  .links {
    display: flex;
    gap: var(--size-large);
    align-items: center;
    justify-content: center;
  }

  .screenshot-container {
    display: flex;
    gap: var(--size-large);
    flex-direction: column;

    @media (max-width: 767px) {
      gap: var(--size-medium);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--size-extra-large);
    max-width: var(--size-content-max-width);

    @media (max-width: 1200px) {
      gap: var(--size-large);
    }
  }

  .screenshot {
    border-radius: var(--border-radius-medium);
    overflow: hidden;
    box-shadow: var(--card-box-shadow);

    img {
      aspect-ratio: 16/9;
      object-fit: cover;
      object-position: top;
    }
  }

  .overview {
    display: flex;
    gap: var(--size-large);
    flex-direction: column;

    @media (max-width: 1200px) {
      gap: var(--size-large);
    }
  }
</style>

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

    return {
      props: {
        data: filteredProject.default,
      },
    };
  }
</script>

<script lang="ts">
  import Header from '@components/Header.svelte';
  import PagePanel from '@components/PagePanel.svelte';
  import Tags from '@components/Tags.svelte';
  import Lighthouse from '@components/Lighthouse.svelte';

  export let data: any;

  const title = data.title;
  const overview = data.text;
  const slug = data.slug;
  const notes = data.notes;
  const skills = data.skills;
  const lighthouseScores = data.lighthouseScores;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="xxxx" />
</svelte:head>

<Header>{title}</Header>

<PagePanel>
  <div class="container">
    <div class="overview text-block">
      <h2>Overview</h2>
      {#each overview as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
    <div class="screenshot"><img src={`../src/images/${slug}-screenshot.jpg`} alt="" /></div>
    <div class="features text-block">
      <h2>Notes</h2>
      {#each notes as note}
        <p>{note}</p>
      {/each}
    </div>
    <div class="tags"><Tags {skills} /></div>
    <div class="lighthouse">
      <Lighthouse {lighthouseScores} />
    </div>
  </div>
</PagePanel>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: var(--size-extra-large);
    grid-template-areas:
      'overview screenshot'
      'features tags'
      'features lighthouse';

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

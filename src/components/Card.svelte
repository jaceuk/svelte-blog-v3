<script lang="ts">
  import ArrowRight from '@components/svgs/ArrowRight.svelte';
  import Link from '@components/Link.svelte';
  import PostMeta from '@components/PostMeta.svelte';
  import Transition from '@components/Transition.svelte';

  export let date = '';
  export let tags: [] = [];
  export let title: string;
  export let intro: string;
  export let slug: string;
  export let type = '';
  export let imageSRC = '';
</script>

<Transition>
  <div class="container">
    {#if imageSRC}
      <div class="image-container">
        <a href={`/${type ? 'projects' : 'blog'}/${slug}`} aria-label={`Read more about ${title}`}>
          <img src={imageSRC} alt="" />
        </a>
      </div>
    {/if}

    <div class="card">
      <div class="text-block">
        <div class="title-container">
          <div class="title">
            {#if type}
              <div class="type">{type}</div>
            {/if}
            <h2 class="white-text">
              <a href={`/${type ? 'projects' : 'blog'}/${slug}`}>{title}</a>
            </h2>
          </div>
        </div>

        <div class="text">
          {#if date}
            <PostMeta {date} {tags} />
          {/if}{intro}
        </div>

        <div class="link">
          <Link href={`/${type ? 'projects' : 'blog'}/${slug}`}>
            Read more<span class="accessible-text"> about {title}</span><ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  </div>
</Transition>

<style lang="scss">
  .link {
    margin: auto var(--size-medium) 0 auto;
  }

  .container {
    height: 100%;
    display: flex;
    gap: var(--size-base);
    flex-direction: column;
  }

  .card {
    border-radius: var(--border-radius-medium);
    width: 100%;
    box-shadow: var(--card-box-shadow);
    background: var(--color-card);
    overflow: hidden;
    flex-grow: 1;
  }

  .text-block {
    padding: var(--size-medium) 0;
  }

  .title-container {
    width: 100%;
  }

  .title {
    border-left: var(--size-extra-small) solid var(--color-accent);
    padding-left: calc(var(--size-medium) - var(--size-extra-small));
    padding-right: var(--size-medium);

    @media (max-width: 900px) {
      padding-left: calc(var(--size-medium) - var(--size-extra-small));
      padding-right: var(--size-medium);
    }
  }

  .type {
    color: var(--color-accent);
    text-transform: uppercase;
    margin-bottom: var(--size-base);
    font-weight: var(--font-weight-light);
    letter-spacing: 1px;
  }

  .image-container {
    background: var(--color-black);
    border-radius: var(--border-radius-medium);
    overflow: hidden;
  }

  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center top;
  }

  .text {
    padding: 0 var(--size-medium);
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);

    @media (max-width: 900px) {
      padding: 0 var(--size-medium);
    }
  }
</style>

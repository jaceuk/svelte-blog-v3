<script lang="ts">
  import PostMeta from '@components/PostMeta.svelte';
  import ArrowRight from '@components/svgs/ArrowRight.svelte';
  import Link from '@components/Link.svelte';

  export let imageSRC: string = '';
  export let date: string = '';
  export let tags: [] = [];
  export let type: string = '';
  export let title: string;
  export let intro: string;
  export let slug: string;
</script>

<div class="container">
  {#if imageSRC}
    <div class="image-container">
      <img src={imageSRC} alt="" />
    </div>
  {/if}

  <div class="card">
    <div class="text-container">
      <div class="title-container">
        <div class="title">
          {#if type}
            <div class="type">{type}</div>
          {/if}
          <h2 class="white-text">{title}</h2>
          {#if date}
            <PostMeta {date} {tags} />
          {/if}
        </div>
      </div>

      <div class="text">{intro}</div>

      <Link text="Read more" href={`/blog/${slug}`}><ArrowRight /></Link>
    </div>
  </div>
</div>

<style>
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
    background: var(--color-dark-grey);
    overflow: hidden;
    flex-grow: 1;
  }

  h2 {
    padding-bottom: var(--size-base);
  }

  .text-container {
    padding: var(--size-large) 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .title-container {
    width: 100%;
  }

  .title {
    border-left: var(--size-extra-small) solid var(--color-orange);
    padding-left: calc(var(--size-large) - var(--size-extra-small));
  }

  .type {
    color: var(--color-orange);
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
    padding: var(--size-medium) var(--size-large) var(--size-large) var(--size-large);
  }
</style>

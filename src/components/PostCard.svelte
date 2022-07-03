<script lang="ts">
  import PostMeta from '@components/PostMeta.svelte';
  import ArrowRight from '@components/svgs/ArrowRight.svelte';
  import Link from '@components/Link.svelte';

  export let date: string;
  export let tags: [] = [];
  export let title: string;
  export let intro: string;
  export let slug: string;
</script>

<div class="container">
  <div class="card">
    <div class="text-block">
      <div class="title-container">
        <div class="title">
          <h2 class="white-text">{title}</h2>
          <PostMeta {date} {tags} />
        </div>
      </div>

      <div class="text">{intro}</div>

      <div class="link">
        <Link text="Read more" href={`/blog/${slug}`}><ArrowRight /></Link>
      </div>
    </div>
  </div>
</div>

<style>
  .link {
    margin: auto auto 0 auto;
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
    background: var(--color-dark-grey);
    overflow: hidden;
    flex-grow: 1;
  }

  h2 {
    padding-bottom: var(--size-base);
  }

  .text-block {
    padding: var(--size-large) 0;
  }

  .title-container {
    width: 100%;
  }

  .title {
    border-left: var(--size-extra-small) solid var(--color-orange);
    padding-left: calc(var(--size-large) - var(--size-extra-small));
  }

  .text {
    padding: 0 var(--size-large) var(--size-medium) var(--size-large);
  }
</style>

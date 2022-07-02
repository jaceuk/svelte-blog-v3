<script lang="ts">
  import Pagination from '@components/Pagination.svelte';
  import Card from '@components/Card.svelte';
  import PagePanel from '@components/PagePanel.svelte';

  export let posts: any;
  export let page: number;
  export let postCount: number;
  export let tag: string = '';
</script>

<PagePanel>
  {#if tag}
    <div class="h3">Posts tagged with '{tag}'.</div>
  {/if}
  <div class="grid">
    {#each posts as post}
      <Card title={post.title} intro={post.intro} date={post.date} tags={post.tags} />
    {/each}
  </div>
  <Pagination {page} {postCount} {tag} />
</PagePanel>

<style type="scss">
  .grid {
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--size-extra-large);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    padding-bottom: var(--size-large);

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .h3 {
    margin-bottom: var(--size-large);
  }
</style>

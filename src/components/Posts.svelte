<script lang="ts">
  import Pagination from '@components/Pagination.svelte';
  import Card from '@components/Card.svelte';

  export let posts: any;
  export let page: number;
  export let postCount: number;
  export let tag: string = '';
</script>

<div class="panel">
  <div class="grid">
    {#each posts as post}
      <Card title={post.title} intro={post.intro} date={post.date} tags={post.tags} />
    {/each}
  </div>
  <Pagination {page} {postCount} {tag} />
</div>

<style type="scss">
  .panel {
    padding: var(--size-extra-large);
  }

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
</style>

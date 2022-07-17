<script lang="ts">
  import ChevronRight from '@components/svgs/ChevronRight.svelte';
  import ChevronLeft from '@components/svgs/ChevronLeft.svelte';
  import Link from '@components/Link.svelte';
  import { postsPerPage } from '@lib/stores';

  export let page: number;
  export let postCount: number;
  export let tag = '';

  const totalNumberOfPages = postCount / $postsPerPage;
  const folderPath: string = tag ? 'tag' : 'blog';
  const pagePath: string = tag ? tag : 'posts';
</script>

<div class="pagination">
  <Link disabled={page <= 1} ariaLabel="Next posts" href={page > 1 ? `/${folderPath}/${pagePath}?page=${page - 1}` : ''}
    ><ChevronLeft />
  </Link>

  <Link
    disabled={page >= totalNumberOfPages}
    ariaLabel="Previous posts"
    href={page < totalNumberOfPages ? `/${folderPath}/${pagePath}?page=${page + 1}` : ''}
    ><ChevronRight />
  </Link>
</div>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    gap: var(--size-large);
  }
</style>

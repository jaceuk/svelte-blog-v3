<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
    url: any;
  }

  export async function load({ fetch, url }: IFetch) {
    const page = parseInt(url.searchParams.get('page') !== null ? url.searchParams.get('page') : '1');
    const response = await fetch(`/api/posts.json?page=${page}`);
    const posts = await response.json();

    return {
      status: response.status,
      props: {
        posts: posts.posts,
        postCount: posts.postCount,
        page: page,
      },
    };
  }
</script>

<script lang="ts">
  import Posts from '@components/Posts.svelte';
  import PageHeader from '@components/PageHeader.svelte';
  import type { IPosts } from '@lib/types';

  export let posts: IPosts;
  export let page: number;
  export let postCount: number;
</script>

<svelte:head>
  <title>Jason Newington - Blog</title>
  <meta name="description" content="Every time I learn something new it pushes some old stuff out." />
</svelte:head>

<PageHeader>Blog posts</PageHeader>

<Posts {posts} {page} {postCount} />

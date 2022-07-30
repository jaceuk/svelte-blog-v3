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

  const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
  const allPosts = import.meta.globEager('../../posts/*.md');

  let posts: any[] = [];
  // Get the posts' slugs
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = slugFromPath(path);
    const postData: IPostData = { post, slug };
    posts.push(postData);
  }

  export function load({ params }: IParams) {
    const { slug } = params;

    // Find the post with the slug
    const filteredPost: any = posts.find((post: any) => {
      return post.slug.toLowerCase() === slug.toLowerCase();
    });

    if (!filteredPost) return { status: 404 };

    return {
      props: {
        meta: filteredPost.post.metadata,
        page: filteredPost.post.default,
      },
    };
  }
</script>

<script lang="ts">
  import PostMeta from '@components/PostMeta.svelte';
  import PagePanel from '@components/PagePanel.svelte';
  import PageHeader from '@components/PageHeader.svelte';

  export let page: any, meta: any;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.intro} />
</svelte:head>

<PageHeader>{meta.title}<span slot="subtitle"><PostMeta date={meta.date} tags={meta.tags} /></span></PageHeader>

<PagePanel>
  <div class="post-content">
    <svelte:component this={page} />
  </div>
</PagePanel>

<style type="scss">
  .post-content {
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
    max-width: var(--size-content-max-width);
  }
</style>

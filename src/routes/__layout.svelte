<script type="ts">
  import { page } from '$app/stores';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
  import '../styles/markdown.css';
  import CookieBanner from '@components/CookieBanner.svelte';
  import Footer from '@components/Footer.svelte';
  import Header from '@components/Header.svelte';
  import HomeTitle from '@components/HomeTitle.svelte';
  import TagTitle from '@components/TagTitle.svelte';
  import PageTitle from '@components/PageTitle.svelte';
</script>

<div class="wrapper">
  <CookieBanner />
  <Header>
    {#if $page.url.pathname === '/'}<HomeTitle slot="title" />{/if}
    {#if $page.url.pathname === '/contact'}<PageTitle>Let's talk</PageTitle>{/if}
    {#if $page.url.pathname === '/blog/posts' || $page.url.pathname.includes('/tag/')}<PageTitle>Blog posts</PageTitle
      >{/if}
  </Header>
  <slot />
  <Footer />
</div>

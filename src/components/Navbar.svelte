<script lang="ts">
  import { page } from '$app/stores';
  import logo from '@images/logo.svg';
</script>

<div class="container">
  <div class="inner">
    <a class="logo-link" href="/">
      <img class="logo" src={logo} alt="" />
    </a>

    <nav>
      <a class="link" class:active={$page.url.pathname === '/'} href="/">Home</a>
      <a class="link" class:active={$page.url.pathname === '/blog/posts'} href="/blog/posts">Blog</a>
      <a class="link" class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
      <span class="underline" />
    </nav>
  </div>
</div>

<style lang="scss">
  .container {
    padding: var(--size-medium);
    z-index: 50;
    position: absolute;
    width: 100%;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-link {
    z-index: 20;
    width: 65px;
    height: 65px;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  .link {
    color: var(--color-white);
    font-size: var(--font-size-body);
    text-decoration: none;
    padding: var(--size-base);
    font-weight: var(--font-weight-bold);
  }

  a:nth-child(1).active ~ .underline {
    transform: translatex(0px);
    transition: transform 0.2s ease-out;
  }

  a:nth-child(2).active ~ .underline {
    transform: translatex(109px);
    transition: transform 0.2s ease-out;
    width: 80px;
  }

  a:nth-child(3).active ~ .underline {
    transform: translatex(205px);
    transition: transform 0.2s ease-out;
    width: 104px;
  }

  nav {
    display: flex;
    gap: var(--size-base);
    align-items: center;
    z-index: 20;
    position: relative;
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 93px;
    height: var(--size-extra-small);
    background: var(--color-orange);
    border-radius: 28px;
    z-index: -1;
    transition: 9999s transform 0.2s ease-out;
  }
</style>

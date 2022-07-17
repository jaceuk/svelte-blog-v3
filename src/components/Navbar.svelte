<script lang="ts">
  import { page } from '$app/stores';
  import LogoName from '@components/svgs/LogoName.svelte';
  import ThemeSwitch from '@components/ThemeSwitch.svelte';
  import MobileMenu from '@components/MobileMenu.svelte';
</script>

<div class="container">
  <div class="inner">
    <nav>
      <a class="logo-link" href="/" aria-label="Home">
        <LogoName />
      </a>

      <div class="nav desktop">
        <a class="link" href="/">Home</a>
        <a class="link" href="/blog/posts">Blog</a>
        <a class="link" href="/contact">Contact</a>
        <span
          class="underline"
          class:projects={$page.url.pathname.startsWith('/projects/')}
          class:home={$page.url.pathname === '/'}
          class:blog={$page.url.pathname === '/blog/posts'}
          class:contact={$page.url.pathname === '/contact'}
        />
        <ThemeSwitch />
      </div>

      <div class="nav mobile">
        <ThemeSwitch />
        <MobileMenu />
      </div>
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
    width: 265px;
    opacity: 0.4;

    @media (max-width: 900px) {
      width: 180px;
    }
  }

  .link {
    color: var(--color-text);
    font-size: var(--font-size-body);
    text-decoration: none;
    padding: var(--size-base);
    font-weight: var(--font-weight-bold);
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: var(--size-extra-small);
    background: var(--color-accent);
    border-radius: 28px;
    z-index: -1;
    transition: 9999s transform 0.2s ease-out;

    &.home {
      transform: translatex(0px);
      transition: transform 0.2s ease-out;
      width: 93px;
    }

    &.blog {
      transform: translatex(109px);
      transition: transform 0.2s ease-out;
      width: 80px;
    }

    &.contact {
      transform: translatex(205px);
      transition: transform 0.2s ease-out;
      width: 104px;
    }

    &.projects {
      display: none;
    }
  }

  nav {
    display: flex;
    gap: var(--size-base);
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .nav {
    display: flex;
    gap: var(--size-base);
    align-items: center;
    z-index: 20;
    position: relative;

    &.mobile {
      display: none;

      @media (max-width: 900px) {
        display: flex;
      }
    }

    &.desktop {
      display: flex;

      @media (max-width: 900px) {
        display: none;
      }
    }
  }
</style>

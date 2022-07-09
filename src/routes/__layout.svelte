<script type="ts">
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
  import '../styles/markdown.css';
  import CookieBanner from '@components/CookieBanner.svelte';
  import Footer from '@components/Footer.svelte';
  import Navbar from '@components/Navbar.svelte';
</script>

<div class="wrapper">
  <CookieBanner />
  <Navbar />
  <slot />
  <Footer />
</div>

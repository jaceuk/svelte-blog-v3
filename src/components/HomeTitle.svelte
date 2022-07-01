<script>
  import moon from '@images/moon.svg';
  import rocket from '@images/rocket.svg';
</script>

<div class="title-container">
  <div class="title">
    <h1 class="large">Jason Newington</h1>
    <div class="h3">Creating out of this world websites!</div>
  </div>
</div>

<img class="moon" src={moon} alt="" />
<img class="rocket" src={rocket} alt="" />

<style>
  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-orange);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .title-container {
    margin: var(--size-max) 0;
    max-width: 650px;
    position: relative;
    z-index: 10;
  }

  .moon {
    filter: grayscale(1);
    position: absolute;
    bottom: -136px;
    right: -56px;
    z-index: 1;
  }

  .rocket {
    filter: grayscale(1);
    position: absolute;
    bottom: 350px;
    right: 156px;
    z-index: 2;
  }
</style>

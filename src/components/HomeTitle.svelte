<script>
  import moon from '@images/moon.svg';
  import rocket from '@images/rocket.svg';
  import star from '@images/star.svg';
</script>

<div class="title-container">
  <div class="title">
    <h1 class="large">Jason Newington</h1>
    <div class="h3">Creating out of this world websites!</div>
  </div>
</div>

<div>
  <img class="moon" src={moon} alt="" />
  <img class="rocket" src={rocket} alt="" />
  <img class="star" src={star} alt="" />
  <img class="star" src={star} alt="" />
  <img class="star" src={star} alt="" />
  <img class="star" src={star} alt="" />
  <img class="star small" src={star} alt="" />
  <img class="star small" src={star} alt="" />
  <img class="star small" src={star} alt="" />
  <img class="star small" src={star} alt="" />
</div>

<style lang="scss">
  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.6;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  .star {
    position: absolute;
    bottom: 440px;
    right: 70px;
    z-index: 1;
    width: 10px;
    animation: twinkle 4s ease-in-out infinite;

    &.small {
      width: 5px;
    }

    &:nth-child(2) {
      bottom: 560px;
      right: 150px;
      animation-delay: 2s;
      animation-duration: 6s;
    }

    &:nth-child(3) {
      bottom: 520px;
      right: 350px;
      animation-delay: 4s;
      animation-duration: 4s;
    }

    &:nth-child(4) {
      bottom: 400px;
      right: 400px;
      animation-delay: 6s;
      animation-duration: 5s;
    }

    &:nth-child(5) {
      bottom: 480px;
      right: 200px;
      animation-delay: 3s;
      animation-duration: 3s;
    }

    &:nth-child(6) {
      bottom: 590px;
      right: 460px;
      animation-delay: 4s;
      animation-duration: 4s;
    }

    &:nth-child(7) {
      bottom: 460px;
      right: 530px;
      animation-delay: 2s;
      animation-duration: 2s;
    }

    &:nth-child(8) {
      bottom: 290px;
      right: 520px;
      animation-delay: 1s;
      animation-duration: 8s;
    }
  }

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
    z-index: 10;
  }

  .rocket {
    filter: grayscale(1);
    position: absolute;
    bottom: 350px;
    right: 156px;
    z-index: 20;
  }
</style>

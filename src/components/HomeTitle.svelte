<script>
  import Button from '@components/Button.svelte';
  import ArrowDown from '@components/svgs/ArrowDown.svelte';
  import Star from '@components/svgs/Star.svelte';
  import Rocket from '@components/svgs/Rocket.svelte';
  import moon from '@images/moon.svg';
  import Transition from '@components/Transition.svelte';

  function handleClick() {
    var element = document.querySelector('#featured-projects');
    element?.scrollIntoView();
  }
</script>

<div class="title-container">
  <Transition>
    <div class="title">
      <h1 class="large">Out of this world websites</h1>
      <div class="h3">and apps, of course!</div>
    </div>
  </Transition>

  <Transition>
    <div class="button">
      <Button {handleClick} ariaLabel="Scroll to featured projects">Featured projects<ArrowDown /></Button>
    </div>
  </Transition>
</div>

<div>
  <img class="moon" src={moon} alt="" />
  <div class="rocket"><Rocket /></div>
  <div>
    <Transition>
      <div class="star"><Star /></div>
      <div class="star"><Star /></div>
      <div class="star"><Star /></div>
      <div class="star"><Star /></div>
      <div class="star small"><Star /></div>
      <div class="star small"><Star /></div>
      <div class="star small"><Star /></div>
      <div class="star small"><Star /></div>
    </Transition>
  </div>
</div>

<style lang="scss">
  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.2;
    }
    55% {
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
    width: 20px;
    animation: twinkle 3s ease-in-out infinite;

    &.small {
      width: 10px;
    }

    &:nth-child(2) {
      bottom: 560px;
      right: 150px;
      animation-delay: 0.2s;
      animation-duration: 4s;
    }

    &:nth-child(3) {
      bottom: 520px;
      right: 350px;
      animation-delay: 0.4s;
      animation-duration: 3s;
    }

    &:nth-child(4) {
      bottom: 400px;
      right: 400px;
      animation-delay: 0.6s;
      animation-duration: 5s;
    }

    &:nth-child(5) {
      bottom: 480px;
      right: 200px;
      animation-delay: 0.3s;
      animation-duration: 4s;
    }

    &:nth-child(6) {
      bottom: 590px;
      right: 460px;
      animation-delay: 0.2s;
      animation-duration: 3s;
    }

    &:nth-child(7) {
      bottom: 460px;
      right: 530px;
      animation-delay: 0.2s;
      animation-duration: 5s;
    }

    &:nth-child(8) {
      bottom: 290px;
      right: 520px;
      animation-delay: 0.1s;
      animation-duration: 3s;
    }
  }

  h1 {
    padding-bottom: var(--size-base);
    max-width: var(--size-content-max-width);
  }

  .title {
    border-left: 8px solid var(--color-accent);
    padding-left: calc(var(--size-extra-large) - 8px);
    padding-right: var(--size-medium);

    @media (max-width: 900px) {
      padding-left: calc(var(--size-medium) - 8px);
    }
  }

  .title-container {
    margin: var(--size-max) 0 var(--size-extra-large) 0;
    width: 100%;
    position: relative;
    z-index: 20;
    display: flex;
    gap: var(--size-large);
    align-items: flex-start;
    flex-direction: column;
  }

  .moon {
    bottom: -136px;
    z-index: 10;
  }

  .button {
    margin-left: var(--size-extra-large);

    @media (max-width: 900px) {
      margin-left: var(--size-medium);
    }
  }
</style>

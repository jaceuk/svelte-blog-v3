<script lang="ts">
  import NewWindow from '@components/svgs/NewWindow.svelte';
  import Button from '@components/Button.svelte';
  import Modal from '@components/Modal.svelte';
  import Tags from '@components/Tags.svelte';
  import PagePanel from '@components/PagePanel.svelte';
  import ModalTitle from '@components/ModalTitle.svelte';
  import Lighthouse from '@components/Lighthouse.svelte';

  export let data: any;
  export let imageSRC: string;

  const skills = data.skills;
  const type = data.type;
  const title = data.title;
  const intro = data.intro;
  const text = data.text;
  const lighthouseScores = data.lighthouseScores;
  const notes = data.notes;

  let showModal = false;

  function handleToggleModal() {
    showModal = !showModal;
    document.body.classList.toggle('modal-open');
  }
</script>

<div class="container">
  {#if imageSRC}
    <div class="image-container">
      <img src={imageSRC} alt="" />
    </div>
  {/if}

  <div class="card">
    <div class="text-block">
      <div class="title-container">
        <div class="title">
          {#if type}
            <div class="type">{type}</div>
          {/if}
          <h2 class="white-text">{title}</h2>
        </div>
      </div>

      <div class="text">{intro}</div>

      <div class="button"><Button text="Read more" handleClick={handleToggleModal}><NewWindow /></Button></div>
    </div>
  </div>
</div>

{#if showModal}
  <Modal on:close={handleToggleModal}>
    <ModalTitle><span slot="type">{type}</span>{title}</ModalTitle>
    <PagePanel>
      <div class="modal-content">
        <div class="overview text-block">
          <h2>Overview</h2>
          {#each text as paragraph}<p>{paragraph}</p>{/each}
        </div>
        <div class="screenshot">screenshot</div>
        <div class="features text-block">
          <h2>Notes</h2>
          {#each notes as note}<p>{note}</p>{/each}
        </div>
        <div class="tags">
          <Tags {skills} />
        </div>
        <div class="lighthouse">
          <Lighthouse {lighthouseScores} />
        </div>
      </div>
    </PagePanel>
  </Modal>
{/if}

<style lang="scss">
  .button {
    margin: auto auto 0 auto;
  }

  .modal-content {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: var(--size-extra-large);
    grid-template-areas:
      'overview screenshot'
      'features tags'
      'features lighthouse';

    .overview {
      grid-area: overview;
    }

    .screenshot {
      grid-area: screenshot;
    }

    .features {
      grid-area: features;
    }

    .tags {
      grid-area: tags;
    }

    .lighthouse {
      grid-area: lighthouse;
    }
  }

  .container {
    height: 100%;
    display: flex;
    gap: var(--size-base);
    flex-direction: column;
  }

  .card {
    border-radius: var(--border-radius-medium);
    width: 100%;
    box-shadow: var(--card-box-shadow);
    background: var(--color-dark-grey);
    overflow: hidden;
    flex-grow: 1;
  }

  h2 {
    padding-bottom: var(--size-base);
  }

  .text-block {
    padding: var(--size-large) 0;
  }

  .title-container {
    width: 100%;
  }

  .title {
    border-left: var(--size-extra-small) solid var(--color-orange);
    padding-left: calc(var(--size-large) - var(--size-extra-small));
  }

  .type {
    color: var(--color-orange);
    text-transform: uppercase;
    margin-bottom: var(--size-base);
    font-weight: var(--font-weight-light);
    letter-spacing: 1px;
  }

  .image-container {
    background: var(--color-black);
    border-radius: var(--border-radius-medium);
    overflow: hidden;
  }

  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center top;
  }

  .text {
    padding: 0 var(--size-large) var(--size-medium) var(--size-large);
  }
</style>

<script lang="ts">
  export let lighthouseScores: string[];

  const scoreAreas = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
</script>

<div class="container">
  {#each lighthouseScores as score, index}
    <div class="score">
      <div
        class="circle {parseInt(score) < 90 ? 'average' : 'good'}"
        style="background-image: conic-gradient(var(--color-{parseInt(score) < 90
          ? 'average'
          : 'good'}) {score}%, transparent 10%)"
      >
        <div class="number">{score}</div>
      </div>
      <div class="type">{scoreAreas[index]}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--size-medium);
    text-align: center;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      width: 100%;
    }
  }

  .score {
    display: flex;
    flex-direction: column;
    gap: var(--size-base);
    align-items: center;
  }

  .circle {
    border-radius: var(--border-radius-max);
    padding: var(--size-extra-small);
    width: 128px;
    height: 128px;

    .number {
      font-size: var(--font-size-h2);
      width: fit-content;
      margin: 0 auto;
      padding: var(--size-base);
      border-radius: var(--border-radius-max);
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 2px;
      width: 117px;
      height: 117px;
    }

    &[class~='good'] {
      background-color: var(--color-good-dark);

      .number {
        color: var(--color-good);
        background-color: var(--color-good-dark);
      }
    }

    &[class~='average'] {
      background-color: var(--color-average-dark);

      .number {
        color: var(--color-average);
        background-color: var(--color-average-dark);
      }
    }
  }

  .type {
    text-align: center;
  }
</style>

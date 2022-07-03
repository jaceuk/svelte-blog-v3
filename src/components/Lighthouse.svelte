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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--size-medium);
    text-align: center;
    width: calc(400px + 6 * var(--size-medium));
    margin: 0 auto;

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
      grid-row: auto auto;
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
    width: 88px;
    height: 88px;

    .number {
      font-size: var(--font-size-h3);
      width: fit-content;
      margin: 0 auto;
      padding: var(--size-base);
      border-radius: var(--border-radius-max);
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
    }

    &[class~='good'] {
      background-color: var(--color-black);

      .number {
        color: var(--color-good);
        background-color: var(--color-black);
      }
    }

    &[class~='average'] {
      background-color: var(--color-black);

      .number {
        color: var(--color-average);
        background-color: var(--color-black);
      }
    }
  }

  .type {
    text-align: center;
    font-size: var(--font-size-small);
  }
</style>

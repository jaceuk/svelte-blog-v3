<script lang="ts">
  import { tag } from '@lib/stores';

  let tagValue: string;

  tag.subscribe((value) => {
    tagValue = value;
  });
</script>

<div class="title-container">
  <div class="title">
    <h1>Blog posts</h1>
    <div class="h3">tagged with '{tagValue}'</div>
  </div>
</div>

<style lang="scss">
  h1 {
    padding-bottom: var(--size-base);
  }

  .title {
    border-left: 8px solid var(--color-accent);
    padding-left: calc(var(--size-extra-large) - 8px);
  }

  .title-container {
    margin: var(--size-medium) 0;
    max-width: 650px;
  }
</style>

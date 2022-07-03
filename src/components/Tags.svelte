<script lang="ts">
  import Tag from '@components/Tag.svelte';

  export let skills: any;

  const skillsPrimary = skills.primary.sort();
  const skillsSecondary = skills.secondary.sort();
</script>

<div class="tags">
  {#each skillsPrimary as skill}
    <Tag type="primary">
      {skill}
    </Tag>
  {/each}
  {#each skillsSecondary as skill}
    <Tag type="secondary">
      {skill}
    </Tag>
  {/each}
</div>

<style lang="scss">
  .tags {
    border-radius: var(--border-radius-medium);
    box-shadow: inset 0px 0px 0px var(--size-extra-small) var(--color-grey);
    padding: var(--size-medium);
    display: flex;
    flex-wrap: wrap;
    gap: var(--size-medium);
  }
</style>

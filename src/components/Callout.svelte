<script lang="ts">
  export let header: string;
  export let content: string;
  export let footer: string;
</script>

<div class="container">
  <div class="header">{header}</div>
  <div class="h1">{content}</div>
  <div class="small">{footer}</div>
</div>

<style>
  .container {
    display: grid;
    padding: var(--size-base);
    background: var(--color-dark-grey);
    border-radius: var(--border-radius-medium);
    justify-items: center;
    width: 100%;
    box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.25);
  }

  .header {
    color: var(--color-orange);
    text-transform: uppercase;
    font-weight: var(--font-weight-light);
    letter-spacing: 1px;
  }
</style>

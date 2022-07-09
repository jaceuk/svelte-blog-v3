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
    background: var(--color-card);
    border-radius: var(--border-radius-medium);
    justify-items: center;
    width: 100%;
    box-shadow: var(--card-box-shadow);
  }

  .header {
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: var(--font-weight-light);
    letter-spacing: 1px;
  }
</style>

<template>
  <router-link class="brief" :to="path">
    <div class="card-content">
      <div class="title">{{ title }}</div>
      <div class="main">
        <div class="summary">{{ summary }}</div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  summary: string;
  path: string;
}
defineProps<Props>();
</script>
<style lang="scss" scoped>
.brief {
  height: 160px;
  width: calc(100% / 3);
  padding: 8px;
  box-sizing: border-box;
  .card-content {
    height: calc(100% - 20px);
    box-shadow: 0 0 1px var(--primary-background) inset;
    background-color: var(--primary-background);
    border-radius: 8px;
    padding: 8px;
    flex-grow: 1;
    flex-shrink: unset;
    .title {
      color: var(--c-text);
      font-weight: var(--title-font-weight);
    }
    .main {
      color: var(--c-text-lighter, #8d9788);
      margin: 12px 0;
      font-size: 14px;
    }
  }
}
a:hover {
  text-decoration: none;
}
</style>

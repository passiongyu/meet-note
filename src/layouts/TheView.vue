<template>
  <div class="layout-container d-flex">
    <TheSidebar />

    <main class="flex-grow-1 p-3">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheSidebar from './TheSidebar.vue'
</script>

<style scoped>
.layout-container {
  min-height: calc(100vh - 60px);
}
</style>

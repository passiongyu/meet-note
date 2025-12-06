<template>
  <TheHeader></TheHeader>
  <div class="app-div">
    <TheSidebar @tree-node-select="onTreeNodeSelect" />
    <TheView />
  </div>
</template>

<script setup>
import getNotes from './api/post'
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
import TheView from './layouts/TheView.vue'

const onTreeNodeSelect = async (key) => {
  const { data, headers } = await getNotes()
  console.log(data)
}
</script>

<style scoped>
.app-div {
  display: flex;
}
</style>

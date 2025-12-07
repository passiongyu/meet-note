<template>
  <TheHeader></TheHeader>
  <div class="app-div">
    <TheSidebar @tree-node-select="onTreeNodeSelect" />
    <TheView :noteList="noteList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import getNotes from './api/post'
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
import TheView from './layouts/TheView.vue'

const noteList = ref(null)

const onTreeNodeSelect = async (key) => {
  const { data, headers } = await getNotes()
  noteList.value = data
}
</script>

<style scoped>
.app-div {
  display: flex;
}
</style>

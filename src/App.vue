<template>
  <TheHeader></TheHeader>
  <div class="app-div">
    <TheSidebar @tree-node-select="onTreeNodeSelect" />
    <TheView :noteList="noteList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
import TheView from './layouts/TheView.vue'
import { getNotes, getPosts } from './api/post'

const noteList = ref(null)

const onTreeNodeSelect = async (key) => {
  const { data, headers } = await getNotes()

  const result = await getPosts()
  console.log(result.data)
  noteList.value = data
}
</script>

<style scoped>
.app-div {
  display: flex;
}
</style>

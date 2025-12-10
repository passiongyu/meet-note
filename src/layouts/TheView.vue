<template>
  <div class="layout-container d-flex">
    <main class="flex-grow-1 p-3">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  noteList: {
    type: Object,
  },
})

// watchEffect(() => {
//   console.log('noteList render', props.noteList)
//   router.push({ name: 'NoteList', params: {} })
// })
</script>

<style scoped>
.layout-container {
  min-height: calc(100vh - 60px);
}
</style>

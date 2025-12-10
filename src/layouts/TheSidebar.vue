<template>
  <div class="sidebar bg-light border-end">
    <div>
      <button style="width: 100%" type="button" class="btn btn-primary" @click="registNote">
        새 노트 작성
      </button>
    </div>
    <!-- <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul> -->

    <TheTree @tree-node-select="viewNoteList"></TheTree>
  </div>
</template>

<script setup>
import TheTree from '@/layouts/TheTree.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emit = defineEmits(['tree-node-select'])

const viewNoteList = (key) => {
  emit('tree-node-select', key)
  router.push({ name: 'NoteList' })
}

const registNote = () => {
  router.push({ name: 'NoteCreate' })
}
</script>

<style scoped>
.sidebar {
  width: 240px;
}
</style>

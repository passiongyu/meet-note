<template>
  <h2>노트 목록</h2>
  <p>{{ userStore.name }}</p>
  <div class="list-div">
    <div v-for="obj in noteList">
      <NoteItem :noteId="obj.noteId" :title="obj.title" :createdAt="obj.createdAt"></NoteItem>
    </div>
  </div>
</template>

<script setup>
import { getNotes } from '@/api/post'
import NoteItem from '@/components/notes/NoteItem.vue'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

let noteList = ref([])

const userStore = useUserStore()
userStore.login()

onMounted(async () => {
  const { data, headers } = await getNotes()
  noteList.value = data.data

  console.log(noteList)
})
</script>

<style scoped>
.list-div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

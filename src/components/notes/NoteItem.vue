<template>
  <div class="note-item-div">
    <div>{{ noteId }}</div>
    <div>{{ title }}</div>
    <div>{{ createdAt }}</div>
  </div>
</template>

<script setup>
const { noteId, title, createdAt } = defineProps({
  noteId: {
    type: String,
  },
  title: {
    type: String,
  },
  createdAt: {
    type: String,
  },
})
</script>

<style scoped>
.note-item-div {
  display: flex;
  gap: 20px;
  padding: 10px 12px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
</style>

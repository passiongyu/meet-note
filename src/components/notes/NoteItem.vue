<template>
  <div class="note-item-div">
    <div>{{ props.noteId }}</div>
    <div>{{ props.title }}</div>
    <div>{{ props.createdAt }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  noteId: {
    type: String,
  },
  title: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
})
</script>

<style scoped>
.note-item-div {
  display: flex;
  gap: 20px;
}
</style>

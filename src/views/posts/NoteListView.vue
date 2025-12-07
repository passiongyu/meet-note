<template>
  <div>PostList</div>
</template>

<script setup>
import getNotes from '@/api/post'
import { onMounted } from 'vue'

onMounted(async () => {
  const { data, headers } = await getNotes()
  console.log(data)
  // console.log(headers)
})
</script>

<style lang="scss" scoped></style>

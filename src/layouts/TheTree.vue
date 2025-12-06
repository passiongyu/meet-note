<template>
  <div>
    <Tree :value="nodes" selectionMode="single">
      <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
      </template>
    </Tree>
  </div>
</template>

<script setup>
import Tree from 'primevue/tree'
import { ref } from 'vue'

const nodes = ref(null)
nodes.value = [
  {
    key: '0',
    label: '전체노트',
    data: 'Total Note',
    icon: 'pi pi-home',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-folder',
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-folder',
      },
    ],
  },
  {
    key: '1',
    label: '휴지통',
    data: 'Trash Note',
    icon: 'pi pi-trash',
  },
]
</script>

<style scoped></style>

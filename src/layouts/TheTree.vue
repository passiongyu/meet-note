<template>
  <div>
    <Tree :value="nodes" selectionMode="single" @node-select="onNodeSelect">
      <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
      </template>
    </Tree>
  </div>
</template>

<script setup>
import Tree from 'primevue/tree'
import { ref } from 'vue'
const emit = defineEmits(['tree-node-select'])

const nodes = ref(null)
nodes.value = [
  {
    key: '23',
    label: '전체노트',
    data: 'Total Note',
    icon: 'pi pi-home',
    children: [
      {
        key: '23-1',
        label: '개인폴더1',
        data: 'Work Folder',
        icon: 'pi pi-folder',
      },
      {
        key: '23-2',
        label: '개인폴더2',
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

const onNodeSelect = (data) => {
  console.log(data.key)
  emit('tree-node-select', data.key)
}
</script>

<style scoped></style>

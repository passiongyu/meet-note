<template>
  <div>
    <Tree
      :value="nodes"
      :selectionMode="'single'"
      @node-select="onClickNodeSelect"
      class="w-full md:w-[30rem]"
    >
      <template #default="slotProps">
        <!-- <div>{{ slotProps.node }}</div> -->
        <span style="color: blue">{{ slotProps.node.label }}</span>
      </template>
    </Tree>
  </div>
</template>

<script setup>
import Tree from 'primevue/tree'
import { ref } from 'vue'

const nodes = ref([
  {
    key: '0',
    label: '폴더1',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-cog',
        children: [
          {
            key: '0-0-0',
            label: 'Expenses.doc',
            icon: 'pi pi-fw pi-file',
            data: 'Expenses Document',
          },
          { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' },
        ],
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-home',
        children: [
          {
            key: '0-1-0',
            label: 'Invoices.txt',
            icon: 'pi pi-fw pi-file',
            data: 'Invoices for this month',
          },
        ],
      },
    ],
  },
  { key: '1', label: '폴더2', data: 'Documents Folder2', icon: 'pi pi-fw pi-inbox' },
])

const onClickNodeSelect = () => {
  alert('hello')
}
</script>

<style lang="scss" scoped></style>

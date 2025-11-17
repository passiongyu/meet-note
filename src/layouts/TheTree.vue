<template>
  <div class="p-4">
    <button @click="addFolderToRoot">+</button>

    <Tree
      :value="nodes"
      :selectionMode="'single'"
      @node-select="onClickNodeSelect"
      class="w-full md:w-[30rem] mt-4"
    >
      <template #default="slotProps">
        <div class="flex items-center gap-2">
          <!-- 편집 모드 -->
          <div v-if="editingNodeKey === slotProps.node.key" class="flex-1">
            <input
              type="text"
              v-model="newFolderName"
              @keyup.enter="finishEditing(slotProps.node)"
              @blur="finishEditing(slotProps.node)"
              :data-key="slotProps.node.key"
              class="border p-1 w-full"
              autofocus
            />
          </div>

          <!-- 일반 모드 -->
          <div v-else class="flex-1 flex items-center justify-between">
            <span>{{ slotProps.node.label }}</span>
          </div>
        </div>
      </template>
    </Tree>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Tree from 'primevue/tree'

const nodes = ref([
  {
    key: '0',
    label: '폴더1',
    children: [],
  },
])

const editingNodeKey = ref(null)
const newFolderName = ref('')

// 루트에 바로 폴더 추가
const addFolderToRoot = async () => {
  const newKey = Date.now().toString()

  nodes.value.push({
    key: newKey,
    label: '',
    children: [],
  })

  editingNodeKey.value = newKey
  newFolderName.value = ''

  await nextTick()
  focusInput(newKey)
}

// 특정 노드 아래 자식 폴더 추가
const addFolder = async (parentNode) => {
  const newKey = Date.now().toString()

  if (!parentNode.children) parentNode.children = []

  parentNode.children.push({
    key: newKey,
    label: '',
    children: [],
  })

  editingNodeKey.value = newKey
  newFolderName.value = ''

  await nextTick()
  focusInput(newKey)
}

// input에 포커스
const focusInput = (key) => {
  const inputEl = document.querySelector(`input[data-key='${key}']`)
  if (inputEl) inputEl.focus()
}

// 입력 완료
const finishEditing = (node) => {
  if (!newFolderName.value.trim()) {
    removeNode(nodes.value, node.key)
  } else {
    node.label = newFolderName.value.trim()
  }
  editingNodeKey.value = null
}

// 재귀로 노드 삭제
const removeNode = (tree, key) => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].key === key) {
      tree.splice(i, 1)
      return true
    }
    if (tree[i].children) {
      const removed = removeNode(tree[i].children, key)
      if (removed) return true
    }
  }
  return false
}

const onClickNodeSelect = (e) => {
  console.log('선택된 노드:', e.node)
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>

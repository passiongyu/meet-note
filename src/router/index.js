import HomeView from '@/views/HomeView.vue'
import NoteListView from '@/views/posts/NoteListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/notes', name: 'NoteList', component: NoteListView },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router

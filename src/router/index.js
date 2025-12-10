import HomeView from '@/views/HomeView.vue'
import NoteCreateView from '@/views/posts/NoteCreateView.vue'
import NoteListView from '@/views/posts/NoteListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/notes', name: 'NoteList', component: NoteListView },
  { path: '/notes/create', name: 'NoteCreate', component: NoteCreateView },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router

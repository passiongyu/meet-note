import HomeView from '@/views/HomeView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/posts', name: 'PostList', component: PostListView },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router

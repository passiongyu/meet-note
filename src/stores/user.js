import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    name: 'mingyu',
  }),
  getters: {
    getUserName() {
      return this.name
    },
  },
  actions: {
    login() {
      this.name = 'test'
      alert(this.name)
    },
  },
})

<template>
  <div class="sidebar bg-light border-end">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 240px;
}
</style>

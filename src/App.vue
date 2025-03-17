<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #f0f0f0;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #765;
}
</style>
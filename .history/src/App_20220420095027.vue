<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/zmwk">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import ZMWK from './components/vue-zmwk.vue'

export default {
  name: 'App',
  // components: {
  //   ZMWK,
  // },
}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  min-width: 1700px;
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>

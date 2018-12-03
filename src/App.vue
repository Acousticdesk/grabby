<template>
  <div id="app">
    <h1>Grabby 🍿</h1>
    <router-view />
  </div>
</template>

<script>

  export default {
    name: 'app',
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  button {
    background: none;
    outline: none;
    border: none;
    font-size: 16px;
  }
  button:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
</style>

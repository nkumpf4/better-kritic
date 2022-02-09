<template >
<div class="bg-gray-800">
  <router-view/>
  <bottom-nav/>
</div>
</template>
<script>
import bottomNav from "./components/global/BottomNav.vue";

export default {
  components: {
    bottomNav
  }
}
</script>


<style>
body, html {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: blue;
}
</style>

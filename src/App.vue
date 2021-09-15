<template>
  <div class="bg-gray-900 min-h-screen text-white text-center">
    <Profile />
  </div>
</template>

<script>
import Profile from "./pages/Profile.vue";

export default {
  name: "App",
  components: {
    Profile,
  },
};
</script>

<style>
#app {
  /* font-family: Helvetica, Avenir, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

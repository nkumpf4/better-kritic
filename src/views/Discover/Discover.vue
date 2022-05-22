<template>
  <div class="flex flex-col min-h-screen infinite-bg-gradient">
    <div class="flex flex-row items-center justify-start p-4">
      <input
        class="w-full h-10 pl-8 pr-2 text-white bg-white rounded-lg shadow-inner outline-none bg-opacity-10 focus:ring-2 focus:ring-green-500"
      />
      <div class="absolute px-1 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          class="w-6 h-6"
        >
          <rect fill="none"></rect>
          <circle
            cx="116"
            cy="116"
            r="84"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></circle>
          <line
            x1="175.4"
            y1="175.4"
            x2="224"
            y2="224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      </div>
    </div>
    <div class="box-border grid flex-1 grid-cols-3 gap-2">
      <movie-card v-for="x in 33" :key="x" :review="review" />
    </div>
  </div>
</template>

<script>
import MovieCard from "./components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
};
</script>

<style scoped>
.infinite-bg-gradient {
  background: rgb(17, 24, 39);
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 1) 0%,
    rgba(6, 78, 59, 1) 33%,
    rgb(9, 96, 117) 66%,
    rgba(17, 24, 39, 1) 100%
  );
  background-size: 100% 400vh;
}
</style>

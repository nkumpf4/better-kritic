<template>
  <div class="relative flex flex-col items-center min-h-screen">
    <div
      class="absolute flex flex-row items-center justify-start w-full h-12 text-white"
    >
      <div @click="$router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mx-3 my-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col justify-center overflow-hidden h-96">
      <img src="@/assets/moviePosters/Uncharted.jpg" alt="" />
    </div>
    <div
      class="relative w-full text-white rounded-t-lg oveflow-hidden infinite-bg-gradient -top-16"
    >
      <div class="flex flex-col items-center pt-4 bg-white bg-opacity-10">
        <div class="text-4xl font-bold">Uncharted</div>
        <div>
          This is a description of the movie uncharted. It is a treasure hunting
          movie based on a video game.
        </div>
        <div class="flex flex-row justify-between w-full px-4">
          <div>Stat 1</div>
          <div>Stat 2</div>
          <div>Stat 3</div>
          <div>Stat 4</div>
        </div>
        <button class="w-32 p-2 my-6 bg-green-500 rounded-lg">
          Write a Review
        </button>
      </div>
      <div class="pt-2 text-2xl font-bold">Kritics you Follow</div>
      <div class="flex flex-row items-center">
        <div class="py-6 mr-4 text-6xl font-bold">
          8.0
        </div>
        <div class="flex flex-row text-left">
          <div class="mr-4">
            <div>
              <span class="text-sm">Story</span>
              <star-row :rating="3" />
            </div>
            <div>
              <span class="text-sm">Production</span>
              <star-row :rating="4" />
            </div>
          </div>
          <div>
            <div>
              <span class="text-sm">Cinematography & Sound</span>
              <star-row :rating="4" />
            </div>
            <div>
              <span class="text-sm">Entertainment</span>
              <star-row :rating="5" />
            </div>
          </div>
        </div>
      </div>
      <div id="feed" class="flex flex-col min-h-screen">
        <div class="box-border flex-1 pt-8 infinite-bg-gradient">
          <review-card
            v-for="(review, index) in reviews"
            :key="`review-${index}`"
            :review="review"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRow from "@/components/global/StarRow.vue";
import ReviewCard from "@/views/Feed/components/ReviewCard.vue";
import reviews from "@/views/Feed/reviews2.json";

export default {
  components: {
    StarRow,
    ReviewCard,
  },
  created() {
    this.reviews = reviews;
  },
} 
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

<template>
  <div id="feed" class="flex flex-col min-h-screen">
    <div class="box-border flex-1 pt-8 infinite-bg-gradient">
      <review-card
        v-for="(review, index) in reviews"
        :key="`review-${index}`"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import ReviewCard from "./components/ReviewCard.vue";
import reviews from "./reviews2.json";

export default {
  components: {
    ReviewCard,
  },
  data() {
    return {
      message: "Hello",
    };
  },
  created() {
    this.reviews = reviews;
  },
  methods: {
    toggleLike(review) {
      if (review.likedStatus === true) {
        review.likes--;
        review.likedStatus = false;
      } else {
        review.likes++;
        review.likedStatus = true;
      }
    },
    averageRating(review) {
      let arr = Object.values(review.rating);
      return (arr.reduce((a, b) => a + b) / arr.length) * 2;
    },
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

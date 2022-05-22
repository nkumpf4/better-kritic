<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col p-4 mb-8 bg-white rounded bg-opacity-5 sm:w-120">
      <div class="flex flex-row items-center mb-2">
        <div class="w-6 h-6 mr-2 overflow-hidden bg-white rounded-full">
          <img src="" alt="" />
        </div>
        <router-link class="flex-1 text-sm font-semibold text-left text-white" :to="'/profile/' + review.critic.name">
          {{ review.critic.name }}
        </router-link>
      </div>
      <div class="mb-2 font-bold text-center text-white">
        {{ review.movie.title }}
      </div>
      <div class="flex flex-row mb-4">
        <div class="relative w-1/2 pr-2">
          <div class="bg-white rounded h-72"></div>
        </div>
        <div class="flex flex-col justify-between w-1/2 pl-2 text-white">
          <div class="text-left">
            <span class="text-6xl font-bold">
              {{ averageRating(review.rating) }}
            </span>
            <span class="text-sm">/10</span>
          </div>
          <div
            v-for="(rating, category) in review.rating"
            :key="rating"
            class="font-light text-left capitalize"
          >
            <div class="flex flex-row">
              <div
                v-for="star in 5"
                :key="star"
                :class="
                  star <= rating ? 'text-green-400' : 'text-white opacity-25'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
            <div class="text-xs">{{ category }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center mb-2 text-white">
        <svg
          @click="toggleLike(review)"
          :class="{ 'text-green-400': review.likedStatus }"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-1 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          />
        </svg>
        <div class="text-sm font-semibold select-none">
          {{ review.likes }} Likes
        </div>
      </div>
      <div class="mb-2 text-sm text-left text-white">
        <span class="mr-2 font-semibold">{{ review.critic.name }}</span
        >{{ review.review }}
      </div>
      <div class="text-xs font-light text-left text-white">
        {{ review.timestamp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      default: null,
      type: Object,
    },
  },
  methods: {
    averageRating: (rating) => {
      return Object.values(rating).reduce((a, b) => a + b, 0) / 2;
    },
  },
};
</script>

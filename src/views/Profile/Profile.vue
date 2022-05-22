<template>
  <div
    class="relative flex flex-col justify-center text-white infinite-bg-gradient"
  >
    <div class="flex flex-row items-center justify-start h-12 ">
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
    <div
      class="flex flex-col items-center justify-start px-4 pb-4 mt-12 bg-white bg-opacity-10 rounded-2xl"
    >
      <div class="relative h-12">
        <div class="relative w-24 h-24 overflow-hidden -top-12 rounded-xl">
          <img class="w-full h-full" src="@/assets/profiles/profile.jpg" />
        </div>
      </div>
      <div class="my-4 text-3xl font-semibold">{{user.name}}</div>
      <div class="flex flex-row mt-2">
        <div class="mx-2">
          <div class="font-bold">{{ user.followers }}</div>
          <div class="text-sm font-light">Followers</div>
        </div>
        <div class="mx-2">
          <div class="font-bold">{{ user.following }}</div>
          <div class="text-sm font-light">Following</div>
        </div>
      </div>
      <button class="w-24 p-2 mt-6 bg-green-500 rounded-lg ">Follow</button>
      <div class="my-4 text-sm">
        Hello my name is {{user.firstName}}, and I love watching movies.
      </div>
    </div>

    <div class="flex flex-col mt-8 mb-24">
      <div class="flex flex-row flex-start">
        <div
          class="p-1 mr-2 text-lg uppercase transform rotate-180 bg-white rounded-l-lg bg-opacity-10 orientation-sideways"
        >
          <span class="font-bold text-green-400">TOP</span> SHELF
        </div>
        <div class="flex flex-row overflow-scroll ">
          <div
            v-for="(movie, index) in user.topShelf"
            :key="index"
            class="relative flex-shrink-0 w-24 h-32 mr-2 border rounded"
          >
            <div>
              <div
                class="absolute top-0 right-0 p-0.5 bg-gray-800 bg-opacity-50 border-l border-b rounded-bl"
              >
                {{ movie.rating }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-4 flex-start">
        <div
          class="p-1 mr-2 text-lg font-bold uppercase transform rotate-180 bg-white rounded-l-lg bg-opacity-10 orientation-sideways"
        >
          MOVIES
        </div>
        <div class="flex flex-row overflow-scroll ">
          <div
            v-for="(movie, index) in user.movies"
            :key="index"
            class="relative flex-shrink-0 w-24 h-32 mr-2 border rounded"
          >
            <div>
              <div
                class="absolute top-0 right-0 p-0.5 bg-gray-800 bg-opacity-50 border-l border-b rounded-bl"
              >
                {{ movie.rating }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row mt-4 flex-start">
        <div
          class="p-1 mr-2 text-lg uppercase transform rotate-180 bg-white rounded-l-lg bg-opacity-10 orientation-sideways"
        >
          <span class="font-bold text-green-400">TOP</span> SHELF
        </div>
        <div class="flex flex-row overflow-scroll ">
          <div
            v-for="(movie, index) in user.topShelf"
            :key="index"
            class="relative flex-shrink-0 w-24 h-32 mr-2 border rounded"
          >
            <div>
              <div
                class="absolute top-0 right-0 p-0.5 bg-gray-800 bg-opacity-50 border-l border-b rounded-bl"
              >
                {{ movie.rating }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "nkumpf4",
        name: "John Brown",
        firstName: "John",
        lastName: "Brown",
        bio: "I like turtles",
        reviews: 27,
        followers: 500,
        following: 483,
        topShelf: [
          {
            title: "The Lord of the Rings: Return of the King",
            rating: 9.5,
          },
          {
            title: "Star Wars: The Empire Strikes Back",
            rating: 9.0,
          },
          {
            title: "What a Girl Wants",
            rating: 7.0,
          },
          {
            title: "Fantastic Mr. Fox",
            rating: 8.0,
          },
          {
            title: "Robin Hood",
            rating: 7.5,
          },
        ],
        movies: [
          {
            title: "The Lord of the Rings: Return of the King",
            rating: 9.5,
          },
          {
            title: "Star Wars: The Empire Strikes Back",
            rating: 9.0,
          },
          {
            title: "What a Girl Wants",
            rating: 7.0,
          },
          {
            title: "Fantastic Mr. Fox",
            rating: 8.0,
          },
          {
            title: "Robin Hood",
            rating: 7.5,
          },
        ],
        shows: [
          {
            title: "The Lord of the Rings: Return of the King",
            rating: 9.5,
          },
          {
            title: "Star Wars: The Empire Strikes Back",
            rating: 9.0,
          },
          {
            title: "What a Girl Wants",
            rating: 7.0,
          },
          {
            title: "Fantastic Mr. Fox",
            rating: 8.0,
          },
          {
            title: "Robin Hood",
            rating: 7.5,
          },
        ],
      },
    };
  },
  created() {
    this.user.name = this.$route.params.name;
    this.user.firstName = this.user.name.split(' ')[0];
    this.user.lastName = this.user.name.split(' ')[1];
  }
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

.orientation-sideways {
  text-orientation: sideways-right;
  writing-mode: vertical-lr;
}
</style>

<template>
  <div class="flex flex-col text-white">
    <div class="flex flex-row items-center justify-center px-4 pt-4">
      <div class="absolute left-0 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
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
      <div class="flex-1 font-bold">{{ user.username }}</div>
    </div>

    <div class="flex flex-row items-center mx-4 mt-4">
      <div class="w-16 h-16 mr-4 bg-white rounded-full"></div>
      <div class="flex flex-row justify-center flex-1">
        <div class="mx-4">
          <div class="font-bold">{{ user.reviews }}</div>
          <div class="text-sm">Reviews</div>
        </div>
        <div class="mx-4">
          <div class="font-bold">{{ user.followers }}</div>
          <div class="text-sm">Followers</div>
        </div>
        <div class="mx-4">
          <div class="font-bold">{{ user.following }}</div>
          <div class="text-sm">Following</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start mx-4 mt-2 text-sm">
      <div class="font-semibold">{{ user.name }}</div>
      <div class="font-light">{{ user.bio }}</div>
    </div>
    <button class="py-1 mx-4 mt-2 bg-green-500 rounded">Follow</button>
    <div class="mt-8 ml-4">
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
      <div class="text-lg font-bold text-left">Top Shelf</div>
    </div>
    <div class="mt-4 ml-4">
      <div class="flex flex-row overflow-scroll">
        <div
          v-for="(movie, index) in user.movies"
          :key="index"
          class="relative flex-shrink-0 w-24 h-32 mr-2 border rounded"
        >
          <div
            class="absolute top-0 right-0 p-0.5 bg-gray-800 bg-opacity-50 border-l border-b rounded-bl"
          >
            {{ movie.rating }}
          </div>
        </div>
        <div
          class="flex flex-col items-center self-center flex-shrink-0 p-2 mr-2 text-lg font-bold"
        >
          <div>See More</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="text-lg font-bold text-left">Movies</div>
    </div>
    <div class="mt-4 ml-4">
      <div class="flex flex-row overflow-scroll">
        <div
          v-for="(show, index) in user.shows"
          :key="index"
          class="relative flex-shrink-0 w-24 h-32 mr-2 border rounded"
        >
          <div
            class="absolute top-0 right-0 p-0.5 bg-gray-800 bg-opacity-50 border-l border-b rounded-bl"
          >
            {{ show.rating }}
          </div>
        </div>
        <div
          class="flex flex-col items-center self-center flex-shrink-0 p-2 mr-2 text-lg font-bold"
        >
          <div>See More</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="text-lg font-bold text-left">TV Shows</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "nkumpf4",
        name: "Noah Kumpf",
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
};
</script>

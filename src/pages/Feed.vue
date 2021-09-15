<template>
  <div id="feed" class="bg-gray-800 flex flex-col min-h-screen">
    <div
      class="text-green-400 text-2xl text-left py-2 px-4 fixed bg-gray-800 w-full shadow-md italic z-10 flex flex-row items-center"
    >
      <div class="flex-1">
        <span class="font-bold">Better</span><span>Kritic</span>
      </div>
      <div class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
          />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="box-border flex-1 infinite-bg-gradient pt-8 mt-8">
      <div
        v-for="(review, index) in reviews"
        :key="`review-${index}`"
        class="mx-4 flex flex-col mb-8"
      >
        <div class="flex flex-row items-center mb-2">
          <div class="rounded-full bg-white h-6 w-6 mr-2 overflow-hidden">
            <img src="" alt="" />
          </div>
          <div class="text-white text-left flex-1 font-semibold text-sm">
            {{ review.critic.name }}
          </div>
        </div>
        <div class="text-white font-bold text-center mb-2">
          {{ review.movie.title }}
        </div>
        <div class="flex flex-row mb-4">
          <div class="w-1/2 pr-2 relative">
            <div
              class="
                  absolute
                  top-o
                  right-0
                  mr-2
                  p-3
                  text-white text-3xl
                  font-bold
                  bg-gray-800 bg-opacity-75
                  rounded-tr rounded-bl
                "
            >
              {{ averageRating(review) }}
            </div>
            <img :src="review.movie.img" class="rounded max-h-96" alt="" />
          </div>
          <div
            class="pl-2 text-white flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:content-start justify-between"
          >
            <div
              v-for="(rating, category) in review.rating"
              :key="rating"
              class="capitalize font-light text-left sm:w-1/2 sm:mb-16"
            >
              {{ category }}
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
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-white flex flex-row mb-2 items-center">
          <svg
            @click="toggleLike(review)"
            :class="{ 'text-green-400': review.likedStatus }"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 cursor-pointer mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            />
          </svg>
          <div class="select-none text-sm font-semibold">
            {{ review.likes }} Likes
          </div>
        </div>
        <div class="text-white text-sm mb-2 text-left">
          <span class="font-semibold mr-2">{{ review.critic.name }}</span
          >{{ review.review }}
        </div>
        <div class="text-white text-xs font-light text-left">
          {{ review.timestamp }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
      reviews: [
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
        {
          critic: {
            name: "nkumpf4",
            img:
              "https://www.zooportraits.com/wp-content/uploads/2019/10/Dhole-Cuon-Alpinism.jpg",
          },
          movie: {
            title: "The Secret Life of Walter Mitty",
            img:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
          },
          rating: {
            story: 5,
            production: 5,
            entertainment: 4,
            "cinematography & sound": 5,
          },
          review:
            "I love this movie so much it's just amazing and I love the music and the movie also the music is good and it was a great movie.",
          likes: 124,
          likedStatus: false,
          timestamp: "1 day ago",
        },
      ],
    };
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
    rgba(30, 58, 138, 1) 66%,
    rgba(17, 24, 39, 1) 100%
  );
  background-size: 100% 400vh;
}
</style>

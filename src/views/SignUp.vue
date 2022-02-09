<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-800 md:flex-row"
  >
    <div
      class="flex flex-col items-center justify-center mx-auto bg-gray-800 md:w-1/2"
    >
      <div class="w-60 md:w-96">
        <input
          type="text"
          name="username"
          class="w-full p-2 my-1 bg-gray-700 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          class="w-full p-2 my-1 bg-gray-700 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          class="w-full p-2 my-1 bg-gray-700 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Password"
        />
        <div
          class="flex flex-row justify-between w-full mt-1 mb-4 text-sm text-right text-gray-500"
        >
          <div class="flex flex-row items-center">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              class="mr-1 leading-1 active-background "
            />
            <label for="remember-me">I agree to the terms and conditions</label>
          </div>
        </div>
        <button
          class="w-full p-2 my-2 font-bold text-white bg-green-500 rounded-lg"
        >
          Sign Up
        </button>
        <div class="flex flex-row items-center w-full my-4 text-gray-400">
          <div class="flex-1 h-px bg-gray-400"></div>
          <div class="mx-2 text-xs">OR</div>
          <div class="flex-1 h-px bg-gray-400"></div>
        </div>
        <div class="flex flex-row justify-center">
          <button
            class="flex flex-row justify-center w-16 h-10 p-2 mx-2 my-2 font-bold text-white border border-gray-400 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
          </button>
          <button
            class="flex flex-row justify-center w-16 h-10 p-2 mx-2 my-2 font-bold text-white border border-gray-400 rounded-lg"
          >
            <svg
              class="h-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              viewBox="0 0 814 1000"
              enable-background="new 0 0 814 1000"
              xml:space="preserve"
              fill="white"
            >
              <path
                d="M788.1,340.9c-5.8,4.5-108.2,62.2-108.2,190.5c0,148.4,130.3,200.9,134.2,202.2c-0.6,3.2-20.7,71.9-68.7,141.9  c-42.8,61.6-87.5,123.1-155.5,123.1s-85.5-39.5-164-39.5c-76.5,0-103.7,40.8-165.9,40.8s-105.6-57-155.5-127  C46.7,790.7,0,663,0,541.8c0-194.4,126.4-297.5,250.8-297.5c66.1,0,121.2,43.4,162.7,43.4c39.5,0,101.1-46,176.3-46  C618.3,241.7,720.7,244.3,788.1,340.9z M554.1,159.4c31.1-36.9,53.1-88.1,53.1-139.3c0-7.1-0.6-14.3-1.9-20.1  c-50.6,1.9-110.8,33.7-147.1,75.8c-28.5,32.4-55.1,83.6-55.1,135.5c0,7.8,1.3,15.6,1.9,18.1c3.2,0.6,8.4,1.3,13.6,1.3  C464,230.7,521.1,200.3,554.1,159.4z"
              />
            </svg>
          </button>
          <button
            class="flex flex-row justify-center w-16 h-10 p-2 mx-2 my-2 font-bold text-white border border-gray-400 rounded-lg"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14222 14222"
            >
              <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
              <path
                d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div class="my-16 mb-8">
          <div class="text-sm text-gray-400">
            Already have an account?
            <router-link to="/signin" class="font-bold text-green-400">
              Sign In
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-1/2">
      <div class="mb-6 text-4xl italic text-green-400">
        <span class="font-bold">Better</span>Kritic
      </div>
      <div class="mt-8 mb-8 text-sm">
        <p class="font-bold">
          The reviews are smarter
        </p>
        <p>You and your friends be the critics.</p>
      </div>
    </div>
  </div>
</template>

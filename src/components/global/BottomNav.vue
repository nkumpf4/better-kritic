<template>
  <div
    class="fixed bottom-0 z-10 flex flex-row items-center w-full h-12 text-white bg-gray-800 shadow-2xl justify-evenly"
  >
    <router-link to="/feed" class="h-full px-4 py-3 transition cursor-pointer hover:text-white" :class="activeRoute === 'Feed' ? 'text-white' : 'text-green-400'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        class="w-6 h-6"
      >
        <rect width="256" height="256" fill="none"></rect>
        <rect
          x="32"
          y="48"
          width="192"
          height="160"
          rx="8"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></rect>
        <line
          x1="128"
          y1="48"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="32"
          y1="80"
          x2="224"
          y2="80"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="32"
          y1="176"
          x2="224"
          y2="176"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="80"
          y1="48"
          x2="80"
          y2="80"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="176"
          y1="48"
          x2="176"
          y2="80"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="80"
          y1="176"
          x2="80"
          y2="208"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="176"
          y1="176"
          x2="176"
          y2="208"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </router-link>
    <router-link to="/discover" class="h-full px-4 py-3 transition cursor-pointer hover:text-white" :class="activeRoute === 'Discover' ? 'text-white' : 'text-green-400'">
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
    </router-link>
    <router-link to="/profile/Noah Kumpf" class="h-full px-4 py-3 transition cursor-pointer hover:text-white" :class="activeRoute === 'Profile' ? 'text-white' : 'text-green-400'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        class="w-6 h-6"
      >
        <rect fill="none"></rect>
        <circle
          cx="128"
          cy="96"
          r="64"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="16"
        ></circle>
        <path
          d="M31,216a112,112,0,0,1,194,0"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    activeRoute() {
      return this.$router.currentRoute.value.name;
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center h-screen items-center w-60 mx-auto">
    <div class="mt-8 mb-8 text-sm">
      <p class="font-bold">
        The reviews are smarter
      </p>
      <p>You and your friends be the critics.</p>
    </div>
    <div class="text-green-400 text-4xl italic mb-6">
      <span class="font-bold">Better</span>Kritic
    </div>
    <input
      type="text"
      name="username"
      class="shadow-inner bg-gray-700 rounded-lg w-60 p-2 outline-none my-1 focus:ring-2 focus:ring-green-500"
      placeholder="username or email"
    />
    <input
      type="password"
      name="password"
      class="shadow-inner bg-gray-700 rounded-lg w-60 p-2 outline-none my-1 focus:ring-2 focus:ring-green-500"
      placeholder="password"
    />
    <div class="text-green-400 text-sm mb-4 text-right w-full">
      <a href="">Forgot password?</a>
    </div>
    <button class="bg-green-500 font-bold w-60 rounded-lg p-2 my-2">
      Login
    </button>
    <div class="flex flex-row w-60 items-center text-gray-400 my-4">
      <div class="h-px bg-gray-400 flex-1"></div>
      <div class="mx-2 text-xs">OR</div>
      <div class="h-px bg-gray-400 flex-1"></div>
    </div>
    <button class="bg-blue-500 font-bold w-60 rounded-lg p-2 my-2">
      Login with Facebook
    </button>
    <button class="bg-red-500 font-bold w-60 rounded-lg p-2 my-2">
      Login with Google
    </button>
    <div class="my-16 mb-8">
      <div class="text-sm">Don't have an account?</div>
      <a href="" class="text-green-400 font-bold ">Sign Up</a>
    </div>
  </div>
</template>

<style scoped>
.divider::before {
  border: 1px solid white;
  background-color: white;
  width: 5rem;
  height: 1px;
}
</style>

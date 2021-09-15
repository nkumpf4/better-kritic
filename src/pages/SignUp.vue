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
    <label for="username">Create Username</label>
    <input
      type="text"
      name="username"
      class="shadow-inner bg-gray-700 rounded-lg w-60 p-2 outline-none mt-1 mb-8 focus:ring-2 focus:ring-green-500"
      placeholder="username"
    />
    <label for="password">Create Password</label>
    <input
      type="password"
      name="password"
      class="shadow-inner bg-gray-700 rounded-lg w-60 p-2 outline-none mt-1 mb-8 focus:ring-2 focus:ring-green-500"
      placeholder="password"
    />
    <label for="Email">What's your email?</label>
    <input
      type="text"
      name="Email"
      class="shadow-inner bg-gray-700 rounded-lg w-60 p-2 outline-none mt-1 mb-8 focus:ring-2 focus:ring-green-500"
      placeholder="email"
    />
    <div class="text-green-400 text-sm mb-4 text-right w-full">
      <a href="">Forgot password?</a>
    </div>
    <button class="bg-green-500 font-bold w-60 rounded-lg p-2 my-2">
      Complete Sign-Up
    </button>
    <div class="my-16 mb-8">
      <div class="text-sm">Already have an account?</div>
      <a href="" class="text-green-400 font-bold ">Login</a>
    </div>
  </div>
</template>

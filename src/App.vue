<template>
  <div id="app" class="flex flex-col h-screen">
    <navbar />
    <div class="flex-1 flex items-center justify-center mt-[-100px]">
      <div class="grid grid-cols-6 w-[80%]">
        <!-- FIRST GRID ELEMENT -->
        <div
          class="col-span-3 flex flex-col items-start justify-center mx-auto"
        >
          <h2 class="text-left mb-5 text-5xl font-semibold text-white">Hi, my name is Andrej Korica</h2>
          <h1 class="text-left mb-5 text-2xl font-semibold text-gray-400">
            I am currently in my fifth year of college studying to become a
            software developer
          </h1>
        </div>

        <!-- SECOND GRID ELEMENT -->
        <div class="col-span-3 flex items-center justify-center">
          <img
            src="./assets/korika.jpg"
            class="w-[400px] h-[400px]"
            style="
              box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
                0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
            "
          />
        </div>
      </div>

      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
export default {
  components: {
    navbar,
  },
  return() {},
};
</script>

<style>
html,
body {
  @apply h-full m-0 p-0 bg-gray-900;
}

/* Make the root div fill the entire height */
div {
  @apply min-h-full;
}
</style>

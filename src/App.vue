<template>
  <div id="app" class="flex flex-col h-screen">
    <navbar />
    <div class="flex-1 flex items-center justify-center mt-[-100px]">
      <div class="grid grid-cols-6 w-[80%]">
        <!-- FIRST GRID ELEMENT -->
        <div
          class="col-span-3 flex flex-col items-start justify-center mx-auto"
        >
          <h2 class="text-left mb-5 text-5xl font-semibold text-white">
            Hi, my name is Andrej Korica
          </h2>
          <h1 class="text-left mb-5 text-2xl font-semibold text-gray-400">
            I am currently in my fifth year of college studying to become a
            software developer
          </h1>
          <hr class="border-t-2 border-[#bc13fe] my-5 w-[100%] mx-0" />

          <article class="flex whitespace-no-wrap overflow-x-hidden w-full">
            <div class="relative">
              <ul class="flex animate-marquee">
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
              </ul>
              <ul class="flex absolute top-0 animate-marquee2">
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
                <li class="m-8">
                  <font-awesome-icon
                    icon="fa-brands fa-js"
                    size="2xl"
                    style="color: #ffdd00"
                  />
                </li>
              </ul>
            </div>
          </article>
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

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 30s linear infinite;
}
</style>

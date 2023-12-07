<template>
  <div id="app" class="flex | flex-col | h-screen scrollbar-thumb-[#bc13fe] scrollbar-track-[#bb13fe77]">
    
    <navbar />
      <RouterView/>
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


</style>

<template>
  <div class="w-[80%] mx-auto">
    <div
      class="grid | grid-cols-12 | h-[85vh] | p-4 | bg-white border | border-gray-200 | rounded-lg shadow | dark:bg-gray-800 | dark:border-gray-700 | overflow-auto"
    >
      <div class="col-span-3">
        <div v-for="data in githubAccount" :key="data.id">
          <div
            class="p-3 | bg-white | border | border-gray-200 | rounded-lg | shadow | dark:bg-gray-900 | dark:border-gray-700"
          >
            <h1
              class="mb-1 | text-xl | font-medium | text-gray-900 | dark:text-white"
            >
              {{ data.name }}
            </h1>
            <p
              v-if="data.description"
              class="text-sm | text-gray-500 | dark:text-gray-400"
            >
              {{ data.description }}
            </p>
            <p v-else class="text-sm | text-gray-500 | dark:text-gray-400">
              No description defined
            </p>
          </div>
        </div>
      </div>
      <div
        class=" col-span-9 | p-4 | bg-white border | border-gray-200 | rounded-lg shadow | dark:bg-white | dark:border-gray-700 | overflow-auto | ml-2"
      ></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      githubAccount: "",
    };
  },
  methods: {
    async githubFetch() {
      try {
        const res = await axios.get(
          "https://api.github.com/users/andrejkorica/repos"
        );
        this.githubAccount = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    await this.githubFetch();
    console.log(this.githubAccount);
  },
};
</script>

<style>
</style>
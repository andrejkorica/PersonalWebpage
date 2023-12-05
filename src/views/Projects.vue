<template>
  <div class="w-[80%] | mx-auto">
    <!-- MAIN PARENT -->
    <div
      class="flex | h-[85vh] | p-4 | bg-white | border | border-gray-200 | rounded-lg | shadow | dark:bg-gray-800 | dark:border-gray-700 | overflow-auto"
    >
      <!-- LEFT SIDE - Repository List -->
      <div class="w-[25%] | overflow-auto">
        <div v-for="data in githubAccount" :key="data.id">
          <div
            @click="getMarkdown(data.owner.login, data.name)"
            :title="data.name"
            class="overflow-ellipsis | hover:bg-gray-800 | cursor-pointer | p-3 | bg-white | border | border-gray-200 | rounded-lg | shadow dark:bg-gray-900 | dark:border-gray-700"
          >
            <h1
              class="mb-1 | text-xl | font-medium | text-gray-900 | dark:text-white | overflow-ellipsis | line-clamp-2"
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

      <!-- RIGHT SIDE - MD READER -->
      <div
        class="flex-1 | p-4 | bg-white | border | border-gray-200 | rounded-lg | shadow | dark:bg-white | dark:border-gray-700 | overflow-auto | ml-2"
      >

      <Markdown :source = "currentMD"></Markdown>

    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Markdown from 'vue3-markdown-it';
export default {
  data() {
    return {
      githubAccount: "",
      currentMD: "",
    };
  },
  components: {
    Markdown
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
    async getMarkdown(owner, name) {
      const ownerOfRepo = owner;
      const repo = name;
      const path = "README.md";

      // GitHub API endpoint URL
      const apiUrl = `https://api.github.com/repos/${ownerOfRepo}/${repo}/contents/${path}`;

      try {
        const res = await axios.get(apiUrl, {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        });
        this.currentMD = res.data
        
        console.log(res.data);
      } catch (error) {
        console.error(error);
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
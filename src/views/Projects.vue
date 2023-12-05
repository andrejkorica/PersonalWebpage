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
            @click="getMarkdown(data.owner.login, data.name, data.clone_url)"
            :title="data.name"
            class="overflow-ellipsis | hover:bg-[#bb13fe77] | cursor-pointer | p-3 | bg-white | border | border-gray-200 | rounded-lg | shadow dark:bg-gray-900 | dark:border-gray-700"

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
        class="flex-1 p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 overflow-auto ml-2 relative"
      >
        <div v-if="DisplayMessage !== 'No repository selected'"
          class="absolute top-0 right-0 bg-green-400 w-14 h-14 rounded-full flex items-center justify-center mr-8 mt-8 hover:bg-green-600 cursor-pointer"
        >
         <a :href="repo" target="_blank"> <i class="fa-solid fa-arrow-right text-4xl text-white"></i></a>
        </div>

        <div v-if="currentMD">
          <Markdown
            :linkify="true"
            :source="currentMD"
            :anchor="{ level: 3 }"
          />
        </div>

        <div v-else class="flex items-center justify-center h-[100%]">
          <h1
            class="mb-4 font-bold font-mono text-gray-300 text-6xl text-center"
          >
            {{ DisplayMessage }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Markdown from "vue3-markdown-it";
export default {
  data() {
    return {
      githubAccount: "",
      currentMD: null,
      DisplayMessage: "No repository selected",
      repo: "",
    };
  },
  components: {
    Markdown,
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

    async getMarkdown(owner, name, clone_url) {
      this.DisplayMessage = ""
      this.currentMD = null;
      this.repo = clone_url;

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
        this.currentMD = res.data;

        console.log(res.data);
      } catch (error) {
        this.DisplayMessage = "No README in repository";
        
      }
    },
  },

  async mounted() {
    await this.githubFetch();
    console.log(this.githubAccount);
  },
};
</script>

<style scoped>
</style>
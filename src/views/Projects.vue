<template>
  <div class="w-[80%] | mx-auto">
    <!-- MAIN PARENT -->
    <div
      class="flex | h-[80vh] | p-4 | bg-white | border | border-gray-200 | rounded-lg | shadow | dark:bg-gray-800 | dark:border-gray-700 "
    >
      <!-- LEFT SIDE - Repository List -->
      <div
        class="w-[25%] | overflow-auto | overflow-y-scroll | scrollbar-rounded | scrollbar-thin | scrollbar-track-rounded-full | scrollbar-thumb-rounded-full | pr-2"
      >
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
      <ReadMePannel :githubAccount ="githubAccount" :currentMD = "currentMD" :DisplayMessage ="DisplayMessage" :repo="repo"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReadMePannel from "@/components/ReadMePannel.vue";
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
    ReadMePannel,
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
      this.DisplayMessage = "";
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
<template>
  <div class="w-[80%] | mx-auto">
    <!-- MAIN PARENT -->
    <div
      class="flex | h-[80vh] | p-4 | bg-white | border | border-gray-200 | rounded-lg | shadow | dark:bg-gray-800 | dark:border-gray-700 "
    >
      <!-- LEFT SIDE - Repository List -->
      <RepositoryList :githubAccount ="githubAccount" :getMarkdown="getMarkdown"/>

      <!-- RIGHT SIDE - MD READER -->
      <ReadMePannel v-if="$windowWidth > 768" :githubAccount ="githubAccount" :currentMD = "currentMD" :DisplayMessage ="DisplayMessage" :repo="repo"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReadMePannel from "@/components/ReadMePannel.vue";
import RepositoryList from "@/components/RepositoryList.vue";
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
    RepositoryList
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

      if($windowWidth > 768){
        
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
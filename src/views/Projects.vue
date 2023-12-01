<template>
  <div class=" w-[80%] mx-auto">
    <div v-for="data in githubAccount" :key="data.id">
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
      return{
        githubAccount: ''
      }
  },
  methods:{
    async githubFetch() {
      try {
        const res = await axios.get("https://api.github.com/users/andrejkorica/repos");
        this.githubAccount = res.data
      } catch (error) {
        console.log(error);
      }
    }
  },

  async mounted(){
    await this.githubFetch()
    console.log(this.githubAccount)
  }
}
</script>

<style>

</style>
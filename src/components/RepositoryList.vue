<template>
  <div
    class="md:w-[25%] w-[100%] | overflow-auto | overflow-y-scroll | scrollbar-rounded | scrollbar-thin | scrollbar-track-rounded-full | scrollbar-thumb-rounded-full | pr-2"
  >
    <div v-for="data in githubAccount" :key="data.id">
      <div
        @click="getMarkdown(data.owner.login, data.name, data.clone_url, $windowWidth)"
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
</template>

<script>
export default {
    props:{
        githubAccount: null,
        getMarkdown: Function,
    }
};
</script>

<style>
</style>
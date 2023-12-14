<template>
  <div
        class="flex-1 | p-12 | bg-gray-900 | border | border-gray-200 | rounded-lg | shadow | dark:border-gray-700 | overflow-auto | ml-2 | relative | overflow-y-scroll | scrollbar-rounded | scrollbar-thin | scrollbar-track-rounded-full | scrollbar-thumb-rounded-full |"
      >
        <div
          v-if="DisplayMessage !== 'No repository selected'"
          class="absolute | top-0 | right-0 | bg-[#bc13fe] | w-14 | h-14 | rounded-full |
           flex | items-center | justify-center | mr-8 | mt-8 | hover:bg-[#bb13fe77] | cursor-pointer"
        >
          <a :href="repo" target="_blank">
            <i class="fa-solid | fa-arrow-right | text-4xl | text-white"></i
          ></a>
        </div>

        <div v-if="currentMD">
          <Markdown
            :linkify="true"
            :source="currentMD"
            :anchor="{ level: 3 }"
          />
        </div>

        <div v-else class="flex | items-center | justify-center | h-[100%]">
          <h1
            class="mb-4 | font-bold | font-mono | text-gray-300 | text-6xl | text-center"
          >
            {{ DisplayMessage }}
          </h1>
        </div>
      </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
export default {
    props:{
        githubAccount: null,
        currentMD: String,
        DisplayMessage: String,
        repo: String
    },
    components:{
        Markdown,
    }
}
</script>

<style>

</style>
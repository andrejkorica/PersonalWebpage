<template>
  <nav class="full-width z-50">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between  p-8 ml-[5%]"
    >
      <div class="w-full flex">
        <ul class="flex justify-center">
          <li>
            <a href="#" class="p-4 navItems">About me</a>
          </li>
          <li>
            <a href="#" class="p-4 navItems">Projects</a>
          </li>
          <li>
            <a href="mailto:koricaandrej3@gmail.com" class="p-4 navItems">Contact me</a>
          </li>
        </ul>


      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navItems {
  @apply relative ml-10 text-gray-500 font-mono font-bold tracking-[1px] text-xl;
}

.navItems::After {
  @apply content-[''] bg-[#bc13fe] h-[3px] w-[100%] left-0 -bottom-[1px] rounded-xl absolute opacity-0 transition-opacity duration-300; 
}

.navItems:hover::after {
  @apply opacity-100
}
</style>

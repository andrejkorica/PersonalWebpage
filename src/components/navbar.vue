<template>
  <nav class="full-width">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between p-8 ml-0 md:ml-[5%]"
    >
      <div class="w-full flex">
        <ul class="flex justify-center">
          <li>
            <a href="#" class="p-4 navItems text-base md:text-lg lg:text-xl"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="p-4 navItems text-base md:text-lg lg:text-xl"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="mailto:koricaandrej3@gmail.com"
              class="p-4 navItems text-base md:text-lg lg:text-xl"
              >Contact</a
            >
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

.navItems::after {
  @apply content-[''] bg-[#bc13fe] h-[3px] w-[100%] left-0 -bottom-[1px] rounded-xl absolute opacity-0 transition-opacity duration-300;
}

.navItems:hover::after {
  @apply opacity-100;
}

.glowBurger{
  -webkit-box-shadow:0px 0px 70px 19px rgba(187,19,254,0.39);
  -moz-box-shadow: 0px 0px 70px 19px rgba(187,19,254,0.39);
  box-shadow: 0px 0px 70px 19px rgba(187,19,254,0.39);
}
</style>

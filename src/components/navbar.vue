<template>
  <nav>
    <div
      class=" flex flex-wrap items-center w-[80%] mx-auto my-7"
    >
        <ul class="flex sm:justify-start justify-between w-full">
          <li>
            <router-link :to="{ name: 'AboutMe' }" class="navItems text-base">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'projects' }" class="navItems text-base sm:ml-8">Projects</router-link>
          </li>
          <li>
            <a
              href="mailto:koricaandrej3@gmail.com"
              class="navItems text-base sm:ml-8"
              >Contact</a
            >
          </li>
        </ul>
      </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navItems {
  @apply relative text-gray-500 font-mono font-bold tracking-[1px] sm:text-xl text-lg py-3;
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

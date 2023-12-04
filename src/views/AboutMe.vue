<template>
  <div class="flex-1 | flex | md:mt-[-100px] | w-[80%] | mx-auto">
    <div class="grid | grid-cols-6">
      <!-- FIRST GRID ELEMENT -->
      <div
        class="col-span-6 | md:col-span-3 | flex flex-col | items-start | justify-center | mx-auto"
      >
        <h2 class="text-left | mb-3 | font-semibold | text-white | text-4xl">
          Hi, my name is Andrej Korica
        </h2>

        <h1
          class="text-left | mb-5 | text-xl | md:text-2xl | font-semibold  | text-gray-400"
        >
          I am currently in my fifth year of college studying to become a
          software developer
        </h1>

        <img
          v-if="$windowWidth < 768"
          src="../assets/korika.jpg"
          class="w-full | md:w-[400px] | h-auto | md:h-[400px]"
          style="
            box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
          "
        />

        <hr class="border-t-2 | border-[#bc13fe] | my-5 | w-[100%] | mx-0" />

        <article class="flex | whitespace-no-wrap | overflow-x-hidden | w-full">
          <div class="relative">
            <ul class="flex | animate-marquee">
              <li class="md:m-8 m-3">
                <img
                  src="../assets/AndroidStudio.png"
                  class="w-[70px]"
                  alt=""
                />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/C++.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/CSharp.png" class="w-[70px]" alt="" />
              </li>
              <li class="sm:m-0 | md:m-8 | m-3">
                <img src="../assets/Java.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/JavaScript.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/Kotlin.png" class="w-[70px]" alt="" />
              </li>
            </ul>
            <ul class="flex | absolute | top-0 | animate-marquee2">
              <li class="md:m-8 | m-3">
                <img src="../assets/MongoDB.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/Python.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/React.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/SQL.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/Unity.png" class="w-[70px]" alt="" />
              </li>
              <li class="md:m-8 | m-3">
                <img src="../assets/Vue.png" class="w-[70px]" alt="" />
              </li>
            </ul>
          </div>
        </article>

        <button
          @click="downloadPDF()"
          class="bg-transparen | text-purple-500 | font-semibold | hover:text-purple-700 | py-2 | px-4 | border | border-purple-500 | hover:border-purple-700 | rounded | mt-3 | mx-auto | md:mx-0"
        >
          Download my CV
        </button>
      </div>

      <!-- SECOND GRID ELEMENT -->
      <div
        class="col-span-3 | flex | items-center | justify-center"
        v-if="$windowWidth > 768"
      >
        <img
          src="../assets/korika.jpg"
          class="w-[400px] | h-[400px]"
          style="
            box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
          "
        />
      </div>
    </div>
  </div>

  <div class="pb-6 | mt-6 | cursor-pointer | mx-auto">
    <a
      href="https://www.discordapp.com/users/korikaa"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        class="fab | fa-discord | text-5xl | text-white | hover:text-[#5865F2] | cursor-pointer"
      ></i>
    </a>
    <a
      href="https://www.linkedin.com/in/andrej-korica-9a83aa240/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        class="fa-brands | fa-linkedin | text-5xl | text-white ml-5 | hover:text-[#0077b5] | cursor-pointer"
      ></i>
    </a>
    <a
      href="https://github.com/andrejkorica"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        class="fa-brands | fa-github | text-5xl | text-white | ml-5 | hover:text-[#6e5494] | cursor-pointer"
      ></i>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    async downloadPDF() {
      const cv_path = "http://localhost:5173/AndrejKorica.pdf";
      const aTag = document.createElement("a");
      aTag.href = cv_path;

      aTag.setAttribute("download", "AndrejKorica.pdf");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    },
  },
};
</script>

<style>
@keyframes marquee {
  0%,
  100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0%,
  100% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
}

.animate-marquee {
  animation: marquee 45s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 45s linear infinite;
}
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10px; /* Adjust as needed */
}

.social-icons a {
  margin: 0 5px; /* Adjust the spacing between icons */
}

@media (max-width: 767px) {
  .social-icons {
    flex-direction: column; /* Stack icons vertically on small screens */
    align-items: flex-end; /* Align icons to the right on small screens */
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10px; /* Adjust as needed */
}

.social-icons a {
  margin: 0 5px; /* Adjust the spacing between icons */
}
</style>

<template>
    <header class="bg-[#161616] md:sticky top-0 z-50 ">
        <div class="container mx-auto">
            <nav class="flex justify-between items-center">
                <div class="py-2">
                    <a href="/">
                        <img class="rounded-[50%] h-[80px]" src="../../public/logo/adfinal.png">
                    </a>
                </div>
                <div
                    class="md:static absolute bg-[#161616] md:min-h-fit min-h-[45vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                    <ul class="flex md:flex-row flex-col md:items-center gap-8">
                        <li v-for="(item, i) in navLink" :key="i">
                            <nuxt-link :to="item.link" class="text-white hover:text-[#8FD2FD] text-[20px]">{{ item.level
                            }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <button @click="downloadCv" class="bg-[#567CFF] text-white px-5 py-2 rounded-full">Download CV</button>

                    <div class="md:hidden">
                        <Icon @click="onToggleMenu" name="ph:list-bold" class="text-3xl cursor-pointer text-white"></Icon>

                    </div>
                </div>
            </nav>
          <div class="absolute block md:hidden py-4 bottom-[536px] w-full bg-[white]" v-if="isMobile">
            <div class="  ">
              <ul class=" flex justify-center px-8  gap-y-2 flex-col">
                <li class="shadow px-2 py-1" v-for="(item, i) in navLink" :key="i">
                  <nuxt-link :to="item.link" class="text-[20px]"><span><Icon color="" class="mr-2" name="fluent-emoji-flat:anchor" /></span>{{ item.level }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
<!--            <CommonMobileNav v-if="isMobile" :item="navLink" />-->
        </div>
    </header>
</template>

<script setup>
import require from '@/public/me/Anik_Chandra_CV.pdf';
const route = useRoute();
const navLink = [
    { level: "Home", link: "/" },
    { level: "Project", link: "/project" },
    { level: "Blog", link: "/blog" },
    { level: "Skill", link: "/skill" },
    { level: "Contact", link: "/contact" }
]
const isMobile = ref(false);
const isOpen= ref(false);
const isClick = ref(false);

watch(route, function (nv, ov){
  isMobile.value = false;
})
const downloadCv = () => {
    const link = document.createElement('a');
    link.href = require;
    link.setAttribute('download', 'Anik_Chandra_CV.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const onToggleMenu = () => {
    isMobile.value = !isMobile.value
}
</script>

<style scoped>
.router-link-active {
    color: #3c8fc2;
    border-left: 4px solid #567CFF;
    padding-left: 10px;
}
</style>
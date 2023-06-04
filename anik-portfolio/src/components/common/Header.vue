<template>
    <header class="bg-[#161616] sticky top-0">
        <nav class="flex justify-between items-center w-[90%] mx-auto">
            <div class="">
                <a href="/">
                    <img class="rounded-[50%] h-[80px]" src="../../public/logo/logo.png">
                </a>
            </div>
            <div class="md:static absolute bg-[#161616] md:min-h-fit min-h-[45vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center gap-8">
                    <li v-for="(item ,i) in navLink" :key="i">
                        <nuxt-link :to="item.link" class="text-white hover:text-[#8FD2FD] text-[20px]">{{ item.level }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <button class="bg-[#567CFF] text-white px-5 py-2 rounded-full" >Login</button>
                <!-- <Icon name="ph:list-bold" class="text-3xl cursor-pointer bg-[red]" ></Icon> -->
            </div>
        </nav>
    </header>
</template>

<script setup>
const navLink = [
    { level: "Home", link: "/" },
    { level: "Project", link: "/project" },
    { level: "Blog", link: "/blog" },
    { level: "Skill", link: "/skill" },
    { level: "Contact", link: "/contact" }
]
</script>

<style scoped>

.router-link-active {
  color: #3c8fc2;
  border-left: 4px solid #567CFF;
  padding-left: 10px;
}
</style>
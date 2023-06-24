<template>
    <footer class="body-font bg-[#2B2B2B] text-white pt-6 md:pt-10 pb-6 md:pb-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 ">
                <div class="flex justify-center">
                    <img class="pl-6" src="../../public/logo/ad2.png"/>
                    <!-- <p class="text-left font-[500]  text-[#567CFF] hover:text-[#3c8fc2]">Try to explore something new.</p> -->
                </div>
                <div class="flex justify-center">
                    <div v-for="(items, i) in footerLink" :key="i" class="pt-6">
                    <h3 class="pb-2 text-[20px] text-[#567CFF]" >Link</h3>
                    <div class="text-left" v-for="(item, i) in items" :key="i">
                       <nuxt-link :to="item.link">{{ item.level }}</nuxt-link>
                    </div>
                </div>
                </div>
                <div class="flex justify-center">
                    <div class="pt-6 ">
                    <h3 class="pb-2 text-[20px] text-[#567CFF]">Contact Info</h3>
                    <div v-for="(item, i) in info" :key="i">
                        <a v-if="item.level === 'address'"><Icon name="ep:location-information" class="text-[20px]"></Icon> {{ item.text }}</a>
                        <a v-if="item.level === 'email'" href="mailto:dasssanik124102@gmail.com?body=Line1-text%0D%0ALine2-text"><Icon name="system-uicons:mail" class="text-[20px]"></Icon> {{ item.text }}</a>
                        <a v-if="item.level === 'phone'" href="tel:01626838003"><Icon name="ep:phone" class="text-[20px]"></Icon> {{ item.text }}</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="pt-4">
                <hr>
                <p class="text-center text-[18px] pt-2 px-2">
                Copyright © 2023 ||<span> All Rights Reserve by Anik Das </span>
              </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const footerLink = [
  [
    { level: "About Me", link: "/about-me" },
    { level: "My Photography", link: "/photography" },
    { level: "Project", link: "/project" }
  ],
];

const info = [
  { level: "address", text: "Dhaka, Bangladesh" },
  { level: "email", text: "dasssanik124102@gmail.com" },
  { level: "phone", text: "01626838003" },
  { level: "phone", text: "01521215839" }
];
</script>

<style scoped>
.set_border {
  border: 1px solid #8fd2fd;
}
a:hover {
  color: #57a9db;
  padding-left: 5px;
  transition: 0.4s;
}
</style>
<template>
    <div class="bg-[#161616] pt-[120px]">
        <div class="container mx-auto">
            <CommonPageHeading textOne="All" textTwo="Projects" />
            <!-- Project Card  -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 px-2 md:gap-12">
                <div v-for="(item, i) in project" :key="i">
                    <div class="bg-[#2B2B2B] border-2 border-[#468dfc] rounded-lg">
                        <div>
                            <!-- <img src="../../public/ProjectPic/masterClass.png"/> -->
                            <img :src="item.image" class="rounded-lg h-[220px] w-full" />
                        </div>
                        <div>
                            <p class="py-4 text-[16px] md:text-[24px] gap-4 md:gap-0 text-white text-center">{{ item.name }}</p>
                        </div>
                        <div class="pb-4 flex  justify-center">
                            <a :href="item.link" target="_blank">
                                <button class="text-[12px] md:text-[16px] capitalize text-[#468dfc] hover:text-white rounded-lg border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2">View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center md:text-center pt-8  md:pt-12">
                <NuxtLink to="/project">
                    <button class="text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2 rounded-lg">Details About Project</button>
                </NuxtLink> 
            </div>
        </div>
    </div>
</template>

<script setup>

const project = [
    { name: "Master Class", image: "/ProjectPic/masterClass.png", link: "https://www.masterclass.com.bd/" },
    { name: "Unmilan", image: "/ProjectPic/unmilon.png", link: "https://unmilan.com/" },
    { name: "News Protal", image: "/ProjectPic/news.png", link: "https://giants-news.vercel.app/" },
    { name: "Todo App", image: "/ProjectPic/todo.png", link: "" },
    { name: "Photography Blog", image: "/ProjectPic/unmilon.png", link: "" },
    { name: "Weather App", image: "", link: "" }
]
</script>
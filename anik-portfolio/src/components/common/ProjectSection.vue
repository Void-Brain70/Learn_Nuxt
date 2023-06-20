<template>
    <div class="bg-[#161616] pt-[120px]">
        <div class="container mx-auto">
            <CommonPageHeading textOne="My" textTwo="Projects" />
            <!-- Project Card  -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 py-4 px-2 md:gap-12">
                <div v-for="(item, i) in project" :key="i">
                    <div class="bg-[#2B2B2B]">
                        <div>
                            <img src="../../public/ProjectPic/masterClass.png"/>
                        </div>
                        <div>
                            <p class="py-4 text-[16px] md:text-[24px] gap-4 md:gap-0 text-white text-center">{{ item.name }}</p>
                        </div>
                        <div class="pb-4 flex flex-col md:flex-row justify-center md:justify-evenly">
                            <button class="text-[12px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2">Read More</button>
                            <button class="text-[12px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2">View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const project = [
    { name: "LSM", image: "/public/ProjectPic/masterClass.png", link: "" },
    { name: "Photography Blog", image: "/public/ProjectPic/unmilon.png", link: "" },
    { name: "News Protal", image: "", link: "" },
    { name: "LSM", image: "/public/ProjectPic/masterClass.png", link: "" },
    { name: "Photography Blog", image: "/public/ProjectPic/unmilon.png", link: "" },
    { name: "News Protal", image: "", link: "" }
]
</script>
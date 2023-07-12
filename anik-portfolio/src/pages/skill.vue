<template>
    <div class="">
        <!-- <CommonSkillSection/> -->
        <div class="bg-[#e9e2f3]">
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#76b5c5] max-w-fit">My Programming
                            Language Skill List</h3>
                    </div>
                    <div class="flex flex-wrap justify-evenly items-center py-12">
                        <img class="h-[60px] md:h-[100px]" src="../public/skill/js.png" />
                        <img class="h-[60px] md:h-[100px]" src="../public/skill/python.png" />
                        <img class="h-[60px] md:h-[100px]" src="../public/skill/c.png" />
                        <img class="h-[60px] md:h-[100px]" src="../public/skill/cPlus.png" />
                        <img class="h-[60px] md:h-[100px]" src="../public/skill/php.png" />
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#76b5c5] max-w-fit">My Frontend Framework
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-20 py-12">
                        <img class="h-[100px]" src="../public/skill/vue.png" />
                        <img class="h-[120px]" src="../public/skill/nuxt.png" />
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#76b5c5] max-w-fit">My Backend Framework
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-evenly py-12">
                        <img class="h-[100px]" src="../public/skill/laravel.png" />
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#76b5c5] max-w-fit">My Design
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-evenly py-16">
                        <img class="h-[100px]" src="../public/skill/html.png" />
                        <img class="h-[100px]" src="../public/skill/css.png" />
                        <img class="h-[100px]" src="../public/skill/vuetify.png" />
                        <img class="h-[100px]" src="../public/skill/tailwind.png" />
                        <img class="h-[100px]" src="../public/skill/bootstrap.png" />
                        <img class="h-[100px]" src="../public/skill/sass.png" />
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script setup>
const lang = [
    { name: "LSM", image: "/public/skill/js.png", link: "" },
    { name: "Photography Blog", image: "/public/skill/python.png", link: "" },
    { name: "News Protal", image: "/public/skill/c.png", link: "" },
    { name: "LSM", image: "/public/skill/c.png", link: "" },
    { name: "Photography Blog", image: "/public/skill/cPlus.png", link: "" },
    { name: "News Protal", image: "/public/skill/php.png", link: "" }
]

</script>
<template>
    <div class="bg-[#161616] pt-[120px]">
        <div class="container mx-auto my-auto">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex items-center  px-8 order-2 md:order-1">
                    <div class="rounded-3xl bg-blue-500 shadow-2xl shadow-blue-500/50">
                        <img class="rounded-3xl" src="../../public/me/aboutMe.jpg" />
                    </div>
                </div>
                <div class="flex-col items-center px-8 py-4 order-1 md:order-2">
                    <p class="text-[20px] text-center md:text-left md:text-[32px] text-white">My <span class="text-[#567CFF]">Intro</span></p>
                    <p class="text-[28px] md:text-[42px] text-center md:text-left text-white pb-4 md:pb-8">About <span class="text-[#567CFF]">Me</span></p>
                    <p class="text-[18px] md:text-[24px] text-center md:text-left text-white pb-6">I am web developer, I create and work with different kind of website or project such as Portfolio
                        website, LSM etc. </p>
                    <div class="text-center md:text-left">
                        <NuxtLink to="/about-me">
                           <button class="text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2 rounded-lg">Read More</button>
                        </NuxtLink> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
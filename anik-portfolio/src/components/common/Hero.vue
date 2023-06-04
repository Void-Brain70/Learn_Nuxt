<template>
    <div class="bg-[#161616]">
        <div class="grid grid-cols-2 w-[90%] mx-auto h-screen">
            <div class="flex justify-center items-center ">
                <div class="">
                    <span class="text-white text-[36px] font-[400] tracking-[8px] font-['mono']">Hello, It's Me</span><br>
                    <span class="text-white text-[56px] font-[600] tracking-[15px]">Anik Das</span><br>
                    <p class="text-[#567CFF] text-[40px] font-[500] design">And I'm a Web Developer.....</p>
                    <p class="text-white text-[24px] font-[400]">I'am a web developer with extensive experience for over 1
                        year.</p>
                    <div class="flex pt-8">
                        <div v-for="(item, i) in link" :key="i + 1">
                            <a :href="item.link" target="_blank">
                                <img class="" :src="`/icon/image-${i + 1}.svg`" alt="social link" />
                            </a>
                        </div>
                    </div>
                    <div class="pt-8">
                        <NuxtLink to="/contact">
                            <button class="text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-4 rounded-full">Contact me</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="justify-center flex items-center">
                <div class="rounded-full bg-blue-500 shadow-2xl shadow-blue-500/50">
                    <img class="rounded-full h-[600px] border-2 border-[#567CFF]" src="../../public/me/Me.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const link = [
    {
        level: 'Github',
        image: "0",
        link: "https://github.com/Void-Brain70",
    },
    {
        level: 'Facebook',
        image: "1",
        link: "https://www.facebook.com/anikchandradas.abir.9/",
    },
    {
        level: 'Linkedin',
        image: "2",
        link: "https://www.linkedin.com/in/anik-chandra-a5a62022a/",
    },
    {
        level: 'Whatsapp',
        image: "3",
        link: "/",
    },
    {
        level: 'Instagram',
        image: "4",
        link: "https://www.instagram.com/dasssanik/",
    },
]
</script>

<style scoped>   .design {
       letter-spacing: 10px;
       border-right: .15em solid #567CFF;
       margin: 0 auto;
       white-space: nowrap;
       overflow: hidden;
       animation:
           typing 3.5s steps(40, end),
           blink-caret .75s step-end infinite;
   }

   @keyframes typing {
       from {
           width: 0
       }

       to {
           width: 100%
       }
   }

   @keyframes blink-caret {

       from,
       to {
           border-color: transparent
       }

       50% {
           border-color: #567CFF;
       }
   }
</style>
<template>
    <div class="bg-[#161616] ">
        <div class="grid grid-cols-3 gap-6 py-4 px-2 md:gap-12">
            <div v-for="(item, i) in project" :key="i" class="flex justify-center">
                <div class="box">
                    <img :src="item.image" class="rounded-3xl h-[220px] w-full px-1 pt-1" />
                </div>
            </div>
            <!-- <div class="box">
                <h2>CSS</h2>
            </div>
            <div class="box">
                <h2>CSS</h2>
            </div> -->
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

<style  scoped>
.body {
    /* background-color: #0e1528;
    display: flex;
    justify-content: center;
    -ms-align-items:center;
    align-items: center;
    min-height: 100vh; */
}

.box {
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    background-color:#2B2B2B;
    border-radius: 20px;
    overflow: hidden;
}

.box h2 {
    color: rgb(226, 226, 226);
    text-shadow: 2px 2px black;
    font-size: 8em;
    z-index: ;
}

.box img{
    z-index: 2;
}

.box::before {
    content: '';
    position: absolute;
    width: 170px;
    height: 160%;
    background: linear-gradient(#00ccff, #d500f9);
    animation: rotate 4s linear infinite;
}

.box::after {
    content: '';
    position: absolute;
    background: #161616;
    inset: 5px;
    border-radius: 16px;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "./src/",
    css: ['primevue/resources/themes/lara-light-blue/theme.css'],
    modules: [
        'nuxt-primevue',
    ],
    primevue: {
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    }
})

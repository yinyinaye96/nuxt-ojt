// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI
    },
    ssr: false,
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://awesome-lib.css' }
            ],
        }
    },
    css: [
        '@/assets/css/main.css',
    ],
    nitro: {
        plugins: ['@/server/db/index.ts']
        // plugins: ['@/mongoDB/db/index.ts']
    },
})

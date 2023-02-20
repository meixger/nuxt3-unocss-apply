// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetUno, transformerDirectives } from 'unocss'
export default defineNuxtConfig({
    experimental: {
        inlineSSRStyles: false,
    },
    modules: ['@unocss/nuxt'],
    unocss: {
        transformers: [
            transformerDirectives()
        ],
        presets: [
            presetUno(),
        ],
    },
    css: [
        '@unocss/reset/tailwind.css',
    ],
    // postcss: {
    //     plugins: {
    //         cssnano: false
    //     }
    // }
})

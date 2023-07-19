import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'zh-CN',
    title: '守拙',
    description: 'welkin 的互联网小窝',
    head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
    base: '/blog/',
    theme: defaultTheme({
        colorMode: 'light',
        colorModeSwitch: true,
        repo: 'https://github.com/welkinzhou/blog',
        logo: '/images/logo.jpg',
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: 'auto',
        editLink: false
    }),
    alias: {
        '@theme/HomeHero.vue': path.resolve(__dirname, './components/MyHomeHero.vue'),
    },
    plugins: [
        nprogressPlugin(),
    ],
})
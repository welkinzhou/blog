import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import HomeLink from './components/HomeLink.vue'

export default defineClientConfig({
    enhance({ app, }) {
        app.component('HomeLink', HomeLink)
    },
    layouts: {
        Layout,
    },
})
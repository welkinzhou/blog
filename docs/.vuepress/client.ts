import { defineClientConfig } from '@vuepress/client'

import HomeLink from './components/HomeLink.vue'

export default defineClientConfig({
    enhance({ app, }) {
        app.component('HomeLink', HomeLink)
    },
})
---
home: true
lang: zh-CN
title: 开始的地方
description: 记录生活，记录工作，水过留痕
footer: '<div><span class="bottom-row">E-mail: welkin105380@163.com</span></div>'
footerHtml: true
---

## 文章目录

<div class="wel-container">
    <HomeLink v-for="item in data" v-bind="item" />
</div>

<script setup>
    const data = [{
        title: 'css 笔记',
        summary: 'css 是一个需要不断积累的语言，真的。每次我以为了解了这门语言，就又会被难住。尽量把一些遇到过的问题，记录下来，苟日新，日日新。',
        path: '/articles/css'
    },{
        title: 'Three 笔记',
        summary: '看了别人的博客，同时结合 Three.js 的官方案例，简单学习了一下 Three.js。很乱，要学的东西很多，一点点来吧。Three.js 更新太快了！！',
        path: '/articles/three'
    },{
        title: '算法笔记',
        summary: '在 LeetCode 也做了一部分题，不想每次都上网站回顾。这里记录了一些，我自己觉得有意思的题目，方便自己回看。算法是不知道有用没，但是学了也没错的东西。',
        path: '/articles/algorithm'
    },{
        title: 'Vite 插件',
        summary: '使用了一段时间 Vite，开发确实很爽。平常也就谢谢业务组件，对于 Vite 本身的功能也不熟悉，就随便想了个功能，实现一下练练手。',
        path: '/articles/vite'
    },{
        title: 'Haskell',
        summary: '又是一个无用的屠龙技，😂。了解了一下 Haskell，确实很符合数学的思维。连带着，写代码的思考角度也会不一样，还是值得简单看一看的。',
        path: '/articles/haskell'
    },{
        title: '项目结构',
        summary: '这是一个很基础的文章，写的时间也很早了。突然翻出来，看着挺有趣的。生动的表现了我一开始，看到一个项目，无从下手的样子。真的能体会到，自己进步了。',
        path: '/articles/project'
    },{
        title: 'SICP 笔记',
        summary: '读了一部分，也算小有收获。有一些思维方面的捶打，一门语言为什么要这么设计，原因比你想象中的要复杂。加油，未来读完它。',
        path: '/articles/SICP'
    }]
</script>
<style scoped>
    .wel-container{
        margin-top: 12px;
        margin-bottom: 24px;
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
    }
    .bottom-row::before{
        content: '·';
        display:inline-block;
        width: 1em;
    }
</style>

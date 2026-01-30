<script setup lang="ts"> // 这里是JavaScript
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>  <!-- 这里是HTML -->
    <Layout>
        <!-- 插槽 --> 
        <template #aside-outline-before>
            <!-- 这里写内容，下面是一个简单示例 -->
            <div class="title">我是aside-outline-before</div>
        </template>
    </Layout>
</template>

<style>  /* 这里是CSS */
.title {
    color: rgb(68, 0, 255);
}
</style>
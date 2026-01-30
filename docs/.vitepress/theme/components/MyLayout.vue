<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
// 组件1、2、3
import MyComponent from "./MyComponent.vue";
</script>

<template>
    <DefaultTheme.Layout v-bind="$attrs">

    <!-- doc-footer-before插槽1个组件 -->
    <template #doc-footer-before>
        <MyComponent />
    </template>
    
    </DefaultTheme.Layout>
</template>

<style scoped>
</style>
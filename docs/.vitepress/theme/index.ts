/* .vitepress/theme/index.ts */
// ✅ 正确：需要导入 DefaultTheme
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // h函数
import MyLayout from './components/MyLayout.vue'
import MyComponent from './components/MyComponent.vue'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import confetti from "./components/confetti.vue"
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {

      // 指定组件使用aside-outline-before插槽
      'aside-outline-before': () => h(MyComponent),
    })
  },
  enhanceApp({app}: { app: any }) { 
    // 注册全局组件
    app.component('MyComponent' , MyComponent)
    app.component('MouseClick' , MouseClick)
    app.component('MouseFollower' , MouseFollower)
    app.component('confetti' , confetti)
  }
}
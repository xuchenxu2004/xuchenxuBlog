/* .vitepress/theme/index.ts */
// ✅ 正确：需要导入 DefaultTheme
import DefaultTheme from 'vitepress/theme'
import Mycomponent from './components/Mycomponent.vue'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({app}: { app: any }) { 
    // 注册全局组件
    app.component('MyComponent' , Mycomponent)
    app.component('MouseClick' , MouseClick)
    app.component('MouseFollower' , MouseFollower)
  }
}
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'zh-CN', 
  base: '/',
  title: "XUCHENXU2004's Blog",
  description: "基于 Vitepress 的轻量化博客",
  lastUpdated: true, 
  ignoreDeadLinks: false,
  themeConfig: {
    logo: '/web_logo.png',

    // https://vitepress.dev/reference/default-theme-config

    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南',
        //分组标题
        items: [
          { text: 'A', link: '/' },
          { text: 'B', link: '/' },
          { text: 'C', link: '/' },
        ]
      },
      { text: '软件开发', link: '/' },
      { text: '学习笔记', link: '/' },
      { text: '阅读笔记', link: '/' },
      { text: '语言学习', link: '/' },
      { text: '', link: 'https://vitepress.dev/zh/' },

    ],
    //自定义侧边栏
    sidebar: [
      {
        //分组标题
        text: '指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuchenxu2004' },
      { icon: 'x', link: 'https://x.com/XCX_SZSZ' }, 
    ],
    search: { 
      provider: 'local'
    }, 
    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
       //编辑本页
    editLink: { 
      pattern: 'https://github.com/xuchenxu2004/xuchenxuBlog.git', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
    //页脚
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2026-2030 present xuchenxu2004', 
      // 自动更新时间
      //copyright: VitePress`Copyright © 2019-${new Date().getFullYear()} present Evan You`, 
    }, 
  }
  
})

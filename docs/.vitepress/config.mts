import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  head: [
    ['link',{ rel: 'icon', href: '/web_logo.png'}],
  ],
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
      { text: '', link: '/' },
      { text: 'Vitepress 导航',
        //分组标题
        items: [
          { text: 'Vitepress中文站', link: 'https://vitepress.dev/zh/' },
          { text: '茂茂前端导航模版', link: 'https://fe-nav.netlify.app/' },
          { text: 'Vitepress中文教程', link: 'https://vitepress.yiov.top/' },
          { text: "伊奥's 教程集", link: 'http://yiov.top/' },
        ]
      },

    ],
    //自定义侧边栏
    sidebar: [
      {
        //分组标题
        text: '指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
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

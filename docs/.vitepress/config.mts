import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  head: [
    ['link',{ rel: 'icon', href: '/web_logo.png'}],
  ],
  lang: 'zh-CN', 
  base: '/',
  title: "XUCHENXU2004",
  description: "基于 Vitepress 的轻量化博客",
  lastUpdated: true, 
  ignoreDeadLinks: false,
  themeConfig: {
    logo: '/web_logo.png',

    // https://vitepress.dev/reference/default-theme-config

    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'FRONT-END',
        items:[
          { text: '前端三剑客', link: '/chunk_front_end/Three_Front-End_Masters' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
        ]
      },
      
      { text: 'COMPUTER SCIENCE',
        items:[
          { text: '机器学习', link: '/chunk_computer_science/机器学习' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
        ]
      },

      { text: 'GUIDE',
        items:[
          { text: 'MarkDown-学习', link: '/chunk_guide/Markdown入门简单用法' },
          { text: 'Vitepress-架构', link: '/chunk_guide/Vitepress-index' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
        ]
      },
      { text: '站点导航',
        //分组标题
        items: [
          { text: 'Vitepress中文站', link: 'https://vitepress.dev/zh/' },
          { text: '茂茂前端导航模版', link: 'https://fe-nav.netlify.app/' },
          { text: 'Vitepress中文教程', link: 'https://vitepress.yiov.top/' },
          { text: "伊奥's 教程集", link: 'http://yiov.top/' },
          { text: "Goat_Yang的文档网站", link: 'https://goatyang.com/' },
          { text: "AlbertZhang的文档网站", link: 'https://docs.bugdesigner.cn/' },
          { text: "正心全栈编程 - 文档站", link: 'https://docs.zhengxinonly.com/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },

        ]
      },

    ],
    
    //自定义侧边栏

    sidebar: {
      // 目录1
      '/chunk_front_end/': [
        { 
        //分组标题
        text: 'FRONT-END LEARNING',
        items: [
          { text: '前端三剑客', link: '/chunk_front_end/Three_Front-End_Masters' },
          { text: '', link: '/' },
          { text: '', link: '/' },
          { text: '', link: '/' },
        ]
        }
      ],

      '/chunk_guide/': [
        {
          text: 'GUIDE',
          items: [
            { text: 'MarkDown学习', link: '/chunk_guide/Markdown入门简单用法' },

            { text: 'Markdown进阶', link: '/chunk_guide/Markdown进阶' },
            { text: 'Vitepress架构', link: '/chunk_guide/Vitepress-index' },             
          ],
        },
      ],

      '/chunk_books/': [
        {
          text: 'BOOKS',
          items: [
            
            { text: '窄门', link: '/chunk_books/窄门' },
            { text: '局外人', link: '/chunk_books/局外人' },
          ],
        },
      ],

      '/chunk_computer_science/': [
        {
          text: 'COMPUTER SCIENCE',
          items: [
            { text: '机器学习', link: '/chunk_computer_science/机器学习' },
          ],
        },
      ],
    },

    //社交链接,内置的都是国外的，国内的都需要通过svg自行复制。
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuchenxu2004' },
      { icon: 'x', link: 'https://x.com/xuchenxu2004' }, 
    ],

    //搜索框以及样式
    search: { 
      provider: 'local'
    }, 

    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
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
      copyright: 'Copyright © 2025-2026 @xuchenxu2004', 
      // 自动更新时间
      //copyright: VitePress`Copyright © 2019-${new Date().getFullYear()} present Evan You`, 
    }, 
  },
  
  //markdown配置
  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }
  }
})


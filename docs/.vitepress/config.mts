import { defineConfig } from 'vitepress'

import timeline from "vitepress-markdown-timeline"; //时间线组件
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import vitepressProtectPlugin from "vitepress-protect-plugin"

import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';
import { withMermaid } from 'vitepress-plugin-mermaid'

// Teek 主题引入
import { defineTeekConfig } from "vitepress-theme-teek/config";
// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  // logo: "/web_logo.png",
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends:teekConfig,

  head: [
    ['link',{ rel: 'icon', href: '/web_logo.png'}],
  ],
  lang: 'zh-CN', 
  base: '/',
  title: "XUCHENXU2004",
  description: "基于 Vitepress 的轻量化博客",
  lastUpdated: true, 
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/web_logo.png',
    // https://vitepress.dev/reference/default-theme-config
    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '微机技术', link: '/10.微机技术/01.微机技术' },
      { text: '人工智能', link: '/20.人工智能/01.人工智能' },
      { text: '文化有限', link: '/40.文化有限/01.文化有限' },
      { text: '生活爱好', link: '/60.生活爱好/01.生活爱好' },
      { text: '指南', link: '/99.指南/01.指南' },
    ],
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
      pattern: 'https://github.com/xuchenxu2004/MyPersonalBlog.git', // 改成自己的仓库
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
    //行号显示
    lineNumbers: true,

    // toc显示一级标题
    toc: {level: [1,2,3]},

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

    config: (md) => {

      // 组件插入h1标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      },

      // 代码组中添加图片
      md.use((md) => {
        const defaultRender = md.render
        md.render = (...args) => {
          const [content, env] = args
          const currentLang = env?.localeIndex || 'root'
          const isHomePage = env?.path === '/' || env?.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          if (currentLang === 'root') {
            defaultContent = defaultContent.replace(/NOTE/g, '提醒')
              .replace(/TIP/g, '建议')
              .replace(/IMPORTANT/g, '重要')
              .replace(/WARNING/g, '警告')
              .replace(/CAUTION/g, '注意')
          } else if (currentLang === 'ko') {
            // 韩文替换
            defaultContent = defaultContent.replace(/NOTE/g, '알림')
              .replace(/TIP/g, '팁')
              .replace(/IMPORTANT/g, '중요')
              .replace(/WARNING/g, '경고')
              .replace(/CAUTION/g, '주의')
          }
          // 返回渲染的内容
          return defaultContent
        }

        // 获取原始的 fence 渲染规则
        const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);

        // 重写 fence 渲染规则
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx];
          const info = token.info.trim();

          // 判断是否为 md:img 类型的代码块
          if (info.includes('md:img')) {
            // 只渲染图片，不再渲染为代码块
            return `<div class="rendered-md">${md.render(token.content)}</div>`;
          }

          // 其他代码块按默认规则渲染（如 java, js 等）
          return defaultFence(tokens, idx, options, env, self);
        };
      })
      
      md.use(groupIconMdPlugin) //代码组图标
      md.use(markdownItTaskCheckbox) //todo
      md.use(MermaidMarkdown) //时间线
      md.use(timeline);
    }
    

  },

  vite: {
    plugins: [
      vitepressProtectPlugin({
        disableF12: true, // 禁用F12开发者模式
        disableCopy: true, // 禁用文本复制
        disableSelect: true, // 禁用文本选择
      }),

      groupIconVitePlugin({
        customIcon: {
          ts: localIconLoader(import.meta.url, '../public/svg/typescript.svg'), //本地ts图标导入
          md: localIconLoader(import.meta.url, '../public/svg/md.svg'), //markdown图标
          css: localIconLoader(import.meta.url, '../public/svg/css.svg'), //css图标
          js: 'logos:javascript', //js图标
        },
      }),
      MermaidPlugin()
    ]as any,
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
})


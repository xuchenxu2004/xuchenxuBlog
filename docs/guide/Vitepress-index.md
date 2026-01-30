# VitePress 目录规划最佳实践

### 📁 推荐的完整目录结构

```
my-vitepress-project/
├── docs/                          # 文档根目录
│   ├── .vitepress/                # VitePress 配置目录
│   │   ├── config.ts              # 核心配置文件
│   │   ├── theme/                 # 自定义主题
│   │   │   ├── index.ts           # 主题入口
│   │   │   ├── style/             # 自定义样式
│   │   │   │   ├── index.css      # 主样式文件
│   │   │   │   └── vars.css       # CSS 变量
│   │   │   └── components/        # 自定义组件
│   │   │       ├── MyComponent.vue
│   │   │       └── CustomLayout.vue
│   │   ├── cache/                 # 缓存（自动生成，加入 .gitignore）
│   │   └── dist/                  # 构建输出（自动生成，加入 .gitignore）
│   │
│   ├── public/                    # 静态资源（直接复制到根目录）
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   └── images/
│   │       └── banner.jpg
│   │
│   ├── guide/                     # 指南文档
│   │   ├── index.md               # /guide/
│   │   ├── getting-started.md     # /guide/getting-started
│   │   ├── installation.md        # /guide/installation
│   │   └── configuration.md       # /guide/configuration
│   │
│   ├── api/                       # API 文档
│   │   ├── index.md
│   │   ├── components.md
│   │   └── utils.md
│   │
│   ├── examples/                  # 示例
│   │   ├── index.md
│   │   ├── basic.md
│   │   └── advanced.md
│   │
│   ├── blog/                      # 博客（可选）
│   │   ├── index.md
│   │   ├── 2024-01-01-post.md
│   │   └── 2024-01-15-another.md
│   │
│   └── index.md                   # 首页
│
├── .gitignore                     # Git 忽略文件
├── package.json                   # 项目配置
├── pnpm-lock.yaml                 # 依赖锁定文件
├── tsconfig.json                  # TypeScript 配置
└── README.md                      # 项目说明
```

---

## 🎯 不同类型项目的目录规划

### 1️⃣ **文档网站（Documentation）**

```
docs/
├── .vitepress/
│   └── config.ts
├── public/
│   └── logo.png
├── guide/                    # 使用指南
│   ├── index.md
│   ├── introduction.md
│   ├── quick-start.md
│   └── advanced/
│       ├── configuration.md
│       └── deployment.md
├── api/                      # API 参考
│   ├── index.md
│   ├── components/
│   │   ├── button.md
│   │   └── input.md
│   └── hooks/
│       └── use-state.md
├── examples/                 # 示例代码
│   ├── basic.md
│   └── advanced.md
├── faq.md                    # 常见问题
└── index.md                  # 首页
```

**config.ts 侧边栏配置：**
```typescript
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' },
            {
              text: '进阶',
              collapsed: false,
              items: [
                { text: '配置', link: '/guide/advanced/configuration' },
                { text: '部署', link: '/guide/advanced/deployment' }
              ]
            }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' },
            {
              text: '组件',
              items: [
                { text: 'Button', link: '/api/components/button' },
                { text: 'Input', link: '/api/components/input' }
              ]
            }
          ]
        }
      ]
    }
  }
})
```

---

### 2️⃣ **个人博客（Blog）**

```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       └── index.ts
├── public/
│   ├── avatar.jpg
│   └── og-image.png
├── posts/                    # 博客文章
│   ├── 2024/
│   │   ├── 01-first-post.md
│   │   ├── 02-second-post.md
│   │   └── index.md          # 2024年文章列表
│   └── 2023/
│       └── ...
├── about/                    # 关于页面
│   ├── index.md
│   └── contact.md
├── tags/                     # 标签页（可选）
│   └── index.md
└── index.md                  # 首页
```

---

### 3️⃣ **知识库/笔记（Knowledge Base）**

```
docs/
├── .vitepress/
│   └── config.ts
├── public/
├── frontend/                 # 前端笔记
│   ├── index.md
│   ├── html-css/
│   │   ├── index.md
│   │   ├── flexbox.md
│   │   └── grid.md
│   ├── javascript/
│   │   ├── basics.md
│   │   └── async.md
│   └── vue/
│       ├── basics.md
│       └── composition-api.md
├── backend/                  # 后端笔记
│   ├── index.md
│   ├── nodejs/
│   └── database/
├── tools/                    # 工具笔记
│   ├── git.md
│   ├── vscode.md
│   └── terminal.md
└── index.md
```

---

### 4️⃣ **产品文档（Product Docs）**

```
docs/
├── .vitepress/
├── public/
├── getting-started/          # 入门
│   ├── index.md
│   ├── installation.md
│   └── first-project.md
├── tutorials/                # 教程
│   ├── beginner/
│   ├── intermediate/
│   └── advanced/
├── reference/                # 参考
│   ├── api/
│   ├── cli/
│   └── config/
├── resources/                # 资源
│   ├── videos.md
│   ├── community.md
│   └── changelog.md
└── index.md
```

---

## 📝 关键文件详解

### 1. **index.md（首页）**

```markdown
---
layout: home

hero:
  name: "我的项目"
  text: "一个很棒的项目"
  tagline: 简单、强大、快速
  image:
    src: /logo.png
    alt: Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/username/repo

features:
  - icon: 🚀
    title: 快速
    details: 极速的开发体验
  - icon: 💡
    title: 简单
    details: 简洁的 API 设计
  - icon: 🔥
    title: 强大
    details: 功能丰富
---
```

### 2. **config.ts（配置文件）**

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的文档",
  description: "一个很棒的文档网站",
  
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: '更多',
        items: [
          { text: '示例', link: '/examples/' },
          { text: '博客', link: '/blog/' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username/repo' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
})
```

---

## 🎨 静态资源管理

### **public/ 目录**
放在 `public/` 的文件会直接复制到网站根目录：

```
docs/public/
├── logo.png          → 访问: /logo.png
├── favicon.ico       → 访问: /favicon.ico
└── images/
    └── banner.jpg    → 访问: /images/banner.jpg
```

**使用方式：**
```markdown
<!-- Markdown 中 -->
![Logo](/logo.png)

<!-- HTML 中 -->
<img src="/images/banner.jpg" alt="Banner">
```

### **相对路径资源**
放在文档同级目录：

```
docs/guide/
├── index.md
└── images/
    └── screenshot.png
```

```markdown
<!-- 在 guide/index.md 中 -->
![截图](./images/screenshot.png)
```

---

## 🚫 .gitignore 配置

```gitignore
# VitePress
docs/.vitepress/cache
docs/.vitepress/dist

# 依赖
node_modules/

# 日志
*.log
npm-debug.log*
pnpm-debug.log*

# 系统文件
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
```

---

## 💡 最佳实践建议

### ✅ 推荐做法：

1. **文件命名**
   - 使用小写字母和连字符：`getting-started.md`
   - 避免空格和特殊字符

2. **目录结构**
   - 按功能/主题分类，不要超过 3 层
   - 每个目录都有 `index.md`

3. **图片管理**
   - 小图标 → `public/icons/`
   - 文档配图 → 文档同级 `images/` 目录
   - 通用图片 → `public/images/`

4. **URL 规划**
   ```
   /guide/              → docs/guide/index.md
   /guide/installation  → docs/guide/installation.md
   /api/components      → docs/api/components.md
   ```

### ❌ 避免：

- ❌ 目录层级过深（超过 4 层）
- ❌ 文件名包含中文或空格
- ❌ 把所有文件放在根目录
- ❌ 图片直接放在 docs 根目录

---

## 🚀 快速开始模板

```bash
# 创建基础结构
mkdir -p docs/{.vitepress/theme/style,public,guide,api}
touch docs/index.md
touch docs/guide/index.md
touch docs/api/index.md
touch docs/.vitepress/config.ts
touch docs/.vitepress/theme/index.ts
touch docs/.vitepress/theme/style/index.css
```

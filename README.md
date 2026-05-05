# 个人接单名片网站

基于 Next.js 构建的个人接单展示网站，部署在 Vercel 上。

## 技术栈

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** — 样式系统
- **Framer Motion** — 滚动动画与交互效果
- **Lucide React** — 图标库
- **Web3Forms** — 表单提交（邮件通知）

## 功能模块

- 🏠 **首页** — Hero 展示 + 服务概览 + 项目案例 + 客户评价 + 联系引导
- 📂 **项目展示** — 过往项目案例，支持技术栈筛选
- 💰 **服务报价** — 服务内容与价格区间
- 💬 **客户评价** — 真实客户推荐与好评
- 📬 **联系表单** — 客户需求提交，自动发送邮件通知

## 特色

- 🌐 中英双语一键切换
- 🎨 炫酷深色主题 + 渐变强调色 + 毛玻璃效果
- ✨ 滚动触发动画 + 悬停交互
- 📱 响应式设计，适配移动端
- 🚀 静态导出，Vercel 一键部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 构建部署

```bash
# 构建
npm run build

# 部署到 Vercel
vercel
```

或推送到 GitHub，在 [Vercel](https://vercel.com) 导入仓库自动部署。

## 自定义内容

修改以下文件替换为你自己的信息：

| 文件 | 内容 |
|------|------|
| `src/utils/i18n.ts` | 个人昵称、网站文案 |
| `src/data/projects.ts` | 项目案例数据 |
| `src/data/services.ts` | 服务内容与报价 |
| `src/data/testimonials.ts` | 客户评价 |
| `src/app/contact/page.tsx` | 联系方式（微信、邮箱、QQ、GitHub）及 Web3Forms Key |

## 项目结构

```
src/
├── app/                # 页面路由
│   ├── page.tsx        # 首页
│   ├── projects/       # 项目展示页
│   ├── services/       # 服务报价页
│   ├── testimonials/   # 客户评价页
│   └── contact/        # 联系表单页
├── components/
│   ├── home/           # 首页区块组件
│   ├── layout/         # 布局组件（导航栏、页脚）
│   └── shared/         # 通用组件（按钮、卡片等）
├── data/               # 静态数据
├── hooks/              # 自定义钩子
├── types/              # TypeScript 类型定义
└── utils/              # 工具函数（国际化、类名合并）
```

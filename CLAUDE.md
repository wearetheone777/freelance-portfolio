# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

@AGENTS.md

## 命令

```bash
npm run dev      # 启动开发服务器 localhost:3000
npm run build    # 静态导出构建（output: "export"）
npm run start    # 启动静态构建服务
npm run lint     # ESLint 代码检查（eslint-config-next）
```

暂未配置测试框架。

## 架构

**纯静态站点** — 无后端、无数据库、无 API 路由。所有内容存储在 `src/data/` 下的 TypeScript 文件中。站点以静态导出方式部署（next.config.ts 中 `output: "export"`）。

**技术栈**：Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript + Framer Motion + Lucide React。

### 路由（App Router，基于文件）

| 路由 | 文件 | 用途 |
|---|---|---|
| `/` | `src/app/page.tsx` | 首页：Hero、服务、项目、评价、联系引导 |
| `/projects` | `src/app/projects/page.tsx` | 项目案例展示 |
| `/services` | `src/app/services/page.tsx` | 服务报价详情 |
| `/testimonials` | `src/app/testimonials/page.tsx` | 客户评价 |
| `/contact` | `src/app/contact/page.tsx` | 联系表单 + 社交方式 |

### 布局层级

`RootLayout`（`src/app/layout.tsx`）→ `ClientLayout`（`src/components/layout/ClientLayout.tsx`）→ 页面。

`ClientLayout` 使用 `LanguageProvider` 包裹所有内容，渲染 `Navbar` + `<main>` + `Footer`。由于语言上下文的存在，整个应用都是客户端组件 — 实际上没有服务端组件。

### 国际化（中/英）

基于 Context 的自定义国际化方案，无外部依赖。核心类型和翻译定义在 [`src/utils/i18n.ts`](src/utils/i18n.ts)：
- `I18nText` 类型：`{ zh: string; en: string }` — 所有数据模型通用
- `translations` 对象：按模块分组的所有 UI 文案
- `t(text, locale)` 辅助函数：将 `I18nText` 解析为当前语言的字符串
- `useLanguage()` 钩子（[`src/hooks/useLanguage.ts`](src/hooks/useLanguage.ts)）提供 `{ locale, toggleLocale }`

所有数据类型（`Project`、`Service`、`Testimonial`）的用户可见字段均使用 `I18nText`，定义在 [`src/types/index.ts`](src/types/index.ts)。

### 数据流

`src/data/*.ts` 中的静态数据数组 → 页面和卡片组件导入 → 通过国际化解析渲染。无数据请求，无状态管理库。

### 通用工具

- `cn(...inputs)`（[`src/utils/cn.ts`](src/utils/cn.ts)）：`clsx` + `tailwind-merge` 条件类名合并。始终使用 `cn()` 而非原始模板字符串拼接 className。
- `useScrollAnimation(threshold)`（[`src/hooks/useScrollAnimation.ts`](src/hooks/useScrollAnimation.ts)）：基于 IntersectionObserver 返回 `{ ref, isVisible }`，用于滚动触发入场动画。

### 通用组件

- `GradientButton`：3 种变体（`primary`、`secondary`、`outline`），3 种尺寸，全局复用
- `LanguageSwitch`：中/英切换，放置在导航栏
- `ProjectCard`、`ServiceCard`、`TestimonialCard`：带 Framer Motion 动画的可复用卡片组件

### 样式

Tailwind CSS 4，自定义主题变量定义在 [`src/app/globals.css`](src/app/globals.css)（`--color-background: #0f172a`、`--color-foreground: #e2e8f0`）。采用深色主题 + 青色/粉色渐变强调色、毛玻璃卡片、Framer Motion 滚动触发动画。

自定义 CSS 动画（`animate-float`、`animate-glow`）定义在 globals.css 中，可全局使用。

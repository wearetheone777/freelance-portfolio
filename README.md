# 个人接单名片网站

基于 Next.js 构建的个人接单展示网站，支持中英双语，部署在 Vercel 上。

## 技术栈

- **框架**：Next.js 16 + React 19 + TypeScript
- **样式**：Tailwind CSS 4 + Framer Motion 动画
- **图标**：Lucide React
- **表单**：Web3Forms（免费邮件通知）
- **部署**：Vercel 静态导出

## 功能

- 🏠 首页展示：Hero、服务、项目、评价、联系引导
- 📂 项目案例：支持技术栈筛选
- 💰 服务报价：部分明码标价，部分面议
- ⭐ 客户评价：展示客户好评
- 📬 联系表单：客户提交需求，邮件自动通知
- 🌐 中英双语：一键切换

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

浏览器打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── page.tsx            # 首页
│   ├── projects/           # 项目案例页
│   ├── services/           # 服务报价页
│   ├── testimonials/       # 客户评价页
│   └── contact/            # 联系表单页
├── components/
│   ├── home/               # 首页模块组件
│   ├── layout/             # 布局组件（导航栏、页脚）
│   └── shared/             # 通用组件（按钮、卡片等）
├── data/                   # 静态数据（项目、服务、评价）
├── hooks/                  # 自定义钩子（语言、滚动动画）
├── types/                  # TypeScript 类型定义
└── utils/                  # 工具函数（国际化、类名合并）
```

## 自定义内容

修改以下文件替换为你自己的信息：

- `src/utils/i18n.ts` — 替换 `YOUR_NAME` 为你的昵称
- `src/app/contact/page.tsx` — 替换微信、邮箱、QQ、GitHub
- `src/data/projects.ts` — 你的项目案例
- `src/data/services.ts` — 你的服务和报价
- `src/data/testimonials.ts` — 客户评价

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com/new) 导入仓库
3. 点击 Deploy，等待部署完成

### 自定义域名

在 Vercel 项目 Settings → Domains 中添加你的域名，然后在域名服务商配置 DNS：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | `@` | `cname.vercel-dns.com` |
| CNAME | `www` | `cname.vercel-dns.com` |

## 许可

MIT

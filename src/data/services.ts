import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: { zh: "网站开发", en: "Web Development" },
    description: {
      zh: "企业官网、电商平台、SaaS 系统等全栈 Web 开发，从设计到部署一站式服务",
      en: "Full-stack web development for corporate sites, e-commerce, SaaS platforms — from design to deployment",
    },
    price: { zh: "¥3,000 起", en: "From $500" },
    icon: "Globe",
    featured: true,
  },
  {
    id: "mini-program",
    title: { zh: "小程序开发", en: "Mini Program Development" },
    description: {
      zh: "微信/支付宝小程序开发，覆盖电商、工具、社交等各类应用场景",
      en: "WeChat/Alipay mini program development for e-commerce, tools, social apps and more",
    },
    price: { zh: "¥5,000 起", en: "From $800" },
    icon: "Smartphone",
    featured: true,
  },
  {
    id: "mobile-app",
    title: { zh: "移动端 App", en: "Mobile App Development" },
    description: {
      zh: "跨平台移动应用开发，一套代码同时覆盖 iOS 和 Android",
      en: "Cross-platform mobile app development, one codebase for both iOS and Android",
    },
    price: { zh: "¥8,000 起", en: "From $1,200" },
    icon: "TabletSmartphone",
    featured: true,
  },
  {
    id: "ai-solution",
    title: { zh: "AI 解决方案", en: "AI Solutions" },
    description: {
      zh: "AI 模型集成、数据分析、智能推荐系统等人工智能相关开发",
      en: "AI model integration, data analysis, recommendation systems and more",
    },
    price: null,
    icon: "Brain",
    featured: true,
  },
  {
    id: "api-backend",
    title: { zh: "后端 API 开发", en: "Backend API Development" },
    description: {
      zh: "RESTful / GraphQL API 设计与开发，数据库架构设计，服务器部署运维",
      en: "RESTful / GraphQL API design & development, database architecture, server deployment",
    },
    price: { zh: "¥4,000 起", en: "From $600" },
    icon: "Server",
    featured: false,
  },
  {
    id: "ui-design",
    title: { zh: "UI/UX 设计", en: "UI/UX Design" },
    description: {
      zh: "界面设计、交互原型、设计系统搭建，让产品既好看又好用",
      en: "Interface design, interactive prototypes, design systems — making products beautiful and usable",
    },
    price: null,
    icon: "Palette",
    featured: false,
  },
];

export type Locale = "zh" | "en";

export interface I18nText {
  zh: string;
  en: string;
}

export const translations = {
  nav: {
    home: { zh: "首页", en: "Home" },
    projects: { zh: "项目案例", en: "Projects" },
    services: { zh: "服务报价", en: "Services" },
    testimonials: { zh: "客户评价", en: "Testimonials" },
    contact: { zh: "联系我", en: "Contact" },
  },
  hero: {
    greeting: { zh: "你好，我是", en: "Hi, I'm" },
    name: { zh: "YOUR_NAME", en: "YOUR_NAME" },
    role: {
      zh: "全栈开发者 · 创意工程师",
      en: "Full-Stack Developer · Creative Engineer",
    },
    description: {
      zh: "专注于 Web 开发、移动端应用与 AI 解决方案，将创意转化为高品质数字产品",
      en: "Specializing in Web Development, Mobile Apps & AI Solutions, turning ideas into high-quality digital products",
    },
    cta: { zh: "开始合作", en: "Let's Work Together" },
    viewProjects: { zh: "查看项目", en: "View Projects" },
  },
  services: {
    title: { zh: "服务报价", en: "Services & Pricing" },
    subtitle: {
      zh: "提供全方位的技术服务，满足你的各种需求",
      en: "Comprehensive tech services to meet all your needs",
    },
    contactForPrice: { zh: "面议", en: "Contact for Price" },
  },
  projects: {
    title: { zh: "项目案例", en: "Project Showcase" },
    subtitle: {
      zh: "精选项目展示，每一个都是用心之作",
      en: "Handpicked projects, each crafted with dedication",
    },
    viewAll: { zh: "查看全部", en: "View All" },
    filterAll: { zh: "全部", en: "All" },
    visitProject: { zh: "访问项目", en: "Visit Project" },
    back: { zh: "返回项目列表", en: "Back to Projects" },
    overview: { zh: "项目概述", en: "Overview" },
    techStack: { zh: "技术栈", en: "Tech Stack" },
    features: { zh: "功能亮点", en: "Key Features" },
    screenshots: { zh: "项目截图", en: "Screenshots" },
    visitLive: { zh: "访问线上项目", en: "Visit Live Project" },
    notFound: { zh: "项目未找到", en: "Project Not Found" },
    notFoundDesc: {
      zh: "你访问的项目不存在或已被移除",
      en: "The project you're looking for doesn't exist or has been removed",
    },
  },
  testimonials: {
    title: { zh: "客户评价", en: "Client Testimonials" },
    subtitle: {
      zh: "听听客户们怎么说",
      en: "Hear what clients have to say",
    },
  },
  contact: {
    title: { zh: "联系我", en: "Get In Touch" },
    subtitle: {
      zh: "有项目需求？随时联系我，快速响应",
      en: "Have a project? Reach out anytime, fast response guaranteed",
    },
    formName: { zh: "你的名字", en: "Your Name" },
    formEmail: { zh: "邮箱地址", en: "Email Address" },
    formPhone: { zh: "联系电话 / 微信 / QQ", en: "Phone / WeChat / QQ" },
    formProject: { zh: "项目描述", en: "Project Description" },
    formBudget: { zh: "预算范围", en: "Budget Range" },
    formSubmit: { zh: "提交需求", en: "Submit Request" },
    formSuccess: {
      zh: "需求已提交，我会尽快联系你！",
      en: "Request submitted! I'll get back to you soon!",
    },
    wechat: { zh: "微信", en: "WeChat" },
    email: { zh: "邮箱", en: "Email" },
    qq: { zh: "QQ", en: "QQ" },
    github: { zh: "GitHub", en: "GitHub" },
  },
  footer: {
    rights: {
      zh: "© 2024 YOUR_NAME. 保留所有权利。",
      en: "© 2024 YOUR_NAME. All rights reserved.",
    },
    builtWith: { zh: "用 ❤️ 和代码构建", en: "Built with ❤️ and code" },
  },
} as const;

export function t(text: I18nText, locale: Locale): string {
  return text[locale];
}

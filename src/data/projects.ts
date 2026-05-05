import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: { zh: "电商平台全栈开发", en: "E-Commerce Platform" },
    description: {
      zh: "为某品牌定制开发的电商系统，支持多商户入驻、在线支付、订单管理、数据分析等完整功能",
      en: "Custom e-commerce system with multi-vendor support, online payments, order management, and analytics",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20dark%20theme%20neon%20accents%20clean%20ui&image_size=landscape_16_9",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    id: "ai-content-detector",
    title: { zh: "AI 内容鉴别小程序", en: "AI Content Detector" },
    description: {
      zh: "支持文本、图片、音视频多模态 AI 内容检测的小程序，集成深度学习模型实现高精度识别",
      en: "Mini-program for multi-modal AI content detection with deep learning models for high-accuracy recognition",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20detection%20app%20interface%20dark%20mode%20futuristic%20tech%20scanning%20effect&image_size=landscape_16_9",
    techStack: ["Vue.js", "Python", "TensorFlow", "WeChat Mini Program"],
    link: "#",
    featured: true,
  },
  {
    id: "smart-camera",
    title: { zh: "工程相机小程序", en: "Smart Engineering Camera" },
    description: {
      zh: "面向工程行业的智能拍照工具，支持水印定位、项目相册管理、照片导出等专业功能",
      en: "Smart camera tool for engineering industry with watermarks, project albums, and photo export",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineering%20camera%20app%20photo%20management%20dark%20interface%20professional%20tool&image_size=landscape_16_9",
    techStack: ["UniApp", "Vue.js", "Node.js", "MongoDB"],
    link: "#",
    featured: true,
  },
  {
    id: "data-dashboard",
    title: { zh: "数据可视化大屏", en: "Data Visualization Dashboard" },
    description: {
      zh: "实时数据监控大屏系统，支持多数据源接入、自定义图表、告警推送等功能",
      en: "Real-time data monitoring dashboard with multi-source integration, custom charts, and alerting",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20dark%20theme%20colorful%20charts%20realtime%20monitoring&image_size=landscape_16_9",
    techStack: ["React", "D3.js", "WebSocket", "Express"],
    link: "#",
    featured: false,
  },
  {
    id: "bookkeeping-app",
    title: { zh: "智能记账 App", en: "Smart Bookkeeping App" },
    description: {
      zh: "个人记账应用，支持账单导入、预算管理、数据统计、分类管理等功能",
      en: "Personal bookkeeping app with bill import, budget management, statistics, and category management",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finance%20bookkeeping%20app%20dark%20mode%20clean%20charts%20modern%20design&image_size=landscape_16_9",
    techStack: ["UniApp", "Vue.js", "SQLite", "ECharts"],
    link: "#",
    featured: false,
  },
  {
    id: "community-forum",
    title: { zh: "社区论坛系统", en: "Community Forum System" },
    description: {
      zh: "全功能社区论坛，支持帖子发布、评论互动、用户关注、消息通知等社交功能",
      en: "Full-featured community forum with posts, comments, user following, and notifications",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=community%20forum%20website%20dark%20theme%20social%20platform%20modern%20ui&image_size=landscape_16_9",
    techStack: ["Next.js", "Express", "PostgreSQL", "Redis"],
    link: "#",
    featured: false,
  },
];

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: { zh: "电商平台全栈开发", en: "E-Commerce Platform" },
    description: {
      zh: "为某品牌定制开发的电商系统，支持多商户入驻、在线支付、订单管理、数据分析等完整功能",
      en: "Custom e-commerce system with multi-vendor support, online payments, order management, and analytics",
    },
    overview: {
      zh: "该项目是为某品牌从零打造的下一代全栈电商平台。系统采用微服务架构，支持多商户入驻、完整的在线支付流程、智能订单管理以及实时数据分析仪表盘。前端使用 Next.js 实现服务端渲染以获得更快的首屏加载和更好的 SEO，后端使用 Node.js + PostgreSQL 处理核心业务逻辑，Stripe 集成提供安全合规的支付体验。项目历时 3 个月，线上运行稳定，日均处理订单 2000+。",
      en: "A next-generation full-stack e-commerce platform built from scratch for a brand. The system adopts a microservices architecture, supporting multi-vendor onboarding, complete online payment flows, intelligent order management, and real-time analytics dashboards. The frontend uses Next.js with SSR for fast initial loads and SEO, while the backend leverages Node.js + PostgreSQL for core business logic and Stripe for secure payment processing. The project took 3 months to deliver and handles 2000+ daily orders in production.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20dark%20theme%20neon%20accents%20clean%20ui&image_size=landscape_16_9",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      {
        icon: "Store",
        title: { zh: "多商户入驻", en: "Multi-Vendor Support" },
        description: { zh: "支持多个商户同时入驻经营，独立管理商品和订单", en: "Multiple vendors can onboard and manage their own products and orders" },
      },
      {
        icon: "CreditCard",
        title: { zh: "在线支付", en: "Online Payments" },
        description: { zh: "集成 Stripe 支付网关，支持信用卡、支付宝、微信支付", en: "Stripe integration supporting credit cards, Alipay, and WeChat Pay" },
      },
      {
        icon: "BarChart3",
        title: { zh: "数据分析", en: "Analytics Dashboard" },
        description: { zh: "实时销售数据、用户行为分析、转化率监控", en: "Real-time sales data, user behavior analytics, and conversion monitoring" },
      },
      {
        icon: "Package",
        title: { zh: "订单管理", en: "Order Management" },
        description: { zh: "完整的订单生命周期管理，从下单到售后", en: "Complete order lifecycle management from placement to after-sales" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20dark%20theme%20neon%20accents%20clean%20ui&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20product%20listing%20page%20dark%20theme%20grid%20layout&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20shopping%20cart%20checkout%20dark%20theme%20modern&image_size=landscape_16_9",
    ],
    link: "https://example.com",
    featured: true,
  },
  {
    id: "ai-content-detector",
    title: { zh: "AI 内容鉴别小程序", en: "AI Content Detector" },
    description: {
      zh: "支持文本、图片、音视频多模态 AI 内容检测的小程序，集成深度学习模型实现高精度识别",
      en: "Mini-program for multi-modal AI content detection with deep learning models for high-accuracy recognition",
    },
    overview: {
      zh: "一款面向内容创作者和教育机构的 AI 内容鉴别小程序。支持文本、图片、音视频三种模态的 AI 生成内容检测，基于 TensorFlow 深度学习模型的集成推理引擎，在 WeChat 端实现毫秒级响应。后端 Python 服务负责模型推理和持续训练，前端 Vue.js 提供流畅的用户体验。该小程序上线后累计用户 5 万+，检测准确率达到 94%。",
      en: "An AI content detection mini-program for content creators and educational institutions. It supports multi-modal detection across text, images, and audio/video, powered by a TensorFlow deep learning inference engine that delivers millisecond-level responses within WeChat. The Python backend handles model inference and continuous training, while the Vue.js frontend provides a smooth user experience. The mini-program has accumulated 50K+ users with a 94% detection accuracy rate.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20detection%20app%20interface%20dark%20mode%20futuristic%20tech%20scanning%20effect&image_size=landscape_16_9",
    techStack: ["Vue.js", "Python", "TensorFlow", "WeChat Mini Program"],
    features: [
      {
        icon: "FileText",
        title: { zh: "文本检测", en: "Text Detection" },
        description: { zh: "基于 BERT 微调模型，快速识别 AI 生成文本", en: "BERT fine-tuned model for fast AI-generated text recognition" },
      },
      {
        icon: "Image",
        title: { zh: "图片检测", en: "Image Detection" },
        description: { zh: "支持 Stable Diffusion、Midjourney 等主流生成模型检测", en: "Detection support for Stable Diffusion, Midjourney, and other major generative models" },
      },
      {
        icon: "Music",
        title: { zh: "音视频检测", en: "Audio & Video Detection" },
        description: { zh: "多模态分析引擎，覆盖语音合成和深度伪造检测", en: "Multi-modal analysis engine covering voice synthesis and deepfake detection" },
      },
      {
        icon: "Zap",
        title: { zh: "实时分析", en: "Real-Time Analysis" },
        description: { zh: "毫秒级响应，支持批量上传和批量检测", en: "Millisecond-level response with batch upload and batch detection support" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20detection%20app%20interface%20dark%20mode%20futuristic%20tech%20scanning%20effect&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20content%20analysis%20results%20screen%20dark%20theme%20charts&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wechat%20mini%20program%20AI%20detector%20dark%20mode%20mobile&image_size=portrait_9_16",
    ],
    link: "https://example.com",
    featured: true,
  },
  {
    id: "smart-camera",
    title: { zh: "工程相机小程序", en: "Smart Engineering Camera" },
    description: {
      zh: "面向工程行业的智能拍照工具，支持水印定位、项目相册管理、照片导出等专业功能",
      en: "Smart camera tool for engineering industry with watermarks, project albums, and photo export",
    },
    overview: {
      zh: "专为工程行业打造的智能拍照管理工具。解决工程现场拍照管理的痛点，提供 GPS 定位水印、项目分类相册、一键照片导出等专业功能。基于 UniApp 跨端框架开发，一套代码同时覆盖微信小程序和 App 端。后端使用 Node.js + MongoDB 处理照片元数据存储和项目组织，支持离线模式，在无网络环境下也能正常使用，联网后自动同步。目前已被多家工程公司采用。",
      en: "A smart photo management tool built specifically for the engineering industry. It solves pain points in construction site photo management with GPS location watermarks, categorized project albums, and one-click photo export. Developed with the UniApp cross-platform framework, a single codebase covers both WeChat Mini Programs and native apps. The backend uses Node.js + MongoDB for photo metadata and project organization, with offline mode support that auto-syncs when back online. Currently adopted by multiple engineering companies.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineering%20camera%20app%20photo%20management%20dark%20interface%20professional%20tool&image_size=landscape_16_9",
    techStack: ["UniApp", "Vue.js", "Node.js", "MongoDB"],
    features: [
      {
        icon: "MapPin",
        title: { zh: "GPS 水印", en: "GPS Watermark" },
        description: { zh: "拍照自动添加定位、时间、项目名称等水印信息", en: "Auto-add location, time, and project name watermarks to photos" },
      },
      {
        icon: "FolderOpen",
        title: { zh: "项目相册", en: "Project Albums" },
        description: { zh: "按项目分类管理照片，支持多级目录结构", en: "Categorized photo management by project with multi-level directory structure" },
      },
      {
        icon: "Download",
        title: { zh: "一键导出", en: "One-Click Export" },
        description: { zh: "支持批量导出为 PDF 报告或 ZIP 压缩包", en: "Batch export as PDF reports or ZIP archives" },
      },
      {
        icon: "WifiOff",
        title: { zh: "离线模式", en: "Offline Mode" },
        description: { zh: "无网络环境下正常使用，联网后自动同步", en: "Works offline seamlessly, auto-syncs when back online" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineering%20camera%20app%20photo%20management%20dark%20interface%20professional%20tool&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20camera%20app%20with%20watermark%20gps%20location%20dark%20theme&image_size=portrait_9_16",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=photo%20album%20management%20app%20dark%20theme%20grid%20gallery&image_size=landscape_16_9",
    ],
    link: "https://example.com",
    featured: true,
  },
  {
    id: "data-dashboard",
    title: { zh: "数据可视化大屏", en: "Data Visualization Dashboard" },
    description: {
      zh: "实时数据监控大屏系统，支持多数据源接入、自定义图表、告警推送等功能",
      en: "Real-time data monitoring dashboard with multi-source integration, custom charts, and alerting",
    },
    overview: {
      zh: "面向企业运维和业务监控的实时数据可视化大屏系统。系统支持多种数据源接入（MySQL、PostgreSQL、WebSocket 实时流），内置 20+ 种可定制图表组件，支持拖拽式布局配置。WebSocket 实现毫秒级数据推送，D3.js 驱动的流畅动画过渡效果。告警引擎支持自定义阈值和多种通知渠道（邮件、短信、企业微信）。该大屏已在 3 家客户的数据中心部署运行。",
      en: "A real-time data visualization dashboard system for enterprise operations and business monitoring. It supports multiple data source integrations (MySQL, PostgreSQL, WebSocket real-time streams), features 20+ customizable chart components, and offers drag-and-drop layout configuration. WebSocket enables millisecond-level data push, with smooth animated transitions powered by D3.js. The alerting engine supports custom thresholds and multiple notification channels (email, SMS, corporate WeChat). The dashboard is deployed across 3 client data centers.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20dark%20theme%20colorful%20charts%20realtime%20monitoring&image_size=landscape_16_9",
    techStack: ["React", "D3.js", "WebSocket", "Express"],
    features: [
      {
        icon: "Database",
        title: { zh: "多数据源", en: "Multi-Source" },
        description: { zh: "支持 MySQL、PostgreSQL、WebSocket 等多种数据源接入", en: "Connects to MySQL, PostgreSQL, WebSocket, and other data sources" },
      },
      {
        icon: "PieChart",
        title: { zh: "丰富图表", en: "Rich Charts" },
        description: { zh: "内置 20+ 图表组件，支持拖拽式自定义布局", en: "20+ built-in chart components with drag-and-drop custom layouts" },
      },
      {
        icon: "Bell",
        title: { zh: "智能告警", en: "Smart Alerts" },
        description: { zh: "自定义阈值告警，支持邮件、短信、企微通知", en: "Custom threshold alerts via email, SMS, and corporate WeChat" },
      },
      {
        icon: "Zap",
        title: { zh: "实时推送", en: "Real-Time Push" },
        description: { zh: "WebSocket 毫秒级数据推送，D3 流畅动画", en: "WebSocket-powered millisecond data push with smooth D3 animations" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20dark%20theme%20colorful%20charts%20realtime%20monitoring&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=analytics%20dashboard%20with%20charts%20dark%20mode%20professional&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=monitoring%20alert%20configuration%20screen%20dark%20theme&image_size=landscape_16_9",
    ],
    link: "https://example.com",
    featured: false,
  },
  {
    id: "bookkeeping-app",
    title: { zh: "智能记账 App", en: "Smart Bookkeeping App" },
    description: {
      zh: "个人记账应用，支持账单导入、预算管理、数据统计、分类管理等功能",
      en: "Personal bookkeeping app with bill import, budget management, statistics, and category management",
    },
    overview: {
      zh: "一款简洁高效的智能个人记账应用。支持支付宝/微信账单一键导入，自动识别分类，省去手动输入的烦恼。预算管理功能帮助用户规划月度开支，ECharts 驱动的可视化统计图表让收支一目了然。基于 UniApp 跨端开发，同时覆盖 iOS 和 Android，SQLite 本地存储保证数据安全。内置 100+ 智能分类规则，导入识别准确率达 95% 以上。",
      en: "A clean and efficient smart personal bookkeeping app. It supports one-click import of Alipay/WeChat bills with automatic category recognition, eliminating manual entry. Budget management helps users plan monthly expenses, while ECharts-powered visual statistics make income and spending clear at a glance. Built with UniApp for cross-platform coverage (iOS and Android), with SQLite local storage for data security. Includes 100+ smart categorization rules with over 95% import recognition accuracy.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finance%20bookkeeping%20app%20dark%20mode%20clean%20charts%20modern%20design&image_size=landscape_16_9",
    techStack: ["UniApp", "Vue.js", "SQLite", "ECharts"],
    features: [
      {
        icon: "Upload",
        title: { zh: "账单导入", en: "Bill Import" },
        description: { zh: "支持支付宝/微信账单一键导入，智能识别分类", en: "One-click import of Alipay/WeChat bills with smart category recognition" },
      },
      {
        icon: "Target",
        title: { zh: "预算管理", en: "Budget Management" },
        description: { zh: "灵活的月度预算设置，超支自动提醒", en: "Flexible monthly budget settings with overspend alerts" },
      },
      {
        icon: "PieChart",
        title: { zh: "数据统计", en: "Statistics" },
        description: { zh: "多维度收支分析，ECharts 可视化图表", en: "Multi-dimensional income/expense analysis with ECharts visualizations" },
      },
      {
        icon: "Tag",
        title: { zh: "分类管理", en: "Category Management" },
        description: { zh: "自定义分类标签，智能匹配 100+ 分类规则", en: "Custom category tags with 100+ smart matching rules" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finance%20bookkeeping%20app%20dark%20mode%20clean%20charts%20modern%20design&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20bookkeeping%20app%20budget%20tracking%20dark%20theme&image_size=portrait_9_16",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=expense%20pie%20chart%20mobile%20app%20dark%20mode&image_size=portrait_9_16",
    ],
    link: "https://example.com",
    featured: false,
  },
  {
    id: "community-forum",
    title: { zh: "社区论坛系统", en: "Community Forum System" },
    description: {
      zh: "全功能社区论坛，支持帖子发布、评论互动、用户关注、消息通知等社交功能",
      en: "Full-featured community forum with posts, comments, user following, and notifications",
    },
    overview: {
      zh: "一套面向垂直领域社区的全功能论坛系统。采用 Next.js 服务端渲染以获得更好的 SEO 表现，Express 后端提供 RESTful API，PostgreSQL 处理关系型数据，Redis 缓存热门内容和会话管理。核心功能包括 Markdown 富文本编辑器、实时评论、用户关注系统、点赞收藏、私信通知等。管理后台支持内容审核、用户管理和数据统计。系统设计支持 10 万+ DAU 的并发承载能力。",
      en: "A full-featured forum system for vertical communities. Built with Next.js SSR for SEO, Express RESTful APIs, PostgreSQL for relational data, and Redis for caching hot content and session management. Core features include a Markdown rich text editor, real-time comments, user following, likes & bookmarks, and private messaging. The admin panel supports content moderation, user management, and analytics. The system is designed to support 100K+ DAU concurrency.",
    },
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=community%20forum%20website%20dark%20theme%20social%20platform%20modern%20ui&image_size=landscape_16_9",
    techStack: ["Next.js", "Express", "PostgreSQL", "Redis"],
    features: [
      {
        icon: "Edit3",
        title: { zh: "富文本编辑", en: "Rich Text Editor" },
        description: { zh: "支持 Markdown 编辑，代码高亮和图片拖拽上传", en: "Markdown editing with syntax highlighting and drag-and-drop image upload" },
      },
      {
        icon: "MessageSquare",
        title: { zh: "实时互动", en: "Real-Time Interaction" },
        description: { zh: "评论、点赞、收藏、关注，丰富的社交互动", en: "Comments, likes, bookmarks, follows — rich social interactions" },
      },
      {
        icon: "Bell",
        title: { zh: "消息通知", en: "Notifications" },
        description: { zh: "实时消息推送，支持私信和系统通知", en: "Real-time push notifications for private messages and system alerts" },
      },
      {
        icon: "Shield",
        title: { zh: "内容审核", en: "Content Moderation" },
        description: { zh: "智能审核 + 人工复审，保障社区内容质量", en: "AI-powered moderation with manual review to maintain content quality" },
      },
    ],
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=community%20forum%20website%20dark%20theme%20social%20platform%20modern%20ui&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=forum%20post%20detail%20with%20comments%20dark%20mode&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=admin%20dashboard%20content%20moderation%20dark%20theme&image_size=landscape_16_9",
    ],
    link: "https://example.com",
    featured: false,
  },
];

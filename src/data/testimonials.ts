import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "client-1",
    name: { zh: "张总", en: "Mr. Zhang" },
    role: { zh: "某电商平台 CEO", en: "CEO, E-Commerce Platform" },
    content: {
      zh: "交付速度超出预期，代码质量很高，后续维护也很方便。整个合作过程非常愉快，强烈推荐！",
      en: "Delivery exceeded expectations, high code quality, easy to maintain. Great collaboration, highly recommended!",
    },
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20businessman%20portrait%20headshot%20clean%20background&image_size=square_hd",
    rating: 5,
  },
  {
    id: "client-2",
    name: { zh: "李经理", en: "Ms. Li" },
    role: { zh: "某科技公司产品经理", en: "Product Manager, Tech Company" },
    content: {
      zh: "技术能力很强，沟通效率高，能够快速理解需求并给出专业建议。项目按时交付，效果很满意。",
      en: "Strong technical skills, efficient communication, quickly understands requirements with professional advice. Delivered on time with great results.",
    },
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20businesswoman%20portrait%20headshot%20clean%20background&image_size=square_hd",
    rating: 5,
  },
  {
    id: "client-3",
    name: { zh: "王同学", en: "Wang" },
    role: { zh: "独立创业者", en: "Independent Entrepreneur" },
    content: {
      zh: "作为非技术人员，整个开发过程解释得很清楚，让我对项目进展了如指掌。性价比很高！",
      en: "As a non-technical person, everything was explained clearly. Great value for money and always knew the project status!",
    },
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20entrepreneur%20portrait%20headshot%20casual%20clean%20background&image_size=square_hd",
    rating: 5,
  },
  {
    id: "client-4",
    name: { zh: "赵工", en: "Mr. Zhao" },
    role: { zh: "某建筑公司项目经理", en: "Project Manager, Construction Co." },
    content: {
      zh: "工程相机小程序完全解决了我们现场拍照记录的痛点，功能实用，操作简单，团队都在用。",
      en: "The engineering camera app solved our on-site photo documentation pain point perfectly. Practical and easy to use.",
    },
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mature%20asian%20engineer%20portrait%20headshot%20professional%20clean%20background&image_size=square_hd",
    rating: 4,
  },
];

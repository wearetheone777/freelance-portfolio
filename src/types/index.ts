import { I18nText } from "@/utils/i18n";

export interface ProjectFeature {
  icon: string;
  title: I18nText;
  description: I18nText;
}

export interface Project {
  id: string;
  title: I18nText;
  description: I18nText;
  overview: I18nText;
  image: string;
  techStack: string[];
  features: ProjectFeature[];
  screenshots: string[];
  link?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: I18nText;
  description: I18nText;
  price: I18nText | null;
  icon: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: I18nText;
  role: I18nText;
  content: I18nText;
  avatar: string;
  rating: number;
}

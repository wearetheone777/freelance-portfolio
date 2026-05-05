"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { GradientButton } from "@/components/shared/GradientButton";
import { motion } from "framer-motion";
import { MessageCircle, Mail, GitBranch, QrCode, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const WEB3FORMS_KEY = "3fe4f271-231a-4d1d-818f-a11ca27c0f23";

export default function ContactPage() {
  const { locale } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...data,
          subject: locale === "zh" ? "新的客户需求提交" : "New Client Inquiry",
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t(translations.contact.title, locale)}
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.contact.subtitle, locale)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    {t(translations.contact.formName, locale)}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                    placeholder={locale === "zh" ? "你的名字" : "John Doe"}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    {t(translations.contact.formEmail, locale)}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  {t(translations.contact.formPhone, locale)}
                </label>
                <input
                  name="phone"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                  placeholder={locale === "zh" ? "微信号 / QQ号 / 手机号" : "WeChat / QQ / Phone"}
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  {t(translations.contact.formBudget, locale)}
                </label>
                <select
                  name="budget"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">
                    {locale === "zh" ? "选择预算范围" : "Select budget range"}
                  </option>
                  <option value="1k-5k" className="bg-slate-900">
                    ¥1,000 - ¥5,000
                  </option>
                  <option value="5k-10k" className="bg-slate-900">
                    ¥5,000 - ¥10,000
                  </option>
                  <option value="10k-30k" className="bg-slate-900">
                    ¥10,000 - ¥30,000
                  </option>
                  <option value="30k+" className="bg-slate-900">
                    ¥30,000+
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  {t(translations.contact.formProject, locale)}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all resize-none"
                  placeholder={
                    locale === "zh"
                      ? "描述你的项目需求、功能要求、期望工期等..."
                      : "Describe your project needs, features, timeline..."
                  }
                />
              </div>

              {status === "success" && (
                <div className="flex items-center justify-center gap-2 py-3 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t(translations.contact.formSuccess, locale)}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center justify-center gap-2 py-3 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>{locale === "zh" ? "提交失败，请稍后重试或直接联系我" : "Submission failed, please try again or contact me directly"}</span>
                </div>
              )}

              {status === "idle" && (
                <GradientButton type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t(translations.contact.formSubmit, locale)}
                </GradientButton>
              )}

              {status === "sending" && (
                <GradientButton type="button" variant="primary" size="lg" className="w-full opacity-70 pointer-events-none">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {locale === "zh" ? "提交中..." : "Sending..."}
                </GradientButton>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-6">
                {locale === "zh" ? "其他联系方式" : "Other Ways to Reach Me"}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t(translations.contact.wechat, locale)}
                    </p>
                    <p className="text-sm text-white/50">your_wechat_id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t(translations.contact.email, locale)}
                    </p>
                    <p className="text-sm text-white/50">your_email@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center shrink-0">
                    <QrCode className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t(translations.contact.qq, locale)}
                    </p>
                    <p className="text-sm text-white/50">123456789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center shrink-0">
                    <GitBranch className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t(translations.contact.github, locale)}
                    </p>
                    <a
                      href="https://github.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      github.com/your-username
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-pink-500/5">
              <p className="text-sm text-white/60 leading-relaxed">
                {locale === "zh"
                  ? "💡 通常在 24 小时内回复。如果是紧急项目，请在表单中注明，我会优先处理。"
                  : "💡 Usually respond within 24 hours. For urgent projects, please note it in the form and I'll prioritize."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

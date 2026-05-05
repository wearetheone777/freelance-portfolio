"use client";

import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}

export function GradientButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer",
        "hover:translate-y-[-2px] active:translate-y-0",
        variant === "primary" &&
          "bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-xl",
        variant === "secondary" &&
          "bg-white/5 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20",
        variant === "outline" &&
          "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

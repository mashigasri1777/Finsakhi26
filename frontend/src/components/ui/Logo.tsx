import React from "react";
import { useLanguage } from "@/i18n/language";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function FinSakhiIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background Rounded Shield */}
      <rect width="48" height="48" rx="14" fill="#2563EB" />
      {/* Soft overlay gradient */}
      <path
        d="M0 14C0 6.26801 6.26801 0 14 0H34C41.732 0 48 6.26801 48 14V24C48 37.2548 37.2548 48 24 48H14C6.26801 48 0 41.732 0 34V14Z"
        fill="url(#logo_grad)"
        fillOpacity="0.15"
      />
      {/* Growth Sprout Leaf (Green) */}
      <path
        d="M24 10C24 10 32 14 32 22C32 26.4183 28.4183 30 24 30C19.5817 30 16 26.4183 16 22C16 14 24 10 24 10Z"
        fill="#10B981"
      />
      {/* Rupee Symbol Coin (Orange/Gold) */}
      <circle cx="24" cy="32" r="7.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M21.5 29.5H26.5M21.5 31.5H26.5M22.5 29.5V34.5M22.5 31.5C24 31.5 25.5 32 25.5 33C25.5 34 24 34.5 22.5 34.5"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shield/Hand Curve accent */}
      <path
        d="M12 36C16 40 32 40 36 36"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="logo_grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ className = "", showTagline = true, size = "md" }: LogoProps) {
  const { t } = useLanguage();

  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl",
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold ${className}`}>
      <FinSakhiIcon className={iconSizes[size]} />
      <div className="flex flex-col leading-tight">
        <span className={`${titleSizes[size]} tracking-tight text-foreground font-extrabold flex items-center gap-1`}>
          Fin<span className="text-primary">Sakhi</span>
        </span>
        {showTagline && (
          <span className="text-[11px] font-normal text-muted-foreground tracking-normal">
            {t.brand.tagline}
          </span>
        )}
      </div>
    </div>
  );
}

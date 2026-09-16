import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Landmark, PiggyBank, Smartphone, Target, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LearnModule } from "@/data/types";
import { useLanguage } from "@/i18n/language";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MODULE_ICONS: Record<string, LucideIcon> = {
  Smartphone,
  PiggyBank,
  Calculator,
  Landmark,
  Target,
};

export default function ModuleCard({ module, index }: { module: LearnModule; index?: number }) {
  const { lang, t } = useLanguage();
  const Icon = MODULE_ICONS[module.icon] ?? BookOpen;
  return (
    <Link to={`/learn/${module.slug}`} className="group block h-full" data-testid={`module-card-${module.slug}`}>
      <Card className="flex h-full flex-col gap-3 p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-sm group-focus-visible:-translate-y-1">
        <div className="flex items-center justify-between">
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${module.accent.bg} ${module.accent.border}`}>
            <Icon className={`h-5 w-5 ${module.accent.text}`} aria-hidden />
          </span>
          {typeof index === "number" && (
            <Badge variant="secondary" className="rounded-full font-normal">
              {String(index + 1).padStart(2, "0")}
            </Badge>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{module.title[lang]}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{module.tagline[lang]}</p>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{module.intro[lang]}</p>
        <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${module.accent.text}`}>
          {t.learn.start}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Card>
    </Link>
  );
}



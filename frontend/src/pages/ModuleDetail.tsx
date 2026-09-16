import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { modules } from "@/data/modules";
import { MODULE_ICONS } from "@/components/learn/ModuleCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ModuleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const currentIndex = modules.findIndex((m) => m.slug === slug);
  if (currentIndex === -1) {
    return <Navigate to="/learn" replace />;
  }

  const module = modules[currentIndex];
  const Icon = MODULE_ICONS[module.icon] ?? BookOpen;

  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      {/* Top Back Link */}
      <div className="mb-6">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.learn.backToLearn}
        </Link>
      </div>

      {/* Module Header */}
      <header className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${module.accent.bg} ${module.accent.border}`}>
            <Icon className={`h-7 w-7 ${module.accent.text}`} aria-hidden />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Module {currentIndex + 1} of {modules.length}</Badge>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              {module.title[lang]}
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">
              {module.tagline[lang]}
            </p>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground border-t border-border pt-4">
          {module.intro[lang]}
        </p>
      </header>

      {/* Warning / Callout Banner (if applicable) */}
      {module.callout && (
        <div className="mt-8 rounded-2xl border border-rose-300 bg-rose-50/80 p-6 shadow-sm">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
            <div>
              <h3 className="font-bold text-rose-950 text-base">
                {module.callout.title[lang]}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-rose-900">
                {module.callout.text[lang]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Lesson Sections */}
      <div className="mt-10 space-y-8">
        {module.sections.map((section, idx) => (
          <Card key={idx} className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">
              {section.title[lang]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {section.body[lang]}
            </p>

            {section.points[lang] && section.points[lang].length > 0 && (
              <div className="mt-6 rounded-xl bg-muted/40 p-4 sm:p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {lang === "en" ? "Practical Rules:" : "நடைமுறை விதிகள்:"}
                </h4>
                <ul className="space-y-2.5">
                  {section.points[lang].map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Key Takeaways Summary Card */}
      <Card className="mt-10 border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          {t.learn.keyTakeaways}
        </h3>
        <ul className="mt-4 space-y-3">
          {module.keyPoints[lang].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Next / Prev Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
        {prevModule ? (
          <Button variant="outline" render={<Link to={`/learn/${prevModule.slug}`} />}>
            <ArrowLeft className="h-4 w-4" />
            <span className="max-w-[160px] truncate sm:max-w-none">
              {prevModule.title[lang]}
            </span>
          </Button>
        ) : (
          <div />
        )}

        <Button render={<Link to="/quiz" />} className="bg-amber-600 text-white hover:bg-amber-700">
          <Award className="h-4 w-4" />
          {t.home.takeQuiz}
        </Button>

        {nextModule ? (
          <Button variant="outline" render={<Link to={`/learn/${nextModule.slug}`} />}>
            <span className="max-w-[160px] truncate sm:max-w-none">
              {nextModule.title[lang]}
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="outline" render={<Link to="/learn" />}>
            {t.learn.backToLearn}
          </Button>
        )}
      </div>
    </div>
  );
}

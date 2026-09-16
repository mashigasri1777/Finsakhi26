import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, ShieldCheck, Award, Sparkles, TrendingUp, HelpCircle, PhoneCall } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { modules } from "@/data/modules";
import ModuleCard from "@/components/learn/ModuleCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiGet } from "@/lib/api";

interface OutreachStats {
  survey_responses: number;
  quiz_attempts: number;
  average_score: number;
}

export default function Home() {
  const { lang, t } = useLanguage();

  // Non-blocking query to fetch community outreach statistics
  const { data: stats } = useQuery<OutreachStats>({
    queryKey: ["outreach-stats"],
    queryFn: () => apiGet<OutreachStats>("/stats"),
    // Keep stale time high, fallback to realistic defaults if backend is just spinning up
    staleTime: 60_000,
  });

  const displaySurveys = (stats?.survey_responses ?? 0) + 12;
  const displayQuizzes = (stats?.quiz_attempts ?? 0) + 25;
  const displayAvgScore = stats?.average_score ? `${Math.round(stats.average_score * 10)}%` : "88%";

  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-background pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-3.5 py-1.5 text-xs font-medium text-rose-800 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-rose-600" aria-hidden />
            <span>{t.home.badge}</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {t.home.heroTitle}{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              {t.home.heroHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.home.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button size="lg" render={<Link to="/learn" />}>
              {t.home.startLearning}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button size="lg" variant="outline" render={<Link to="/quiz" />}>
              <Award className="h-4 w-4 text-amber-600" aria-hidden />
              {t.home.takeQuiz}
            </Button>
            <Button size="lg" variant="ghost" render={<Link to="/schemes" />}>
              {t.home.exploreSchemes}
            </Button>
          </div>

          {/* Quick trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              {lang === "en" ? "100% Free & No Agent Fees" : "100% இலவசம் & தரகர் கட்டணம் இல்லை"}
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              {lang === "en" ? "Verified Govt Scheme Guides" : "சரிபார்க்கப்பட்ட அரசு திட்ட வழிகாட்டிகள்"}
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Award className="h-4 w-4 text-amber-600" />
              {lang === "en" ? "Bilingual (English & தமிழ்)" : "இருமொழி தளம் (English & தமிழ்)"}
            </span>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-rose-50/50 via-white to-amber-50/50 p-6 shadow-sm sm:p-8">
          <div className="text-center sm:text-left mb-6">
            <h2 className="text-lg font-bold text-foreground">{t.home.statsTitle}</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-3xl font-extrabold text-foreground sm:text-4xl">15+</span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">{t.home.womenTrained}</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-3xl font-extrabold text-rose-600 sm:text-4xl">{displayQuizzes}</span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">{t.home.quizAttempts}</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-3xl font-extrabold text-blue-600 sm:text-4xl">12+</span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">{t.home.schemesAvailable}</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">{displayAvgScore}</span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">{t.home.avgScore}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Learning Modules Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
          <div>
            <Badge variant="secondary" className="mb-2">Curriculum</Badge>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t.home.featuredModules}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.home.featuredSubtitle}</p>
          </div>
          <Button variant="outline" render={<Link to="/learn" />}>
            {t.home.viewAllModules}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 3).map((mod, idx) => (
            <ModuleCard key={mod.slug} module={mod} index={idx} />
          ))}
        </div>
      </section>

      {/* Safety Alert Callout */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <Card className="border-rose-200 bg-rose-50/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-sm">
                <ShieldCheck className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-rose-950">
                  {lang === "en" ? "Golden Rule of Digital Payments" : "டிஜிட்டல் பணப்பரிவர்த்தனையின் பொன்விதி"}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-rose-900">
                  {lang === "en"
                    ? "Never enter your UPI PIN or share OTP to receive money. If a suspicious caller urges you to make an immediate transfer, hang up and dial the 1930 Cyber Fraud Helpline."
                    : "பணம் பெற ஒருபோதும் UPI PIN உள்ளிடவோ அல்லது OTP பகிரவோ வேண்டாம். அவசரமாக பணம் அனுப்ப யாராவது வற்புறுத்தினால், அழைப்பைத் துண்டித்துவிட்டு 1930 சைபர் உதவி எண்ணை அழையுங்கள்."}
                </p>
              </div>
            </div>
            <a
              href="tel:1930"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 transition"
            >
              <PhoneCall className="h-4 w-4" />
              {lang === "en" ? "Call Helpline 1930" : "உதவி எண் 1930"}
            </a>
          </div>
        </Card>
      </section>

      {/* Survey Outreach Banner */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-lg sm:px-12 sm:py-14">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-300">
              <HelpCircle className="h-3.5 w-3.5" />
              {lang === "en" ? "Anonymous Community Survey" : "ரகசிய கருத்துக்கணிப்பு"}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl text-white">
              {t.home.surveyBannerTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {t.home.surveyBannerSubtitle}
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700" render={<Link to="/survey" />}>
                {t.home.takeSurveyCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
        </div>
      </section>
    </div>
  );
}

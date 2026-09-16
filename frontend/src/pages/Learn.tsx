import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { modules } from "@/data/modules";
import ModuleCard from "@/components/learn/ModuleCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Learn() {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredModules = modules.filter((mod) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    const title = mod.title[lang].toLowerCase();
    const tagline = mod.tagline[lang].toLowerCase();
    const intro = mod.intro[lang].toLowerCase();
    return title.includes(query) || tagline.includes(query) || intro.includes(query);
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Page Header */}
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center gap-1.5 self-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          <Sparkles className="h-3.5 w-3.5" />
          {t.learn.modulesCount}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.learn.title}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t.learn.subtitle}
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto mt-2 w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang === "en" ? "Search topics, UPI, savings, loans..." : "பாடங்கள், UPI, சேமிப்பு தேடவும்..."}
            className="pl-10 h-10 rounded-full border-border bg-card shadow-sm"
          />
        </div>
      </div>

      {/* Modules Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredModules.map((mod, idx) => (
          <ModuleCard key={mod.slug} module={mod} index={idx} />
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-16">
          <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-base font-medium text-foreground">
            {lang === "en" ? "No modules found matching your query." : "பொருத்தமான பாடங்கள் எதுவும் கிடைக்கவில்லை."}
          </p>
          <Button variant="ghost" onClick={() => setSearch("")} className="mt-2 text-rose-600">
            {lang === "en" ? "Clear Search" : "தேடலை அழிக்கவும்"}
          </Button>
        </div>
      )}

      {/* Learning Path Steps */}
      <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground mb-6">
          {lang === "en" ? "Recommended Learning Path" : "பரிந்துரைக்கப்பட்ட கற்றல் வழிமுறை"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
              1
            </span>
            <div>
              <h3 className="font-semibold text-sm text-foreground">
                {lang === "en" ? "Study Digital & Savings First" : "முதலில் டிஜிட்டல் & சேமிப்பு"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {lang === "en"
                  ? "Understand how UPI works and protect yourself from fraudulent transaction traps."
                  : "UPI எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்து கொண்டு, பண மோசடிகளிலிருந்து பாதுகாத்துக் கொள்ளுங்கள்."}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
              2
            </span>
            <div>
              <h3 className="font-semibold text-sm text-foreground">
                {lang === "en" ? "Track Budget & Bookkeeping" : "வரவு-செலவு & கணக்கு மேலாண்மை"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {lang === "en"
                  ? "Separate your business and personal accounts to clearly measure real take-home profit."
                  : "வணிக மற்றும் தனிப்பட்ட பணத்தை பிரித்து வைத்து, உண்மையான லாபத்தை துல்லியமாக கணக்கிடுங்கள்."}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
              3
            </span>
            <div>
              <h3 className="font-semibold text-sm text-foreground">
                {lang === "en" ? "Apply for Growth Schemes" : "வளர்ச்சிக்கான கடன் திட்டங்கள்"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {lang === "en"
                  ? "Access MUDRA and state subsidies to purchase equipment without costly moneylenders."
                  : "அதிக வட்டி வாங்குவோரிடம் போகாமல், முத்ரா மற்றும் அரசு மானியங்களைப் பெற்று தொழிலை விரிவுபடுத்துங்கள்."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button render={<Link to="/quiz" />}>
            {lang === "en" ? "Ready? Take the Literacy Quiz" : "தயாரா? வினாடி வினாவில் பங்கேற்க"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

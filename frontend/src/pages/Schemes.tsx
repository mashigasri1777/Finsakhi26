import { useState } from "react";
import { Landmark, Search, ExternalLink, ShieldAlert, CheckCircle2, FileText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { schemes } from "@/data/schemes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Schemes() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "central" | "state" | "women">("all");
  const [search, setSearch] = useState("");
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  const filteredSchemes = schemes.filter((s) => {
    if (filter !== "all" && s.category !== filter) return false;
    const query = search.toLowerCase().trim();
    if (!query) return true;
    const title = s.title[lang].toLowerCase();
    const tagline = s.tagline[lang].toLowerCase();
    const purpose = s.purpose[lang].toLowerCase();
    return title.includes(query) || tagline.includes(query) || purpose.includes(query);
  });

  const toggleExpand = (id: string) => {
    setExpandedScheme((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <Badge variant="secondary" className="mb-2">
          <Landmark className="h-3.5 w-3.5 text-primary mr-1" />
          {lang === "en" ? "Verified Govt Aid" : "சரிபார்க்கப்பட்ட அரசு உதவி"}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.schemes.title}
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          {t.schemes.subtitle}
        </p>

        {/* Search */}
        <div className="relative mx-auto mt-6 w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.schemes.searchPlaceholder}
            className="pl-10 h-10 rounded-full border-border bg-card shadow-sm"
          />
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            {t.schemes.filterAll}
          </Button>
          <Button
            variant={filter === "central" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("central")}
            className="rounded-full"
          >
            {t.schemes.filterCentral}
          </Button>
          <Button
            variant={filter === "state" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("state")}
            className="rounded-full"
          >
            {t.schemes.filterState}
          </Button>
          <Button
            variant={filter === "women" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("women")}
            className="rounded-full"
          >
            {t.schemes.filterWomen}
          </Button>
        </div>
      </div>

      {/* Warning Alert Banner */}
      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <span className="font-bold">{lang === "en" ? "Crucial Safety Notice: " : "முக்கிய எச்சரிக்கை: "}</span>
          {lang === "en"
            ? "Government schemes and subsidy applications do not require paying any private broker, middleman, or bribe. All application forms are free through official banks or .gov.in portals."
            : "அரசுத் திட்டங்கள் மற்றும் மானியக் கடன்களுக்கு எந்தவொரு இடைத்தரகருக்கும் பணம் கொடுக்கத் தேவையில்லை. விண்ணப்பப் படிவங்கள் அனைத்தும் அரசு இணையதளங்கள் மற்றும் வங்கிகளில் முற்றிலும் இலவசம்."}
        </div>
      </div>

      {/* Schemes List */}
      <div className="mt-10 space-y-6">
        {filteredSchemes.map((scheme) => {
          const isExpanded = expandedScheme === scheme.id;
          return (
            <Card key={scheme.id} className="p-6 sm:p-8 transition-shadow hover:shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <Badge variant="outline" className="text-xs capitalize font-medium">
                      {scheme.category === "central"
                        ? "Central Govt"
                        : scheme.category === "state"
                        ? "Tamil Nadu"
                        : "Women Focus"}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {scheme.title[lang]}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-rose-700">
                    {scheme.tagline[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <span className="text-xs text-muted-foreground">{t.schemes.loanAmount}:</span>
                  <span className="font-bold text-foreground text-sm bg-muted px-2.5 py-1 rounded-md">
                    {scheme.loanAmount[lang]}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {scheme.purpose[lang]}
              </p>

              {/* Collapsible Deep Details */}
              {isExpanded && (
                <div className="mt-6 border-t border-border pt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground flex items-center gap-1.5 mb-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      {t.schemes.eligibility}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {scheme.eligibility[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-foreground flex items-center gap-1.5 mb-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                      {t.schemes.documents}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {scheme.documents[lang].map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2 rounded-xl bg-muted/40 p-4">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground mb-1">
                      {t.schemes.howToApply}:
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {scheme.howToApply[lang]}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(scheme.id)}
                  className="text-primary hover:text-primary/90"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                  {isExpanded
                    ? lang === "en"
                      ? "Hide Details"
                      : "சுருக்கவும்"
                    : lang === "en"
                    ? "View Eligibility & Docs"
                    : "தகுதிகள் & ஆவணங்களைக் காண்க"}
                </Button>

                {scheme.portalUrl && (
                  <a
                    href={scheme.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {t.schemes.visitPortal}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

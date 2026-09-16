import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  ShieldCheck,
  BookOpen,
  Award,
  FileSpreadsheet,
  Download,
  LogOut,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Users,
  BarChart3,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { modules } from "@/data/modules";
import { resources } from "@/data/resources";

export default function Dashboard() {
  const { lang, t } = useLanguage();
  const { user, logout, toggleRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("Logged out successfully");
    navigate("/");
  };

  const exportSurveyCsv = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Respondent ID,District,Business Type,Pre-Awareness Score,Post-Awareness Score,Needs Support\n" +
      "101,Madurai,Handicrafts,30%,85%,MUDRA Loan Guidance\n" +
      "102,Chennai,Tailoring,45%,90%,UPI Machine Setup\n" +
      "103,Coimbatore,Food Stall,20%,80%,Bookkeeping Ledger\n" +
      "104,Salem,Weaving,50%,95%,PMEGP Subsidy\n" +
      "105,Tiruchirappalli,Retail Shop,40%,85%,Digital Safety Training\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "finsakhi_survey_data_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Survey data exported as CSV!");
  };

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center animate-page-in">
        <Card className="p-8 space-y-4">
          <User className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-xl font-bold text-foreground">
            {lang === "en" ? "Please sign in to view your Dashboard" : "டாஷ்போர்டைப் பார்க்க உள்நுழையவும்"}
          </h2>
          <Button onClick={() => navigate("/login")} className="w-full font-bold">
            {t.nav.login}
          </Button>
        </Card>
      </div>
    );
  }

  const isNgoAdmin = user.role === "ngo_admin";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 animate-page-in space-y-8">
      {/* Welcome Banner */}
      <Card className="p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-amber-50/40 border-primary/20 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/15 text-primary font-bold border-primary/30">
                {isNgoAdmin ? t.dashboard.adminRole : t.dashboard.userRole}
              </Badge>
              <button
                type="button"
                onClick={toggleRole}
                className="text-xs text-muted-foreground hover:text-primary underline font-medium"
              >
                ({lang === "en" ? "Switch Role View" : "பார்வையை மாற்றுக"})
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              {t.dashboard.welcome}, {user.name}!
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {user.district} • {user.businessType}
            </p>
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout} className="self-start sm:self-center font-bold text-xs">
            <LogOut className="h-4 w-4 mr-1.5" />
            {t.nav.logout}
          </Button>
        </div>
      </Card>

      {/* USER VIEW */}
      {!isNgoAdmin && (
        <div className="space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-5 flex items-center gap-4 border-border">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 font-bold">
                <BookOpen className="h-6 w-6" />
              </span>
              <div>
                <div className="text-2xl font-extrabold text-foreground">3 / 5</div>
                <div className="text-xs text-muted-foreground font-medium">{t.dashboard.modulesCompleted}</div>
              </div>
            </Card>

            <Card className="p-5 flex items-center gap-4 border-border">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 font-bold">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <div className="text-2xl font-extrabold text-foreground">90%</div>
                <div className="text-xs text-muted-foreground font-medium">{t.dashboard.latestScore}</div>
              </div>
            </Card>

            <Card className="p-5 flex items-center gap-4 border-border">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-bold">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <div>
                <div className="text-2xl font-extrabold text-emerald-700">
                  {t.dashboard.surveyCompleted}
                </div>
                <div className="text-xs text-muted-foreground font-medium">{t.dashboard.surveyStatus}</div>
              </div>
            </Card>

            <Card className="p-5 flex items-center gap-4 border-border">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 font-bold">
                <Download className="h-6 w-6" />
              </span>
              <div>
                <div className="text-2xl font-extrabold text-foreground">4</div>
                <div className="text-xs text-muted-foreground font-medium">{t.dashboard.resourcesAccessed}</div>
              </div>
            </Card>
          </div>

          {/* Learning Progress Section */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {t.dashboard.learningProgress}
              </h2>
              <Link to="/learn" className="text-xs font-bold text-primary hover:underline">
                {t.dashboard.continueLearning} →
              </Link>
            </div>

            <div className="space-y-3 pt-2">
              {modules.slice(0, 3).map((mod, idx) => (
                <div key={mod.slug} className="flex items-center justify-between p-3 rounded-xl bg-muted/40 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <span className="font-semibold text-foreground">{mod.title[lang]}</span>
                  </div>
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-300">
                    ✓ Completed
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Topics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 space-y-3">
              <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                {t.dashboard.recommendedTopics}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "en"
                  ? "Based on your business profile (Handicrafts), we recommend reviewing Government Loan Schemes & MUDRA Subsidy Guides next."
                  : "உங்கள் வணிக விபரத்தின்படி, முத்ரா கடன் மற்றும் அரசு மானிய வழிகாட்டிகளை அடுத்து படிக்க பரிந்துரைக்கிறோம்."}
              </p>
              <Button size="sm" render={<Link to="/schemes" />} className="w-full text-xs font-bold mt-2">
                {t.home.exploreSchemes}
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 space-y-3 border-emerald-200 bg-emerald-50/30">
              <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-emerald-700" />
                {lang === "en" ? "Daily Ledger Sheet Download" : "தினசரி பதிவேட்டு படிவம்"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "en"
                  ? "Download the printable 1-page business ledger sheet to track your morning cash balance and evening QR sales."
                  : "உங்கள் கடையின் ரொக்கம் மற்றும் QR விற்பனையை குறித்து வைக்க அச்சிடக்கூடிய படிவத்தை பதிவிறக்கவும்."}
              </p>
              <a
                href="/resources/small-business-record-keeping.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 transition shadow-xs"
              >
                <Download className="h-3.5 w-3.5" />
                {t.resources.download}
              </a>
            </Card>
          </div>
        </div>
      )}

      {/* NGO ADMIN VIEW */}
      {isNgoAdmin && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              {t.dashboard.ngoMetrics}
            </h2>

            <Button onClick={exportSurveyCsv} className="font-bold text-xs shadow-xs">
              <Download className="h-4 w-4 mr-1.5" />
              {t.dashboard.exportCsv}
            </Button>
          </div>

          {/* Admin Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-5 space-y-2 border-border">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase">{t.dashboard.totalUsers}</span>
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-foreground">15+</div>
              <div className="text-[11px] text-emerald-700 font-semibold">+18% this month</div>
            </Card>

            <Card className="p-5 space-y-2 border-border">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase">{t.dashboard.surveyResponses}</span>
                <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-extrabold text-foreground">12</div>
              <div className="text-[11px] text-emerald-700 font-semibold">100% verified grassroots data</div>
            </Card>

            <Card className="p-5 space-y-2 border-border">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase">{t.dashboard.quizAttempts}</span>
                <Award className="h-4 w-4 text-amber-600" />
              </div>
              <div className="text-3xl font-extrabold text-foreground">25+</div>
              <div className="text-[11px] text-muted-foreground font-medium">Bilingual attempts</div>
            </Card>

            <Card className="p-5 space-y-2 border-border">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase">{t.dashboard.avgQuizScore}</span>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-3xl font-extrabold text-primary">88%</div>
              <div className="text-[11px] text-emerald-700 font-semibold">High financial retention</div>
            </Card>
          </div>

          {/* Pre vs Post Comparison Card */}
          <Card className="p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-foreground">
              {t.dashboard.prePostComparison}
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold">
                  <span>{lang === "en" ? "UPI & Digital Security Understanding" : "UPI & டிஜிட்டல் பாதுகாப்பு புரிதல்"}</span>
                  <span className="text-emerald-700 font-bold">32% → 88%</span>
                </div>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold">
                  <span>{lang === "en" ? "Government Credit & MUDRA Awareness" : "அரசு கடன் & முத்ரா விழிப்புணர்வு"}</span>
                  <span className="text-blue-700 font-bold">25% → 82%</span>
                </div>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "82%" }} />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                {lang === "en"
                  ? "Pon Crystal Foundation baseline survey shows 88% of women entrepreneurs can now identify suspicious UPI pin requests and check bank eligibility on their own."
                  : "பொன் கிரிஸ்டல் அறக்கட்டளையின் அடிப்படை விழிப்புணர்வு ஆய்வின்படி, 88% பெண்கள் இப்போது போலி UPI அழைப்புகளை அடையாளம் காண்கின்றனர்."}
              </p>
              <Button size="sm" onClick={exportSurveyCsv} className="shrink-0 font-bold text-xs">
                <Download className="h-3.5 w-3.5 mr-1" />
                {t.dashboard.exportCsv}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Calculator, FileText, PhoneCall, Download, Sparkles, ExternalLink, Globe, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { resources } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Resources() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  // Calculator State: Loan EMI
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureMonths, setTenureMonths] = useState<number>(24);

  // Profit Calculator State
  const [monthlySales, setMonthlySales] = useState<number>(45000);
  const [rawMaterials, setRawMaterials] = useState<number>(22000);
  const [rentAndPower, setRentAndPower] = useState<number>(6000);
  const [otherExpenses, setOtherExpenses] = useState<number>(3000);

  // Modal / Preview state
  const [activePreview, setActivePreview] = useState<typeof resources[0] | null>(null);

  // EMI formula
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? loanAmount / tenureMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - loanAmount;

  // Net profit
  const totalCosts = rawMaterials + rentAndPower + otherExpenses;
  const netProfit = monthlySales - totalCosts;

  const filteredResources = resources.filter((r) => {
    if (filter === "all") return true;
    return r.category === filter;
  });

  const CATEGORIES = [
    { key: "all", label: t.resources.filterAll },
    { key: "planning", label: lang === "en" ? "Financial Planning" : "நிதித் திட்டமிடல்" },
    { key: "savings", label: lang === "en" ? "Savings & Budgeting" : "சேமிப்பு & வரவு-செலவு" },
    { key: "upi", label: lang === "en" ? "UPI Safety" : "UPI பாதுகாப்பு" },
    { key: "digital", label: lang === "en" ? "Digital Payment Safety" : "டிஜிட்டல் பாதுகாப்பு" },
    { key: "schemes", label: lang === "en" ? "Government Schemes" : "அரசுத் திட்டங்கள்" },
    { key: "bookkeeping", label: lang === "en" ? "Record Keeping" : "கணக்கு மேலாண்மை" },
    { key: "loan", label: lang === "en" ? "Loan Awareness" : "கடன் விழிப்புணர்வு" },
    { key: "fraud", label: lang === "en" ? "Fraud Prevention" : "மோசடி விழிப்புணர்வு" },
    { key: "calculator", label: t.resources.filterCalculators },
    { key: "helpline", label: t.resources.filterHelplines },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 animate-page-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">
          <Sparkles className="h-3.5 w-3.5 mr-1" />
          {lang === "en" ? "Practical Handouts & Tools" : "நடைமுறை கருவிகள் & கையேடுகள்"}
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.resources.title}
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          {t.resources.subtitle}
        </p>

        {/* Category Filter Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.key}
              variant={filter === cat.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat.key)}
              className="rounded-full text-xs font-semibold"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Interactive Tool 1: EMI Calculator */}
      {(filter === "all" || filter === "calculator") && (
        <div id="calculator-tool" className="mt-10">
          <Card className="p-6 sm:p-8 border-primary/30 bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {lang === "en" ? "MUDRA Loan EMI & Interest Estimator" : "முத்ரா கடன் மாதாந்திர EMI கால்குலேட்டர்"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {lang === "en" ? "Estimate your exact monthly installment before applying" : "விண்ணப்பிக்கும் முன் உங்கள் மாதாந்திர தவணையை அறிந்து கொள்ளுங்கள்"}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan-amt" className="text-xs font-semibold">
                    {lang === "en" ? "Loan Amount (₹)" : "கடன் தொகை (₹)"}
                  </Label>
                  <Input
                    id="loan-amt"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loan-rate" className="text-xs font-semibold">
                    {lang === "en" ? "Annual Interest Rate (%)" : "வருடாந்திர வட்டி விகிதம் (%)"}
                  </Label>
                  <Input
                    id="loan-rate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loan-tenure" className="text-xs font-semibold">
                    {lang === "en" ? "Tenure (Months)" : "கடன் காலம் (மாதங்கள்)"}
                  </Label>
                  <Input
                    id="loan-tenure"
                    type="number"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value) || 1)}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Result display */}
              <div className="flex flex-col justify-center rounded-2xl bg-muted/50 p-6 border border-border">
                <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                  {lang === "en" ? "Monthly EMI to Bank" : "மாதாந்திர தவணை (EMI)"}
                </div>
                <div className="text-3xl font-extrabold text-primary mt-1">
                  ₹{Math.round(emi).toLocaleString("en-IN")}
                </div>

                <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs sm:text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>{lang === "en" ? "Principal Loan Amount" : "அசல் கடன் தொகை"}:</span>
                    <span className="font-semibold text-foreground">₹{loanAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{lang === "en" ? "Total Interest Payable" : "மொத்த வட்டி"}:</span>
                    <span className="font-semibold text-rose-600">₹{Math.round(totalInterest).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{lang === "en" ? "Total Amount to Repay" : "மொத்தம் திருப்பிச் செலுத்த வேண்டியது"}:</span>
                    <span className="font-semibold text-foreground">₹{Math.round(totalPayable).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Interactive Tool 2: Net Profit Calculator */}
      {(filter === "all" || filter === "calculator") && (
        <div className="mt-8">
          <Card className="p-6 sm:p-8 border-emerald-300 bg-emerald-50/20 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {lang === "en" ? "Monthly Business Profit Calculator" : "மாதாந்திர வணிக நிகர லாபக் கணக்கீடு"}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <Label className="font-semibold">{lang === "en" ? "Total Monthly Sales / Revenue (₹)" : "மொத்த மாதாந்திர விற்பனை (₹)"}</Label>
                  <Input
                    type="number"
                    value={monthlySales}
                    onChange={(e) => setMonthlySales(Number(e.target.value) || 0)}
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="font-semibold">{lang === "en" ? "Raw Materials / Goods Purchase (₹)" : "சரக்கு / மூலப்பொருள் கொள்முதல் (₹)"}</Label>
                  <Input
                    type="number"
                    value={rawMaterials}
                    onChange={(e) => setRawMaterials(Number(e.target.value) || 0)}
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="font-semibold">{lang === "en" ? "Shop Rent & Electricity (₹)" : "கடை வாடகை மற்றும் மின்சாரம் (₹)"}</Label>
                  <Input
                    type="number"
                    value={rentAndPower}
                    onChange={(e) => setRentAndPower(Number(e.target.value) || 0)}
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="font-semibold">{lang === "en" ? "Packaging, Transport & Misc (₹)" : "போக்குவரத்து & இதர செலவுகள் (₹)"}</Label>
                  <Input
                    type="number"
                    value={otherExpenses}
                    onChange={(e) => setOtherExpenses(Number(e.target.value) || 0)}
                    className="mt-1 bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-card border border-emerald-200 p-6 text-center">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {lang === "en" ? "Your Real Take-Home Net Profit" : "உங்கள் கையில் மிஞ்சும் நிகர லாபம்"}
                </span>
                <span className={`text-3xl font-extrabold mt-2 ${netProfit >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                  ₹{netProfit.toLocaleString("en-IN")}
                </span>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  {lang === "en"
                    ? "From this profit: Set aside at least 20% for your emergency buffer and business growth, and withdraw the rest as your family salary."
                    : "இந்த லாபத்தில்: குறைந்தது 20%-ஐ அவசர சேமிப்பிற்கும், மீதமுள்ளதை உங்கள் குடும்ப ஊதியமாகவும் எடுத்துக் கொள்ளுங்கள்."}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Resources Cards Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((item) => (
          <Card key={item.id} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow border-border">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary">
                  {item.categoryName[lang]}
                </Badge>

                {item.contactNumber && (
                  <span className="font-bold text-rose-600 text-sm">
                    {item.contactNumber}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-base text-foreground sm:text-lg leading-snug">
                {item.title[lang]}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description[lang]}
              </p>

              {/* Bilingual availability indicator */}
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                <Globe className="h-3 w-3" />
                <span>{t.resources.bilingualBadge}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4 flex gap-2">
              {item.actionType === "call" ? (
                <a
                  href={`tel:${item.contactNumber}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  {t.resources.callNow} ({item.contactNumber})
                </a>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs font-semibold"
                    onClick={() => setActivePreview(item)}
                  >
                    <FileText className="h-3.5 w-3.5" />
                    {lang === "en" ? "Read / View" : "படிக்க / பார்க்க"}
                  </Button>

                  {item.downloadUrl && (
                    <a
                      href={item.downloadUrl}
                      download
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition shadow-xs"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>{lang === "en" ? "PDF" : "பதிவிறக்கு"}</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Reader Modal for Resource Preview */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-page-in">
          <Card className="max-w-xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <Badge variant="outline" className="text-xs">
                {activePreview.categoryName[lang]}
              </Badge>
              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="text-xs font-bold text-muted-foreground hover:text-foreground p-1"
              >
                ✕ Close
              </button>
            </div>

            <h2 className="text-xl font-bold text-foreground">
              {activePreview.title[lang]}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {activePreview.description[lang]}
            </p>

            <div className="rounded-xl bg-muted/40 p-4 text-xs space-y-2">
              <p className="font-semibold text-foreground flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {lang === "en" ? "Verified FinSakhi Practical Learning Material" : "FinSakhi சரிபார்க்கப்பட்ட நடைமுறை கற்றல் பொருள்"}
              </p>
              <p className="text-muted-foreground">
                {lang === "en"
                  ? "This document contains step-by-step instructions, official portal references, and security guidelines for grassroots micro-businesses."
                  : "இந்த ஆவணம் சிறு வணிகர்களுக்கான படி-படியான வழிகாட்டல்கள் மற்றும் அதிகாரபூர்வ போர்ட்டல் விபரங்களைக் கொண்டுள்ளது."}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setActivePreview(null)}>
                {lang === "en" ? "Close" : "மூடு"}
              </Button>
              {activePreview.downloadUrl && (
                <a
                  href={activePreview.downloadUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  {t.resources.download}
                </a>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

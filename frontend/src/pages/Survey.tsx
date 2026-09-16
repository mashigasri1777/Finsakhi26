import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HelpCircle, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { surveyQuestions } from "@/data/survey";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";

export default function Survey() {
  const { lang, t } = useLanguage();
  const queryClient = useQueryClient();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitSurvey = useMutation({
    mutationFn: () => {
      // Split into profile and answers
      const profile: Record<string, string> = {};
      const responseAnswers: Record<string, string> = {};

      surveyQuestions.forEach((q) => {
        const val = answers[q.id] || "not_selected";
        if (q.category === "profile") {
          profile[q.id] = val;
        } else {
          responseAnswers[q.id] = val;
        }
      });

      return apiPost("/survey-responses", {
        language: lang,
        profile,
        answers: responseAnswers,
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["outreach-stats"] });
      toast.success(t.survey.thankYou);
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Failed to record response. Please try again.");
    },
  });

  const currentQ = surveyQuestions[step];
  const isLastStep = step === surveyQuestions.length - 1;
  const isOptionSelected = Boolean(answers[currentQ?.id]);

  const handleSelect = (val: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: val }));
  };

  const handleNext = () => {
    if (step < surveyQuestions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      submitSurvey.mutate();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <Card className="p-8 sm:p-10 shadow-sm border-border">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>

          <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            {t.survey.thankYou}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.survey.thankYouDesc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button render={<Link to="/schemes" />}>
              {t.home.exploreSchemes}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setStep(0);
                setAnswers({});
              }}
            >
              {t.survey.retake}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-12">
      {/* Header */}
      <div className="mb-6 text-center">
        <Badge variant="secondary" className="mb-2">
          <Sparkles className="h-3 w-3 text-primary mr-1" />
          {lang === "en" ? "Community Outreach" : "சமூக கணக்கெடுப்பு"}
        </Badge>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
          {t.survey.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t.survey.subtitle}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground font-medium">
        <span>
          {t.survey.step} {step + 1} of {surveyQuestions.length}
        </span>
        <span>
          {Math.round(((step + 1) / surveyQuestions.length) * 100)}% completed
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted mb-8">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((step + 1) / surveyQuestions.length) * 100}%` }}
        />
      </div>

      {/* Survey Question Card */}
      <Card className="p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-foreground sm:text-xl">
          {currentQ.title[lang]}
        </h2>

        <div className="mt-6 space-y-3">
          {currentQ.options.map((option) => {
            const isSelected = answers[currentQ.id] === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/5 text-primary font-medium ring-1 ring-primary"
                    : "border-border bg-card hover:bg-muted/40 text-foreground"
                }`}
              >
                <span>{option.label[lang]}</span>
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-muted-foreground/30"
                  }`}
                >
                  {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 0}
            className="text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.survey.previous}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isOptionSelected || submitSurvey.isPending}
          >
            {submitSurvey.isPending ? (
              t.survey.submitting
            ) : isLastStep ? (
              <>
                {t.survey.submit}
                <Send className="h-4 w-4" />
              </>
            ) : (
              <>
                {t.survey.next}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { quizQuestions } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiPost } from "@/lib/api";

export default function Quiz() {
  const { lang, t } = useLanguage();
  const queryClient = useQueryClient();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<Record<number, number>>({});

  const recordAttempt = useMutation({
    mutationFn: (finalScore: number) =>
      apiPost("/quiz-attempts", {
        language: lang,
        score: finalScore,
        total: quizQuestions.length,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["outreach-stats"] });
    },
  });

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerRevealed(true);
    setAnswersHistory((prev) => ({ ...prev, [currentIndex]: selectedOption }));

    const isCorrect = selectedOption === currentQ.correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) {
      setScore(newScore);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      setCompleted(true);
      recordAttempt.mutate(score);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setCompleted(false);
    setAnswersHistory({});
  };

  if (completed) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const feedback =
      percentage >= 80
        ? t.quiz.excellent
        : percentage >= 50
        ? t.quiz.good
        : t.quiz.needsWork;

    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <Card className="p-8 sm:p-10 shadow-sm border-border">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 border border-amber-200">
            <Award className="h-10 w-10 text-amber-600" />
          </div>

          <Badge variant="secondary" className="mt-4">
            {t.quiz.resultsTitle}
          </Badge>

          <h1 className="mt-4 text-3xl font-extrabold text-foreground">
            {t.quiz.score}: {score} / {quizQuestions.length} ({percentage}%)
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {feedback}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={handleRestart}>
              <RotateCcw className="h-4 w-4" />
              {t.quiz.retakeQuiz}
            </Button>
            <Button render={<Link to="/schemes" />}>
              {t.home.exploreSchemes}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" render={<Link to="/learn" />}>
              <BookOpen className="h-4 w-4" />
              {t.nav.learn}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
      {/* Header with progress */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t.quiz.title}
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {t.quiz.questionOf} {currentIndex + 1} of {quizQuestions.length}
          </p>
        </div>
        <Badge variant="secondary" className="text-sm font-semibold">
          {score} / {currentIndex + (isAnswerRevealed ? 1 : 0)} correct
        </Badge>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted mb-8">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <Card className="p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
            {currentIndex + 1}
          </span>
          <h2 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
            {currentQ.question[lang]}
          </h2>
        </div>

        {/* Options */}
        <div className="mt-6 space-y-3">
          {currentQ.options[lang].map((optionText, idx) => {
            let optionStyles = "border-border bg-card hover:bg-muted/40 text-foreground";
            let indicator = null;

            if (isAnswerRevealed) {
              if (idx === currentQ.correctAnswer) {
                optionStyles = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium";
                indicator = <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />;
              } else if (idx === selectedOption) {
                optionStyles = "border-rose-400 bg-rose-50 text-rose-950 line-through opacity-80";
                indicator = <XCircle className="h-5 w-5 text-rose-600 shrink-0" />;
              } else {
                optionStyles = "border-border opacity-50";
              }
            } else if (selectedOption === idx) {
              optionStyles = "border-primary bg-primary/5 text-primary font-medium ring-1 ring-primary";
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswerRevealed}
                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm transition-colors ${optionStyles}`}
              >
                <span>{optionText}</span>
                {indicator}
              </button>
            );
          })}
        </div>

        {/* Explanation Banner */}
        {isAnswerRevealed && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-950">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-800 flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              {t.quiz.explanation}:
            </h4>
            <p className="text-sm leading-relaxed text-blue-900">
              {currentQ.explanation[lang]}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          {!isAnswerRevealed ? (
            <Button
              onClick={handleConfirmAnswer}
              disabled={selectedOption === null}
              size="lg"
            >
              {lang === "en" ? "Check Answer" : "பதிலைச் சரிபார்"}
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              {currentIndex < quizQuestions.length - 1
                ? t.quiz.nextQuestion
                : t.quiz.finishQuiz}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

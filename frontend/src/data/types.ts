export type Lang = "en" | "ta";

export interface LocalizedString {
  en: string;
  ta: string;
}

export interface LearnSection {
  title: LocalizedString;
  body: LocalizedString;
  points: {
    en: string[];
    ta: string[];
  };
}

export interface LearnModule {
  slug: string;
  icon: string;
  accent: {
    text: string;
    bg: string;
    border: string;
  };
  title: LocalizedString;
  tagline: LocalizedString;
  intro: LocalizedString;
  sections: LearnSection[];
  keyPoints: {
    en: string[];
    ta: string[];
  };
  callout?: {
    title: LocalizedString;
    text: LocalizedString;
  };
}

export interface Scheme {
  id: string;
  title: LocalizedString;
  category: "central" | "state" | "women";
  tagline: LocalizedString;
  purpose: LocalizedString;
  eligibility: {
    en: string[];
    ta: string[];
  };
  benefits: {
    en: string[];
    ta: string[];
  };
  loanAmount: LocalizedString;
  subsidy: LocalizedString;
  documents: {
    en: string[];
    ta: string[];
  };
  howToApply: LocalizedString;
  portalUrl?: string;
}

export interface QuizQuestion {
  id: number;
  question: LocalizedString;
  options: {
    en: string[];
    ta: string[];
  };
  correctAnswer: number;
  explanation: LocalizedString;
}

export interface SurveyQuestion {
  id: string;
  category: "profile" | "finances" | "digital" | "needs";
  title: LocalizedString;
  options: {
    value: string;
    label: LocalizedString;
  }[];
}

export interface ResourceItem {
  id: string;
  title: LocalizedString;
  category:
    | "calculator"
    | "guide"
    | "template"
    | "helpline"
    | "planning"
    | "savings"
    | "upi"
    | "digital"
    | "schemes"
    | "bookkeeping"
    | "loan"
    | "fraud";
  categoryName: LocalizedString;
  description: LocalizedString;
  downloadUrl?: string;
  externalUrl?: string;
  actionType: "view" | "download" | "call";
  contactNumber?: string;
  languagesAvailable: string[];
}

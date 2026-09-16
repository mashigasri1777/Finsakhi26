import type { SurveyQuestion } from "./types";

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "business_type",
    category: "profile",
    title: {
      en: "What type of micro-enterprise or business do you run?",
      ta: "நீங்கள் என்ன வகையான சிறு தொழில் அல்லது வணிகம் செய்கிறீர்கள்?",
    },
    options: [
      {
        value: "tailoring",
        label: { en: "Tailoring / Boutique / Embroidery", ta: "தையல் / ஆடை வடிவமைப்பு / எம்பிராய்டரி" },
      },
      {
        value: "grocery",
        label: { en: "Kirana / Grocery / Provision Shop", ta: "மளிகைக் கடை / பெட்டிக் கடை" },
      },
      {
        value: "food",
        label: { en: "Food Stall / Mess / Catering / Snacks", ta: "உணவகம் / டிபன் கடை / சிற்றுண்டி தயாரிப்பு" },
      },
      {
        value: "beauty",
        label: { en: "Beauty Parlour / Henna / Cosmetics", ta: "பியூட்டி பார்லர் / மருதாணி / அழகு சாதனங்கள்" },
      },
      {
        value: "handicrafts",
        label: { en: "Handicrafts / Handloom / Jewelry Making", ta: "கைவினைப் பொருட்கள் / கைத்தறி / ஆபரண தயாரிப்பு" },
      },
      {
        value: "farming_dairy",
        label: { en: "Dairy / Poultry / Agro-processing", ta: "பால் பண்ணை / கோழி வளர்ப்பு / விவசாயம்" },
      },
      {
        value: "other",
        label: { en: "Other Trade or Service", ta: "மற்ற வணிகம் அல்லது சேவை" },
      },
    ],
  },
  {
    id: "years_in_business",
    category: "profile",
    title: {
      en: "How long have you been operating this business?",
      ta: "இந்த தொழிலை எத்தனை ஆண்டுகளாக நடத்தி வருகிறீர்கள்?",
    },
    options: [
      { value: "less_1", label: { en: "Under 1 year (New venture)", ta: "1 ஆண்டிற்கும் குறைவாக (புதிய தொழில்)" } },
      { value: "1_3", label: { en: "1 to 3 years", ta: "1 முதல் 3 ஆண்டுகள்" } },
      { value: "3_5", label: { en: "3 to 5 years", ta: "3 முதல் 5 ஆண்டுகள்" } },
      { value: "5_plus", label: { en: "More than 5 years", ta: "5 ஆண்டுகளுக்கும் மேலாக" } },
    ],
  },
  {
    id: "monthly_revenue",
    category: "finances",
    title: {
      en: "What is your approximate average monthly business revenue?",
      ta: "உங்கள் வணிகத்தின் சராசரி மாதாந்திர விற்பனை வருமானம் தோராயமாக எவ்வளவு?",
    },
    options: [
      { value: "under_25k", label: { en: "Under ₹25,000", ta: "₹25,000-க்கு குறைவாக" } },
      { value: "25k_50k", label: { en: "₹25,000 to ₹50,000", ta: "₹25,000 முதல் ₹50,000 வரை" } },
      { value: "50k_100k", label: { en: "₹50,000 to ₹1,00,000", ta: "₹50,000 முதல் ₹1,00,000 வரை" } },
      { value: "above_100k", label: { en: "Above ₹1,00,000", ta: "₹1,00,000-க்கு மேல்" } },
    ],
  },
  {
    id: "bank_account_separation",
    category: "finances",
    title: {
      en: "Do you maintain a dedicated, separate bank account for your business?",
      ta: "உங்கள் வணிகத்திற்காக தனி வங்கிக் கணக்கு வைத்துள்ளீர்களா?",
    },
    options: [
      {
        value: "separate_account",
        label: {
          en: "Yes, I have a dedicated business account",
          ta: "ஆம், வணிகத்திற்கு என தனி கணக்கு வைத்திருக்கிறேன்",
        },
      },
      {
        value: "personal_mixed",
        label: {
          en: "No, all business and home expenses go into my personal account",
          ta: "இல்லை, எனது தனிப்பட்ட கணக்கிலேயே இரண்டையும் பயன்படுத்துகிறேன்",
        },
      },
      {
        value: "cash_only_no_bank",
        label: {
          en: "No, I primarily manage through cash without active banking",
          ta: "இல்லை, பெரும்பாலும் ரொக்கப் பணமாகவே நிர்வகிக்கிறேன்",
        },
      },
    ],
  },
  {
    id: "digital_payment_usage",
    category: "digital",
    title: {
      en: "How do your customers pay you most often?",
      ta: "உங்கள் வாடிக்கையாளர்கள் பெரும்பாலும் எவ்வாறு பணம் செலுத்துகிறார்கள்?",
    },
    options: [
      {
        value: "cash_only",
        label: { en: "100% Cash only", ta: "முழுக்க முழுக்க ரொக்கம் மட்டுமே" }
      },
      {
        value: "cash_and_qr",
        label: { en: "Both Cash and UPI QR code", ta: "ரொக்கம் மற்றும் UPI QR குறியீடு இரண்டும்" }
      },
      {
        value: "mostly_digital",
        label: { en: "Mostly UPI / Online Bank Transfer", ta: "பெரும்பாலும் UPI அல்லது ஆன்லைன் வங்கி மூலம்" }
      },
    ],
  },
  {
    id: "primary_challenge",
    category: "needs",
    title: {
      en: "What is your single greatest financial challenge currently?",
      ta: "தற்போது உங்கள் வணிகத்தின் மிகப்பெரிய நிதி சவால் என்ன?",
    },
    options: [
      {
        value: "access_to_credit",
        label: {
          en: "Difficulty obtaining a bank loan without collateral/guarantor",
          ta: "பிணையம் இல்லாமல் வங்கிக் கடன் பெறுவதில் உள்ள சிரமம்",
        },
      },
      {
        value: "calculating_profit",
        label: {
          en: "Trouble tracking daily expenses and calculating true profit",
          ta: "வரவு செலவு மற்றும் உண்மையான லாபத்தை கணக்கிடுவதில் குழப்பம்",
        },
      },
      {
        value: "fear_of_scams",
        label: {
          en: "Fear of online fraud or making a mistake with digital payments",
          ta: "ஆன்லைன் மோசடி பயம் அல்லது தவறான பரிவர்த்தனை பயம்",
        },
      },
      {
        value: "irregular_cashflow",
        label: {
          en: "Irregular seasonal income and emergency cash shortages",
          ta: "பருவகால விற்பனை குறைவு மற்றும் திடீர் அவசர நிதி பற்றாக்குறை",
        },
      },
    ],
  },
  {
    id: "scheme_awareness",
    category: "needs",
    title: {
      en: "Have you ever applied for a government loan or subsidy scheme (like MUDRA or PMEGP)?",
      ta: "முத்ரா அல்லது PMEGP போன்ற அரசு கடன் திட்டத்திற்கு இதற்கு முன் விண்ணப்பித்துள்ளீர்களா?",
    },
    options: [
      {
        value: "applied_success",
        label: { en: "Yes, and the loan was sanctioned successfully", ta: "ஆம், கடன் வெற்றிகரமாக கிடைத்தது" }
      },
      {
        value: "applied_rejected",
        label: { en: "Yes, but it was delayed or rejected", ta: "ஆம், ஆனால் தாமதமானது அல்லது நிராகரிக்கப்பட்டது" }
      },
      {
        value: "unaware_how",
        label: { en: "I heard of them, but never knew how or where to apply", ta: "கேள்விப்பட்டுள்ளேன், ஆனால் எப்படி விண்ணப்பிப்பது என்று தெரியவில்லை" }
      },
      {
        value: "never_heard",
        label: { en: "I had never heard about these schemes before", ta: "இத்திட்டங்கள் பற்றி இதுவரை கேள்விப்பட்டதில்லை" }
      },
    ],
  },
];

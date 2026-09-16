import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "en" | "ta";

export interface Translations {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    learn: string;
    quiz: string;
    survey: string;
    schemes: string;
    resources: string;
    contact: string;
    login: string;
    dashboard: string;
    logout: string;
    switchLang: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    about: string;
    links: string;
    language: string;
    attribution: string;
    rights: string;
  };
  auth: {
    loginTitle: string;
    loginSubtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    showPassword: string;
    hidePassword: string;
    rememberMe: string;
    loginButton: string;
    loggingIn: string;
    forgotPassword: string;
    createAccount: string;
    noAccount: string;
    hasAccount: string;
    demoNotice: string;
    userDemo: string;
    adminDemo: string;
    loginSuccess: string;
    loginError: string;
  };
  dashboard: {
    welcome: string;
    userRole: string;
    adminRole: string;
    learningProgress: string;
    modulesCompleted: string;
    quizPerformance: string;
    latestScore: string;
    resourcesAccessed: string;
    surveyStatus: string;
    surveyCompleted: string;
    surveyPending: string;
    recommendedTopics: string;
    takeSurveyAction: string;
    continueLearning: string;
    ngoMetrics: string;
    totalUsers: string;
    surveyResponses: string;
    quizAttempts: string;
    avgQuizScore: string;
    prePostComparison: string;
    exportCsv: string;
  };
  learn: {
    start: string;
    title: string;
    subtitle: string;
    keyTakeaways: string;
    modulesCount: string;
    backToLearn: string;
  };
  home: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    startLearning: string;
    takeQuiz: string;
    exploreSchemes: string;
    statsTitle: string;
    womenTrained: string;
    quizAttempts: string;
    schemesAvailable: string;
    avgScore: string;
    featuredModules: string;
    featuredSubtitle: string;
    viewAllModules: string;
    surveyBannerTitle: string;
    surveyBannerSubtitle: string;
    takeSurveyCta: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    questionOf: string;
    score: string;
    nextQuestion: string;
    finishQuiz: string;
    retakeQuiz: string;
    resultsTitle: string;
    excellent: string;
    good: string;
    needsWork: string;
    submitting: string;
    explanation: string;
  };
  survey: {
    title: string;
    subtitle: string;
    step: string;
    next: string;
    previous: string;
    submit: string;
    submitting: string;
    thankYou: string;
    thankYouDesc: string;
    retake: string;
  };
  schemes: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterCentral: string;
    filterState: string;
    filterWomen: string;
    searchPlaceholder: string;
    loanAmount: string;
    subsidy: string;
    eligibility: string;
    benefits: string;
    documents: string;
    howToApply: string;
    visitPortal: string;
  };
  resources: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterCalculators: string;
    filterGuides: string;
    filterTemplates: string;
    filterHelplines: string;
    download: string;
    open: string;
    callNow: string;
    bilingualBadge: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    sendMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    cyberAlertTitle: string;
    cyberAlertText: string;
  };
}

const translations: Record<Lang, Translations> = {
  en: {
    brand: {
      name: "FinSakhi",
      tagline: "Learn • Save • Grow",
    },
    nav: {
      home: "Home",
      learn: "Learn",
      quiz: "Quiz",
      survey: "Survey",
      schemes: "Govt Schemes",
      resources: "Resources",
      contact: "Contact",
      login: "Login",
      dashboard: "Dashboard",
      logout: "Logout",
      switchLang: "Switch Language",
      openMenu: "Open main menu",
      closeMenu: "Close menu",
    },
    footer: {
      about:
        "FinSakhi is a dedicated financial awareness and empowerment platform designed for women entrepreneurs and micro-business owners. Powered by Pon Crystal Foundation.",
      links: "Quick Navigation",
      language: "Select Language",
      attribution: "Empowering grassroots women entrepreneurs across Tamil Nadu and India.",
      rights: "All rights reserved.",
    },
    auth: {
      loginTitle: "Welcome Back to FinSakhi",
      loginSubtitle: "Sign in to track your learning progress, quiz scores, and saved government schemes.",
      emailLabel: "Email / Username",
      emailPlaceholder: "e.g. lakshmi@finsakhi.org",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      showPassword: "Show",
      hidePassword: "Hide",
      rememberMe: "Remember me on this device",
      loginButton: "Sign In to FinSakhi",
      loggingIn: "Authenticating...",
      forgotPassword: "Forgot password?",
      createAccount: "Create an Account",
      noAccount: "Don't have an account?",
      hasAccount: "Already registered?",
      demoNotice: "Quick Demo Logins for Testing:",
      userDemo: "User Demo (Lakshmi R.)",
      adminDemo: "NGO Admin Demo (Pon Crystal)",
      loginSuccess: "Successfully logged in!",
      loginError: "Please enter a valid email address and password.",
    },
    dashboard: {
      welcome: "Welcome back",
      userRole: "Women Entrepreneur Member",
      adminRole: "NGO Program Administrator",
      learningProgress: "Learning Progress",
      modulesCompleted: "Modules Completed",
      quizPerformance: "Quiz Performance",
      latestScore: "Latest Quiz Score",
      resourcesAccessed: "Resources Saved",
      surveyStatus: "Financial Needs Survey",
      surveyCompleted: "Completed",
      surveyPending: "Not yet completed",
      recommendedTopics: "Recommended Topics for You",
      takeSurveyAction: "Complete Needs Survey",
      continueLearning: "Continue Learning",
      ngoMetrics: "NGO Program Analytics & Impact Summary",
      totalUsers: "Enrolled Entrepreneurs",
      surveyResponses: "Survey Submissions",
      quizAttempts: "Literacy Quizzes Taken",
      avgQuizScore: "Average Knowledge Score",
      prePostComparison: "Pre vs Post Training Financial Awareness",
      exportCsv: "Export Survey Data (CSV)",
    },
    learn: {
      start: "Start Module",
      title: "Financial Learning Hub",
      subtitle: "Practical, jargon-free lessons to help you master digital payments, budgeting, savings, and enterprise growth.",
      keyTakeaways: "Key Takeaways",
      modulesCount: "5 Comprehensive Modules",
      backToLearn: "Back to all modules",
    },
    home: {
      badge: "Financial Awareness Hub for Women Entrepreneurs",
      heroTitle: "Build Financial Independence &",
      heroHighlight: "Scale Your Business",
      heroSubtitle:
        "FinSakhi helps women micro-entrepreneurs learn digital payments, save safely, access government loans, and grow their businesses with confidence.",
      startLearning: "Start Learning",
      takeQuiz: "Test Your Knowledge",
      exploreSchemes: "Explore Schemes",
      statsTitle: "Outreach & Impact",
      womenTrained: "Entrepreneurs Reached",
      quizAttempts: "Literacy Quizzes Taken",
      schemesAvailable: "Key Schemes Covered",
      avgScore: "Average Quiz Score",
      featuredModules: "Core Learning Modules",
      featuredSubtitle: "Every skill you need to manage your business money safely and effectively.",
      viewAllModules: "View All 5 Modules",
      surveyBannerTitle: "Help Us Understand Your Business Needs",
      surveyBannerSubtitle:
        "Take our 2-minute anonymous survey to help shape future workshops, scheme guides, and credit assistance programs.",
      takeSurveyCta: "Take Needs Survey",
    },
    quiz: {
      title: "Financial Literacy Quiz",
      subtitle: "Check your understanding of UPI security, budgeting habits, and government business loans.",
      questionOf: "Question",
      score: "Your Score",
      nextQuestion: "Next Question",
      finishQuiz: "Finish & See Results",
      retakeQuiz: "Retake Quiz",
      resultsTitle: "Assessment Summary",
      excellent: "Outstanding! You have a firm grasp of financial security and business money management.",
      good: "Good effort! Review the learning modules to further strengthen your financial skills.",
      needsWork: "Keep going! Spend some time reviewing the Digital Payments and Savings modules to protect your money.",
      submitting: "Recording your attempt...",
      explanation: "Explanation",
    },
    survey: {
      title: "Women Entrepreneurs Financial Survey",
      subtitle: "Share your business challenges and help us tailor training and government scheme support.",
      step: "Step",
      next: "Continue",
      previous: "Back",
      submit: "Submit Survey",
      submitting: "Submitting response...",
      thankYou: "Thank You for Participating!",
      thankYouDesc:
        "Your feedback directly guides our community outreach, loan advisory desks, and local workshops.",
      retake: "Submit Another Response",
    },
    schemes: {
      title: "Government Schemes Directory",
      subtitle: "Verified credit, subsidy, and training schemes for women-led enterprises in Tamil Nadu and India.",
      filterAll: "All Schemes",
      filterCentral: "Central Govt",
      filterState: "Tamil Nadu",
      filterWomen: "Women Exclusive",
      searchPlaceholder: "Search schemes by name, loan limit, or purpose...",
      loanAmount: "Maximum Loan",
      subsidy: "Subsidy / Margin",
      eligibility: "Who is Eligible",
      benefits: "Key Benefits",
      documents: "Required Documents",
      howToApply: "How to Apply",
      visitPortal: "Official Portal",
    },
    resources: {
      title: "Resources & Practical Handouts",
      subtitle: "Free downloadable daily expense ledgers, loan calculators, security guides, and emergency helplines.",
      filterAll: "All Resources",
      filterCalculators: "Calculators",
      filterGuides: "Guides & Handbooks",
      filterTemplates: "Expense Sheets",
      filterHelplines: "Helplines",
      download: "Download PDF",
      open: "Use Tool",
      callNow: "Call Helpline",
      bilingualBadge: "Available in English & தமிழ்",
    },
    contact: {
      title: "Contact & Community Help",
      subtitle: "Have questions about government schemes or need assistance with digital banking?",
      getInTouch: "Reach Out to Us",
      phone: "Phone / WhatsApp",
      email: "Email Address",
      address: "Office Location",
      hours: "Support Hours",
      sendMessage: "Send us a Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Lakshmi R.",
      phoneLabel: "Phone Number",
      phonePlaceholder: "e.g. 9876543210",
      messageLabel: "How can we assist your business?",
      messagePlaceholder: "Ask about MUDRA loans, digital payment issues, or our upcoming workshops...",
      submitButton: "Send Inquiry",
      successMessage: "Thank you! Our community coordinator will connect with you shortly.",
      cyberAlertTitle: "Emergency: Cyber Financial Fraud Helpline",
      cyberAlertText:
        "If you were scammed or lost money in a fraudulent online transaction, call 1930 immediately or visit cybercrime.gov.in within the golden hour to freeze the transfer.",
    },
  },
  ta: {
    brand: {
      name: "FinSakhi",
      tagline: "கற்போம் • சேமிப்போம் • வளர்வோம்",
    },
    nav: {
      home: "முகப்பு",
      learn: "பாடங்கள்",
      quiz: "வினாடி வினா",
      survey: "கருத்துக் கணிப்பு",
      schemes: "அரசுத் திட்டங்கள்",
      resources: "வளங்கள்",
      contact: "தொடர்புக்கு",
      login: "உள்நுழைவு",
      dashboard: "டாஷ்போர்டு",
      logout: "வெளியேறு",
      switchLang: "மொழியை மாற்றவும்",
      openMenu: "பட்டியலைத் திறக்கவும்",
      closeMenu: "பட்டியலை மூடவும்",
    },
    footer: {
      about:
        "FinSakhi என்பது பெண் தொழில்முனைவோர் மற்றும் சிறு வணிகர்களுக்கான பிரத்யேக நிதி விழிப்புணர்வு தளமாகும். பொன் கிரிஸ்டல் அறக்கட்டளையின் வழிகாட்டலில் இயங்குகிறது.",
      links: "விரைவு இணைப்புகள்",
      language: "மொழி தேர்வு",
      attribution: "தமிழ்நாடு மற்றும் இந்தியாவின் அடித்தட்டு பெண் தொழில்முனைவோரின் முன்னேற்றத்திற்காக.",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    auth: {
      loginTitle: "FinSakhi-க்கு மீண்டும் நல்வரவு",
      loginSubtitle: "உங்கள் கற்றல் நிலை, வினாடி வினா மதிப்பெண்கள் மற்றும் சேமித்த அரசு திட்டங்களை காண உள்நுழையவும்.",
      emailLabel: "மின்னஞ்சல் / பயனர்பெயர்",
      emailPlaceholder: "எ.கா. lakshmi@finsakhi.org",
      passwordLabel: "கடவுச்சொல்",
      passwordPlaceholder: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
      showPassword: "காட்டு",
      hidePassword: "மறை",
      rememberMe: "நினைவில் கொள்க",
      loginButton: "FinSakhi-இல் உள்நுழையவும்",
      loggingIn: "சரிபார்க்கப்படுகிறது...",
      forgotPassword: "கடவுச்சொல் மறந்துவிட்டதா?",
      createAccount: "புதிய கணக்கு தொடங்க",
      noAccount: "கணக்கு இல்லையா?",
      hasAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
      demoNotice: "சோதனைக்கான விரைவு உள்நுழைவு:",
      userDemo: "பயனர் மாதிரி (லட்சுமி)",
      adminDemo: "அறக்கட்டளை நிர்வாகி மாதிரி",
      loginSuccess: "வெற்றிகரமாக உள்நுழைந்துவிட்டீர்கள்!",
      loginError: "சரியான மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
    },
    dashboard: {
      welcome: "நல்வரவு",
      userRole: "பெண் தொழில்முனைவோர் உறுப்பினர்",
      adminRole: "அறக்கட்டளை திட்ட நிர்வாகி",
      learningProgress: "கற்றல் நிலை",
      modulesCompleted: "முடித்த பாடங்கள்",
      quizPerformance: "வினாடி வினா செயல்திறன்",
      latestScore: "சமீபத்திய மதிப்பெண்",
      resourcesAccessed: "சேமித்த வழிகாட்டிகள்",
      surveyStatus: "தேவைகள் குறித்த கணக்கெடுப்பு",
      surveyCompleted: "நிறைவடைந்தது",
      surveyPending: "இன்னும் பூர்த்தி செய்யப்படவில்லை",
      recommendedTopics: "உங்களுக்கான பரிந்துரைக்கப்பட்ட பாடங்கள்",
      takeSurveyAction: "கணக்கெடுப்பில் பங்கேற்க",
      continueLearning: "தொடர்ந்து படிக்க",
      ngoMetrics: "அறக்கட்டளை திட்ட புள்ளிவிவரங்கள் & தாக்கம்",
      totalUsers: "பதிவுசெய்த தொழில்முனைவோர்",
      surveyResponses: "பெறப்பட்ட பதில்கள்",
      quizAttempts: "வினாடி வினா முயற்சிகள்",
      avgQuizScore: "சராசரி அறிவு மதிப்பெண்",
      prePostComparison: "பயிற்சிக்கு முன் vs பின் நிதி விழிப்புணர்வு",
      exportCsv: "தரவை பதிவிறக்குக (CSV)",
    },
    learn: {
      start: "பாடத்தை தொடங்கு",
      title: "நிதி விழிப்புணர்வு பாடங்கள்",
      subtitle: "டிஜிட்டல் பரிவர்த்தனை, வரவு-செலவு திட்டம், சேமிப்பு மற்றும் வணிக வளர்ச்சிக்கான எளிய நடைமுறை பாடங்கள்.",
      keyTakeaways: "முக்கிய குறிப்புகள்",
      modulesCount: "5 முழுமையான பாடங்கள்",
      backToLearn: "அனைத்து பாடங்களுக்கும் திரும்பு",
    },
    home: {
      badge: "பெண் தொழில்முனைவோருக்கான நிதி விழிப்புணர்வு மையம்",
      heroTitle: "நிதி தன்னம்பிக்கையுடன்",
      heroHighlight: "உங்கள் தொழிலை வளர்த்திடுங்கள்",
      heroSubtitle:
        "டிஜிட்டல் பரிவர்த்தனைகளை பாதுகாப்பாக கையாளுங்கள், அரசு கடன் திட்டங்களை பெறுங்கள் மற்றும் உங்கள் சிறு தொழிலை நம்பிக்கையுடன் அடுத்த கட்டத்திற்கு கொண்டு செல்லுங்கள்.",
      startLearning: "கற்கத் தொடங்குங்கள்",
      takeQuiz: "அறிவை சோதிக்கவும்",
      exploreSchemes: "திட்டங்களை அறிய",
      statsTitle: "தாக்கம் மற்றும் விழிப்புணர்வு",
      womenTrained: "பயிற்சி பெற்ற தொழில்முனைவோர்",
      quizAttempts: "வினாடி வினா முயற்சிகள்",
      schemesAvailable: "விவரிக்கப்பட்ட திட்டங்கள்",
      avgScore: "சராசரி வினாடி வினா மதிப்பெண்",
      featuredModules: "முக்கிய பாடப்பிரிவுகள்",
      featuredSubtitle: "வணிக பணத்தை பாதுகாப்பாகவும் திறமையாகவும் நிர்வகிக்க தேவையான அனைத்தும்.",
      viewAllModules: "5 பாடங்களையும் காண்க",
      surveyBannerTitle: "உங்கள் வணிக தேவைகளை எங்களுடன் பகிருங்கள்",
      surveyBannerSubtitle:
        "2 நிமிட எளிய கருத்துக்கணிப்பில் பங்கேற்று, எதிர்கால பயிற்சிகள் மற்றும் கடன் உதவி திட்டங்களை மேம்படுத்த உதவுங்கள்.",
      takeSurveyCta: "கருத்துக் கணிப்பில் பங்கேற்க",
    },
    quiz: {
      title: "நிதி அறிவு வினாடி வினா",
      subtitle: "UPI பாதுகாப்பு, சேமிப்பு முறைகள் மற்றும் அரசு கடன் திட்டங்கள் பற்றிய உங்கள் அறிவை சோதியுங்கள்.",
      questionOf: "கேள்வி",
      score: "உங்கள் மதிப்பெண்",
      nextQuestion: "அடுத்த கேள்வி",
      finishQuiz: "முடிவை காண்க",
      retakeQuiz: "மீண்டும் முயற்சி செய்",
      resultsTitle: "மதிப்பீட்டு சுருக்கம்",
      excellent: "சிறப்பானது! நிதி பாதுகாப்பு மற்றும் வணிக மேலாண்மையில் சிறந்த அறிவு பெற்றுள்ளீர்கள்.",
      good: "நன்று! உங்கள் திறன்களை மேலும் வளர்க்க பாடங்களை மீண்டும் ஒருமுறை படியுங்கள்.",
      needsWork: "தொடர்ந்து படியுங்கள்! டிஜிட்டல் பரிவர்த்தனைகள் மற்றும் சேமிப்பு பாடங்களை மீண்டும் படித்து பணத்தை பாதுகாக்கவும்.",
      submitting: "முடிவுகள் பதிவாகிறது...",
      explanation: "விளக்கம்",
    },
    survey: {
      title: "பெண் தொழில்முனைவோர் தேவைகள் குறித்த கணக்கெடுப்பு",
      subtitle: "உங்கள் வணிக சவால்களை பகிர்ந்து கொள்ளுங்கள்; பொருத்தமான பயிற்சிகள் மற்றும் உதவிகளை பெற உதவுங்கள்.",
      step: "படி",
      next: "அடுத்து",
      previous: "முந்தையது",
      submit: "சமர்ப்பிக்கவும்",
      submitting: "பதிவாகிறது...",
      thankYou: "பங்கேற்றமைக்கு மிக்க நன்றி!",
      thankYouDesc: "உங்கள் கருத்துக்கள் எங்களது நேரடி பயிற்சி வகுப்புகள் மற்றும் அரசு வழிகாட்டல்களுக்கு பெரிதும் உதவும்.",
      retake: "மற்றொரு பதிலை சமர்ப்பிக்கவும்",
    },
    schemes: {
      title: "அரசு திட்டங்களின் கையேடு",
      subtitle: "தமிழ்நாடு மற்றும் மத்திய அரசுகளின் மகளிர் வணிக கடன் மற்றும் மானிய திட்டங்களின் தொகுப்பு.",
      filterAll: "அனைத்து திட்டங்கள்",
      filterCentral: "மத்திய அரசு",
      filterState: "தமிழ்நாடு அரசு",
      filterWomen: "மகளிர் சிறப்பு",
      searchPlaceholder: "திட்டத்தின் பெயர், கடன் அளவு அல்லது தகுதி தேடவும்...",
      loanAmount: "அதிகபட்ச கடன்",
      subsidy: "மானியம் / சலுகை",
      eligibility: "தகுதிகள்",
      benefits: "நன்மைகள்",
      documents: "தேவையான ஆவணங்கள்",
      howToApply: "விண்ணப்பிக்கும் முறை",
      visitPortal: "அதிகாரபூர்வ இணையதளம்",
    },
    resources: {
      title: "பயனுள்ள வழிகாட்டிகள் & வளங்கள்",
      subtitle: "இலவச வரவு-செலவு பதிவேடு, EMI கால்குலேட்டர், பாதுகாப்பு வழிகாட்டிகள் மற்றும் அவசர உதவி எண்கள்.",
      filterAll: "அனைத்தும்",
      filterCalculators: "கால்குலேட்டர்கள்",
      filterGuides: "கையேடுகள்",
      filterTemplates: "பதிவேட்டு படிவங்கள்",
      filterHelplines: "உதவி எண்கள்",
      download: "பதிவிறக்கு PDF",
      open: "கருவியை திற",
      callNow: "உடனடியாக அழைக்க",
      bilingualBadge: "ஆங்கிலம் & தமிழில் கிடைக்கிறது",
    },
    contact: {
      title: "தொடர்பு மற்றும் உதவி",
      subtitle: "அரசுத் திட்டங்கள் அல்லது டிஜிட்டல் வங்கி குறித்து கேள்விகள் உள்ளதா? எங்களை அணுகவும்.",
      getInTouch: "எங்களை தொடர்பு கொள்ள",
      phone: "தொலைபேசி / வாட்ஸ்அப்",
      email: "மின்னஞ்சல் முகவரி",
      address: "அலுவலக முகவரி",
      hours: "பணி நேரம்",
      sendMessage: "செய்தி அனுப்பவும்",
      nameLabel: "உங்கள் பெயர்",
      namePlaceholder: "எ.கா. லட்சுமி",
      phoneLabel: "கைபேசி எண்",
      phonePlaceholder: "எ.கா. 9876543210",
      messageLabel: "உங்கள் கேள்வி என்ன?",
      messagePlaceholder: "முத்ரா கடன், டிஜிட்டல் பரிவர்த்தனை அல்லது பயிற்சி வகுப்புகள் பற்றி கேளுங்கள்...",
      submitButton: "விசாரணையை அனுப்ப",
      successMessage: "நன்றி! எங்கள் ஒருங்கிணைப்பாளர் உங்களை விரைவில் தொடர்புகொள்வார்.",
      cyberAlertTitle: "அவசர உதவி: சைபர் நிதி மோசடி உதவி எண்",
      cyberAlertText:
        "ஆன்லைன் பணப்பரிவர்த்தனையில் ஏமாற்றப்பட்டாலோ அல்லது பணம் திருடப்பட்டாலோ, உடனடியாக 1930 என்ற எண்ணை அழையுங்கள் அல்லது cybercrime.gov.in தளத்தில் பதிவு செய்யுங்கள்.",
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("finsakhi_lang");
      if (saved === "en" || saved === "ta") return saved;
    } catch {
      // ignore
    }
    return "en";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("finsakhi_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

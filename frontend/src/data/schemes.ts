import type { Scheme } from "./types";

export const schemes: Scheme[] = [
  {
    id: "mudra-loan",
    title: {
      en: "Pradhan Mantri MUDRA Yojana (PMMY)",
      ta: "பிரதமர் முத்ரா யோஜனா (PMMY)",
    },
    category: "central",
    tagline: {
      en: "Collateral-free business loans up to ₹20 Lakhs for micro enterprises",
      ta: "சிறு தொழில்களுக்கான பிணையில்லா கடன் ₹20 லட்சம் வரை",
    },
    purpose: {
      en: "Offers working capital, equipment finance, and expansion loans across three tiers: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), and Tarun (₹5 Lakhs to ₹20 Lakhs).",
      ta: "வணிக மூலதனம், இயந்திரங்கள் வாங்க மூன்று நிலைகளில் கடன் வழங்குகிறது: சிசு (₹50,000 வரை), கிஷோர் (₹50,000 முதல் ₹5 லட்சம் வரை), தருண் (₹5 லட்சம் முதல் ₹20 லட்சம் வரை).",
    },
    eligibility: {
      en: [
        "Any Indian citizen with a business plan for non-farm income-generating activity",
        "Micro-manufacturers, shopkeepers, fruit/vegetable vendors, artisans, and tailors",
        "No prior default on any commercial bank or microfinance institution loan",
      ],
      ta: [
        "விவசாயம் அல்லாத வருமானம் ஈட்டும் தொழில் செய்யும் இந்திய குடிமக்கள்",
        "சிறு உற்பத்தியாளர்கள், கடைக்காரர்கள், தையல் தொழிலாளர்கள், கைவினைஞர்கள்",
        "வங்கி அல்லது நிதி நிறுவனங்களில் வாராக்கடன் வரலாறு இல்லாதவர்கள்",
      ],
    },
    benefits: {
      en: [
        "Zero collateral or security required",
        "No processing fee for Shishu and Kishore loans",
        "Flexible repayment period of up to 5 to 7 years",
        "Special interest rate concession often available for women borrowers",
      ],
      ta: [
        "சொத்து அல்லது பிணையம் தேவையில்லை",
        "சிசு மற்றும் கிஷோர் கடன்களுக்கு செயலாக்க கட்டணம் இல்லை",
        "5 முதல் 7 ஆண்டுகள் வரை திருப்பிச் செலுத்தும் கால அவகாசம்",
        "பெண் தொழில்முனைவோருக்கு கூடுதல் வட்டி சலுகை",
      ],
    },
    loanAmount: {
      en: "Up to ₹20,00,000 (Shishu, Kishore, Tarun)",
      ta: "₹20,00,000 வரை (சிசு, கிஷோர், தருண்)",
    },
    subsidy: {
      en: "Low bank interest (MUDRA guarantee covers loan risk)",
      ta: "குறைந்த வங்கி வட்டி (முத்ரா உத்தரவாதம் மூலம் பாதுகாப்பு)",
    },
    documents: {
      en: [
        "Aadhaar Card and Voter ID / Passport",
        "PAN Card",
        "Proof of business address and identity (Udyam Registration)",
        "Last 6 months bank statement",
        "Quotations for machinery/stock to be purchased",
      ],
      ta: [
        "ஆதார் அட்டை மற்றும் வாக்காளர் அடையாள அட்டை",
        "பான் (PAN) அட்டை",
        "உத்யம் பதிவு சான்றிதழ் (Udyam Registration)",
        "கடந்த 6 மாத வங்கி கணக்கு அறிக்கை (Bank statement)",
        "வாங்க உத்தேசித்துள்ள இயந்திரங்களுக்கான விலைப்பட்டியல் (Quotation)",
      ],
    },
    howToApply: {
      en: "Apply online at Udyamimitra portal (udyamimitra.in) or visit any commercial, rural, or cooperative bank branch with your KYC and business estimate.",
      ta: "உத்யமிமித்ரா இணையதளம் (udyamimitra.in) மூலமாகவோ அல்லது அருகிலுள்ள அரசு, கிராமிய வங்கி கிளைகளில் நேரடியாக விண்ணப்பிக்கலாம்.",
    },
    portalUrl: "https://www.mudra.org.in",
  },
  {
    id: "stand-up-india",
    title: {
      en: "Stand-Up India Scheme for Women",
      ta: "பெண்களுக்கான ஸ்டாண்ட்-அப் இந்தியா திட்டம்",
    },
    category: "women",
    tagline: {
      en: "Greenfield enterprise loans from ₹10 Lakhs to ₹1 Crore for women entrepreneurs",
      ta: "புதிய தொழில் தொடங்கும் பெண்களுக்கு ₹10 லட்சம் முதல் ₹1 கோடி வரை கடன்",
    },
    purpose: {
      en: "Supports women entrepreneurs setting up greenfield (first-time) ventures in manufacturing, services, trading, or agri-allied activities.",
      ta: "உற்பத்தி, சேவை, வர்த்தகம் அல்லது வேளாண் சார்ந்த துறைகளில் முதல்முறையாக புதிய தொழில் தொடங்கும் பெண்களுக்கு கடனுதவி.",
    },
    eligibility: {
      en: [
        "Must be a woman entrepreneur aged 18 years or above",
        "Loan is strictly for a greenfield (new) enterprise",
        "In non-individual enterprises, at least 51% shareholding must be held by a woman",
      ],
      ta: [
        "18 வயது நிரம்பிய பெண் தொழில்முனைவோர்",
        "புதிய தொழில் (Greenfield) தொடங்குவதற்கு மட்டுமே பொருந்தும்",
        "கூட்டு நிறுவனமாக இருந்தால் 51% பங்கு பெண் பெயரில் இருக்க வேண்டும்",
      ],
    },
    benefits: {
      en: [
        "High credit limit: ₹10 Lakhs to ₹100 Lakhs",
        "Composite loan covering both term loan and working capital",
        "Repayment schedule up to 7 years with an 18-month moratorium",
      ],
      ta: [
        "அதிக கடன் வரம்பு: ₹10 லட்சம் முதல் ₹1 கோடி வரை",
        "இயந்திர கடன் மற்றும் நடைமுறை மூலதனம் இரண்டும் உள்ளடக்கியது",
        "18 மாத சலுகைக் காலத்துடன் 7 ஆண்டுகள் வரை திருப்பிச் செலுத்தும் வசதி",
      ],
    },
    loanAmount: {
      en: "₹10,00,000 to ₹1,00,00,000",
      ta: "₹10,00,000 முதல் ₹1,00,00,000 வரை",
    },
    subsidy: {
      en: "Margin money up to 15% convergence with state subsidy schemes",
      ta: "அரசு மானியங்களுடன் இணைக்கப்பட்டு 15% விளிம்புத் தொகை உதவி",
    },
    documents: {
      en: [
        "Identity & address proofs (Aadhaar, PAN)",
        "Detailed Project Report (DPR) with financial projections",
        "Rent agreement or land ownership documents for shop/factory",
        "Pollution clearance / licenses if applicable",
      ],
      ta: [
        "அடையாள மற்றும் முகவரி சான்றுகள் (ஆதார், பான்)",
        "விரிவான திட்ட அறிக்கை (Project Report)",
        "தொழிலகத்திற்கான வாடகை ஒப்பந்தம் அல்லது நில ஆவணம்",
        "தேவையான வணிக உரிமங்கள்",
      ],
    },
    howToApply: {
      en: "Register and apply online via standupmitra.in or submit an application through any Scheduled Commercial Bank branch.",
      ta: "standupmitra.in இணையதளத்தில் பதிவு செய்து விண்ணப்பிக்கலாம் அல்லது வணிக வங்கிகளை அணுகலாம்.",
    },
    portalUrl: "https://www.standupmitra.in",
  },
  {
    id: "pmegp",
    title: {
      en: "Prime Minister's Employment Generation Programme (PMEGP)",
      ta: "பிரதமரின் வேலைவாய்ப்பு உருவாக்கும் திட்டம் (PMEGP)",
    },
    category: "central",
    tagline: {
      en: "Credit-linked subsidy of up to 35% for rural women entrepreneurs",
      ta: "கிராமப்புற பெண்களுக்கு 35% வரை மானியத்துடன் கூடிய கடன்",
    },
    purpose: {
      en: "Encourages micro-enterprises and employment generation with generous capital subsidies from KVIC.",
      ta: "கதர் மற்றும் கிராமத் தொழில் ஆணையம் (KVIC) மூலம் புதிய சுயதொழில் தொடங்குவோருக்கு நேரடி மானியம்.",
    },
    eligibility: {
      en: [
        "Individual aged 18+ years with minimum 8th standard pass for manufacturing projects >₹10L",
        "Self Help Groups (SHGs) not availing other benefits",
        "Special category status given to women (higher subsidy)",
      ],
      ta: [
        "18 வயது நிரம்பியவர்கள்; ₹10 லட்சத்திற்கு மேற்பட்ட உற்பத்தி தொழிலுக்கு 8-ம் வகுப்பு தேர்ச்சி அவசியம்",
        "சுய உதவி குழுக்கள்",
        "பெண்களுக்கு சிறப்பு பிரிவு அந்தஸ்து (அதிக மானியம் வழங்கப்படுகிறது)",
      ],
    },
    benefits: {
      en: [
        "Subsidy of 25% for urban women and 35% for rural women",
        "Entrepreneur only needs to contribute 5% of project cost as own equity",
        "Manufacturing projects up to ₹50 Lakhs, service projects up to ₹20 Lakhs",
      ],
      ta: [
        "நகர்ப்புற பெண்களுக்கு 25% மற்றும் கிராமப்புற பெண்களுக்கு 35% மானியம்",
        "தொழில்முனைவோர் சொந்த முதலீடாக 5% மட்டுமே செலுத்த வேண்டும்",
        "உற்பத்திக்கு ₹50 லட்சம், சேவை தொழிலுக்கு ₹20 லட்சம் வரை திட்டம்",
      ],
    },
    loanAmount: {
      en: "Up to ₹50 Lakhs (Mfg) / ₹20 Lakhs (Service)",
      ta: "உற்பத்திக்கு ₹50 லட்சம் / சேவைக்கு ₹20 லட்சம் வரை",
    },
    subsidy: {
      en: "25% to 35% government back-ended subsidy",
      ta: "25% முதல் 35% வரை நேரடி அரசு மானியம்",
    },
    documents: {
      en: [
        "Aadhaar, Caste/Category Certificate, Education mark sheet",
        "Detailed Project Profile / Business Plan",
        "EDP (Entrepreneurship Development Training) Certificate after approval",
      ],
      ta: [
        "ஆதார், கல்வி சான்றிதழ்",
        "திட்ட அறிக்கை மற்றும் உத்தேச வரவு-செலவு கணக்கு",
        "EDP தொழில்முனைவோர் பயிற்சி சான்றிதழ்",
      ],
    },
    howToApply: {
      en: "Apply online at kviconline.gov.in (PMEGP e-portal) or through District Industries Centre (DIC).",
      ta: "kviconline.gov.in போர்டல் மூலமாக அல்லது மாவட்ட தொழில் மையம் (DIC) மூலமாக விண்ணப்பிக்கலாம்.",
    },
    portalUrl: "https://www.kviconline.gov.in/pmegpeportal",
  },
  {
    id: "tn-needs",
    title: {
      en: "Tamil Nadu NEEDS Scheme",
      ta: "தமிழ்நாடு NEEDS தொழில்முனைவோர் திட்டம்",
    },
    category: "state",
    tagline: {
      en: "25% capital subsidy up to ₹75 Lakhs for educated youth and women in Tamil Nadu",
      ta: "தமிழ்நாடு படித்த பெண்களுக்கு 25% மானியத்துடன் ₹75 லட்சம் வரை உதவி",
    },
    purpose: {
      en: "Tamil Nadu Government flagship initiative supporting first-generation educated women entrepreneurs with capital subsidy and low interest.",
      ta: "தமிழ்நாடு அரசின் முதல் தலைமுறை படித்த பெண் தொழில்முனைவோருக்கான முதன்மை மானியத் திட்டம்.",
    },
    eligibility: {
      en: [
        "Degree, Diploma, or ITI holders aged 21 to 45 (for women)",
        "Resident of Tamil Nadu for minimum 3 years",
        "First-generation entrepreneur (no family business in the same field)",
      ],
      ta: [
        "பட்டப்படிப்பு, டிப்ளமோ அல்லது ஐடிஐ முடித்த பெண்கள் (வயது 21 முதல் 45 வரை)",
        "குறைந்தது 3 ஆண்டுகள் தமிழகத்தில் வசித்திருக்க வேண்டும்",
        "முதல் தலைமுறை தொழில்முனைவோராக இருக்க வேண்டும்",
      ],
    },
    benefits: {
      en: [
        "25% capital subsidy on project cost, up to ₹75 Lakhs",
        "3% interest subvention for the entire repayment tenure",
        "Free EDP training provided by EDII-TN",
      ],
      ta: [
        "திட்ட மதிப்பீட்டில் 25% மானியம் (அதிகபட்சம் ₹75 லட்சம் வரை)",
        "கடன் கால முழுமைக்கும் 3% வட்டி தள்ளுபடி",
        "EDII-TN மூலம் இலவச தொழில்முனைவோர் பயிற்சி",
      ],
    },
    loanAmount: {
      en: "₹10 Lakhs to ₹5 Crores",
      ta: "₹10 லட்சம் முதல் ₹5 கோடி வரை",
    },
    subsidy: {
      en: "25% capital subsidy (capped at ₹75 Lakhs) + 3% interest subvention",
      ta: "25% மானியம் (₹75 லட்சம் வரை) + 3% வட்டி மானியம்",
    },
    documents: {
      en: [
        "Educational certificates (Degree / Diploma)",
        "Nativity & Community Certificate",
        "Project Report and machinery quotation",
        "Aadhaar card & Bank statement",
      ],
      ta: [
        "கல்வி சான்றிதழ்கள் (Degree / Diploma)",
        "இருப்பிட மற்றும் சாதிச் சான்றிதழ்",
        "திட்ட அறிக்கை மற்றும் உபகரண விலைப்பட்டியல்",
        "ஆதார் அட்டை மற்றும் வங்கி கணக்கு விவரம்",
      ],
    },
    howToApply: {
      en: "Apply online at msmeonline.tn.gov.in or consult your local District Industries Centre (DIC) in Tamil Nadu.",
      ta: "msmeonline.tn.gov.in என்ற தமிழ்நாடு அரசு போர்ட்டலில் ஆன்லைனில் விண்ணப்பிக்கலாம்.",
    },
    portalUrl: "https://msmeonline.tn.gov.in",
  },
  {
    id: "pm-svanidhi",
    title: {
      en: "PM SVANidhi Scheme for Street Vendors",
      ta: "தெருவோர வியாபாரிகளுக்கான PM ஸ்வநிதி திட்டம்",
    },
    category: "central",
    tagline: {
      en: "Affordable working capital loans from ₹10,000 to ₹50,000 with cashback on digital sales",
      ta: "டிஜிட்டல் பணப்பரிவர்த்தனைக்கு கேஷ்பேக் உடன் ₹10,000 முதல் ₹50,000 வரை கடன்",
    },
    purpose: {
      en: "Provides collateral-free microcredit to street vendors and home businesses, rewarding digital payment adoption with monthly cashback.",
      ta: "தெருவோர வியாபாரிகள் மற்றும் சிறு வியாபாரிகளுக்கு நடைமுறை மூலதன கடன் மற்றும் டிஜிட்டல் பரிவர்த்தனைகளுக்கு மாதந்தோறும் ஊக்கத்தொகை.",
    },
    eligibility: {
      en: [
        "Street vendors engaged in vending before or on March 24, 2020",
        "Possession of Vending Certificate / Identity Card issued by Urban Local Body",
        "Vendors in peri-urban and rural areas with recommendation letters",
      ],
      ta: [
        "தெருவோர வியாபாரம் அல்லது தள்ளுவண்டி கடை நடத்தும் பெண் வியாபாரிகள்",
        "நகராட்சி அல்லது பேரூராட்சி வழங்கிய அடையாள அட்டை உள்ளவர்கள்",
      ],
    },
    benefits: {
      en: [
        "Initial working capital loan of ₹10,000; upon on-time repayment, eligibility rises to ₹20,000 and ₹50,000",
        "7% interest subsidy credited directly to bank account",
        "Monthly cashback up to ₹100 for receiving digital payments (UPI QR)",
      ],
      ta: [
        "முதற்கட்டமாக ₹10,000; அதை முறையாக கட்டினால் ₹20,000 மற்றும் ₹50,000 கடன்",
        "7% வட்டி மானியம் நேரடியாக வங்கிக் கணக்கில் வரவு வைக்கப்படும்",
        "QR மூலம் டிஜிட்டல் பரிவர்த்தனை செய்தால் மாதம் ₹100 வரை கேஷ்பேக்",
      ],
    },
    loanAmount: {
      en: "₹10,000 / ₹20,000 / ₹50,000",
      ta: "₹10,000 / ₹20,000 / ₹50,000",
    },
    subsidy: {
      en: "7% annual interest subsidy + digital cashback",
      ta: "7% வட்டி மானியம் + டிஜிட்டல் ஊக்கத்தொகை",
    },
    documents: {
      en: ["Aadhaar Card", "Vendor Certificate or Recommendation Letter", "Bank Passbook", "Active Mobile Number"],
      ta: ["ஆதார் அட்டை", "வியாபார அடையாள அட்டை", "வங்கி பாஸ்புக்", "கைபேசி எண்"],
    },
    howToApply: {
      en: "Apply via pmsvanidhi.mohua.gov.in or through any Common Service Centre (CSC) / bank branch.",
      ta: "pmsvanidhi.mohua.gov.in தளம் அல்லது அரசு இ-சேவை மையங்கள் மூலமாக விண்ணப்பிக்கலாம்.",
    },
    portalUrl: "https://pmsvanidhi.mohua.gov.in",
  },
];

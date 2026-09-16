import type { QuizQuestion } from "./types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      en: "A customer wants to send money to your shop via UPI. Do you need to enter your UPI PIN to receive money?",
      ta: "ஒரு வாடிக்கையாளர் UPI மூலம் உங்கள் கடைக்கு பணம் அனுப்ப விரும்புகிறார். நீங்கள் பணம் பெற UPI PIN உள்ளிட வேண்டுமா?",
    },
    options: {
      en: [
        "Yes, PIN is always needed to verify every transaction",
        "No, UPI PIN is only needed when sending money from your account",
        "Only if the amount is greater than ₹2,000",
        "Yes, both sender and receiver must enter their PIN",
      ],
      ta: [
        "ஆம், ஒவ்வொரு பரிவர்த்தனைக்கும் PIN உள்ளிட வேண்டும்",
        "இல்லை, உங்கள் கணக்கிலிருந்து பணம் அனுப்பும் போது மட்டுமே PIN தேவை",
        "தொகை ₹2,000-க்கு மேல் இருந்தால் மட்டுமே தேவை",
        "ஆம், அனுப்புபவர் மற்றும் பெறுபவர் இருவரும் PIN உள்ளிட வேண்டும்",
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: "Rule #1 of digital payments: You NEVER need to enter your UPI PIN to receive money. Entering your PIN always deducts money from your account.",
      ta: "டிஜிட்டல் கட்டணங்களின் விதி #1: பணம் பெறுவதற்கு ஒருபோதும் UPI PIN உள்ளிடத் தேவையில்லை. PIN உள்ளிட்டால் உங்கள் கணக்கிலிருந்து பணம் எடுக்கப்படும்.",
    },
  },
  {
    id: 2,
    question: {
      en: "Someone claiming to be from your bank calls and says your ATM card or account will be blocked unless you share an OTP. What should you do?",
      ta: "வங்கி மேலாளர் என்று கூறி ஒருவர் அழைக்கிறார்; OTP சொல்லாவிட்டால் கணக்கு முடக்கப்படும் என்கிறார். நீங்கள் என்ன செய்ய வேண்டும்?",
    },
    options: {
      en: [
        "Share the OTP quickly to prevent account blocking",
        "Ask for their employee ID and then share it",
        "Never share OTP, hang up immediately, and call your bank's official number directly",
        "Forward the SMS to a friend to check",
      ],
      ta: [
        "கணக்கு முடக்கப்படாமல் இருக்க உடனடியாக OTP-ஐ பகிர வேண்டும்",
        "அவர்களின் அடையாள அட்டையைக் கேட்டுவிட்டு பகிர வேண்டும்",
        "ஒருபோதும் OTP பகிரக்கூடாது; அழைப்பைத் துண்டித்துவிட்டு வங்கியின் அதிகாரபூர்வ எண்ணை அழைக்க வேண்டும்",
        "நண்பருக்கு அந்த குறுஞ்செய்தியை அனுப்ப வேண்டும்",
      ],
    },
    correctAnswer: 2,
    explanation: {
      en: "No genuine bank, police officer, or government official will ever ask for your OTP or PIN. Urgency and panic are classic fraud tactics.",
      ta: "எந்த ஒரு வங்கியோ அல்லது அரசு அதிகாரியோ ஒருபோதும் OTP அல்லது PIN கேட்க மாட்டார்கள். பயமுறுத்துவது மோசடி நபர்களின் வழக்கம்.",
    },
  },
  {
    id: 3,
    question: {
      en: "If you unfortunately lose money in an online cyber fraud or fake payment scam, what is the national cyber helpline number to call immediately?",
      ta: "ஆன்லைன் மோசடியில் துரதிர்ஷ்டவசமாக நீங்கள் பணத்தை இழந்தால், உடனடியாக அழைக்க வேண்டிய தேசிய சைபர் உதவி எண் எது?",
    },
    options: {
      en: ["100", "1930", "1098", "1800"],
      ta: ["100", "1930", "1098", "1800"],
    },
    correctAnswer: 1,
    explanation: {
      en: "Dial 1930 immediately or lodge a complaint at cybercrime.gov.in. If reported within the 'golden hour' (first few hours), police can freeze the fraudster's account and recover funds.",
      ta: "உடனடியாக 1930 என்ற எண்ணை அழையுங்கள் அல்லது cybercrime.gov.in-ல் புகாரளியுங்கள். முதல் சில மணி நேரங்களில் புகார் செய்தால் பணத்தை முடக்கி மீட்டெடுக்கலாம்.",
    },
  },
  {
    id: 4,
    question: {
      en: "What is the recommended size of an emergency fund for a micro-entrepreneur's household?",
      ta: "சிறு தொழில்முனைவோர் குடும்பத்திற்கு அவசர நிதியாக எவ்வளவு தொகை வைத்திருக்க வேண்டும்?",
    },
    options: {
      en: [
        "1 week of grocery expenses",
        "3 to 6 months of essential household and business expenses",
        "Equal to your total bank loan",
        "Whatever is left over after buying jewelry",
      ],
      ta: [
        "1 வார மளிகைச் செலவு",
        "3 முதல் 6 மாத அத்தியாவசிய குடும்ப மற்றும் வணிகச் செலவுகள்",
        "மொத்த வங்கிக் கடனுக்கு சமமான தொகை",
        "நகைகள் வாங்கிய பிறகு மீதமுள்ள தொகை",
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: "An emergency buffer of 3 to 6 months protects you from illness, machine breakdown, or off-season slowdowns without having to borrow at high interest.",
      ta: "3 முதல் 6 மாத அவசர நிதி இருந்தால், உடல்நலக் குறைவு அல்லது மந்த காலத்தில் கந்துவட்டிக்கு கடன் வாங்காமல் சமாளிக்க முடியும்.",
    },
  },
  {
    id: 5,
    question: {
      en: "Why is it dangerous to mix your shop counter cash with your household personal spending?",
      ta: "கடை கல்லாப்பெட்டி பணத்தையும் வீட்டு செலவு பணத்தையும் ஒன்றாகக் கலப்பது ஏன் ஆபத்தானது?",
    },
    options: {
      en: [
        "It makes it impossible to know if the business is actually making a real profit",
        "The bank will fine you",
        "You cannot use UPI anymore",
        "It takes up too much space in your purse",
      ],
      ta: [
        "தொழில் உண்மையில் லாபத்தில் இயங்குகிறதா இல்லையா என்பதை அறிய முடியாமல் போய்விடும்",
        "வங்கி அபராதம் விதிக்கும்",
        "UPI பயன்படுத்த முடியாது",
        "பணப்பையில் இடம் பற்றாக்குறை ஏற்படும்",
      ],
    },
    correctAnswer: 0,
    explanation: {
      en: "Mixing business and family funds hides business health. Pay yourself a fixed monthly owner's salary, and keep the business cash separate in its own bank account.",
      ta: "இரண்டையும் கலந்தால் தொழிலின் உண்மையான லாபம் தெரியாது. தொழிலில் இருந்து உங்களுக்கு நிலையான மாத ஊதியம் எடுத்துவிட்டு, கடைக்கு தனி கணக்கு வைக்கவும்.",
    },
  },
  {
    id: 6,
    question: {
      en: "Which of the following is considered a 'Fixed Expense' in your monthly budget?",
      ta: "உங்கள் மாதாந்திர பட்ஜெட்டில் பின்வருவனவற்றில் எது 'நிலையான செலவு' (Fixed Expense) ஆகும்?",
    },
    options: {
      en: [
        "Festival clothing and gifts",
        "Shop monthly rent and loan instalment (EMI)",
        "Vegetables and milk price fluctuations",
        "Tea and snacks for visitors",
      ],
      ta: [
        "பண்டிகை புத்தாடைகள் மற்றும் பரிசுகள்",
        "கடை மாத வாடகை மற்றும் கடன் தவணை (EMI)",
        "காய்கறி மற்றும் பால் விலை மாற்றங்கள்",
        "விருந்தினர்களுக்கான தேநீர் செலவு",
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: "Fixed expenses are non-negotiable costs that remain the same every month and must be budgeted first before discretionary spending.",
      ta: "நிலையான செலவுகள் என்பது ஒவ்வொரு மாதமும் கட்டாயம் செலுத்த வேண்டிய தொகைகள் (வாடகை, கடன் தவணை). இவற்றிற்கு முதலில் முன்னுரிமை அளிக்க வேண்டும்.",
    },
  },
  {
    id: 7,
    question: {
      en: "Under the Pradhan Mantri MUDRA Yojana (PMMY), what is required as collateral/security to get a Shishu loan up to ₹50,000?",
      ta: "பிரதமர் முத்ரா திட்டத்தின் கீழ் ₹50,000 வரை சிசு கடன் பெற என்ன பிணையம் அல்லது அடமானம் வைக்க வேண்டும்?",
    },
    options: {
      en: [
        "Land deed or house documents",
        "Gold jewelry",
        "Zero collateral / No asset security required",
        "Government employee signature",
      ],
      ta: [
        "நிலப் பத்திரம் அல்லது வீட்டு ஆவணம்",
        "தங்க நகைகள்",
        "எந்த பிணையமும் அல்லது அடமானமும் தேவையில்லை (Zero collateral)",
        "அரசு ஊழியர் கையொப்பம்",
      ],
    },
    correctAnswer: 2,
    explanation: {
      en: "MUDRA loans are 100% collateral-free. The government's Credit Guarantee Fund covers the risk for the lending bank.",
      ta: "முத்ரா கடன்கள் முற்றிலும் பிணையில்லாதவை (Collateral-free). அரசு உத்தரவாதம் அளிப்பதால் எந்தவித சொத்தையும் அடமானம் வைக்க வேண்டியதில்லை.",
    },
  },
  {
    id: 8,
    question: {
      en: "An agent outside the bank offers to get your government subsidy loan sanctioned in 2 days if you pay ₹5,000 cash advance. What should you do?",
      ta: "₹5,000 கமிஷன் தந்தால் 2 நாட்களில் அரசு மானியக் கடன் வாங்கித் தருவதாக ஒரு இடைத்தரகர் கூறுகிறார். நீங்கள் என்ன செய்ய வேண்டும்?",
    },
    options: {
      en: [
        "Pay the agent ₹5,000 because government schemes take too long",
        "Refuse immediately; genuine government schemes never charge application or bribe fees",
        "Give half the money now and half after loan disbursement",
        "Ask him to deduct ₹5,000 from the loan amount",
      ],
      ta: [
        "அரசு வேலை விரைவாக நடக்க அந்த இடைத்தரகரிடம் ₹5,000 கொடுக்கலாம்",
        "உடனடியாக மறுக்க வேண்டும்; உண்மையான அரசுத் திட்டங்களுக்கு தரகரோ அல்லது லஞ்சமோ தேவையில்லை",
        "பாதி பணத்தை இப்போது கொடுத்து மீதியை கடன் வந்ததும் தரலாம்",
        "கடன் தொகையிலிருந்து கழித்துக் கொள்ளச் சொல்லலாம்",
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: "Never pay unauthorized agents. Apply directly via official government portals (like udyamimitra.in or kviconline.gov.in) or speak directly with the branch manager.",
      ta: "இடைத்தரகர்களை ஒருபோதும் நம்பாதீர்கள். அரசு போர்ட்டல்கள் அல்லது வங்கி மேலாளரை நேரடியாக அணுகி இலவசமாக விண்ணப்பிக்கவும்.",
    },
  },
  {
    id: 9,
    question: {
      en: "Which habit is the single most effective way to consistently build savings over time?",
      ta: "காலப்போக்கில் சேமிப்பை நிலையாக வளர்க்க எந்த பழக்கம் மிகவும் பயனுள்ளது?",
    },
    options: {
      en: [
        "Spend freely first, and save whatever loose change remains at month-end",
        "Save a fixed amount first on the day income arrives, then spend the remainder",
        "Only save money when you win a prize or bonus",
        "Borrow money from friends to put in a savings account",
      ],
      ta: [
        "முதலில் மனம் போல் செலவழித்துவிட்டு மாதக் கடைசியில் மிஞ்சுவதை சேமிப்பது",
        "வருமானம் வந்த அன்றே ஒரு குறிப்பிட்ட தொகையை முதலிலேயே சேமித்துவிட்டு, மீதியை செலவழிப்பது",
        "பரிசு அல்லது போனஸ் கிடைக்கும் போது மட்டும் சேமிப்பது",
        "நண்பர்களிடம் கடன் வாங்கி சேமிப்பு கணக்கில் போடுவது",
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: "The golden formula of wealth: Income - Savings = Expenses. Always pay yourself first before spending on discretionary items.",
      ta: "சேமிப்பின் பொன்விதி: வருமானம் - சேமிப்பு = செலவு. செலவு செய்வதற்கு முன்பாகவே உங்களுக்கான சேமிப்பை ஒதுக்குங்கள்.",
    },
  },
  {
    id: 10,
    question: {
      en: "How does having a printed UPI QR code at your shop counter benefit your business compared to cash only?",
      ta: "ரொக்கப் பணத்தை விட கடையில் அச்சிடப்பட்ட UPI QR குறியீடு வைத்திருப்பது உங்கள் வணிகத்திற்கு எவ்வாறு பயனளிக்கிறது?",
    },
    options: {
      en: [
        "Money directly deposits in your bank account, eliminates change shortages, and builds a digital transaction record for bank loans",
        "It increases your electricity bill",
        "It forces customers to buy more goods",
        "It allows the bank to take over your shop",
      ],
      ta: [
        "பணம் நேரடியாக வங்கியில் சேரும், சில்லறை தட்டுப்பாடு தீரும், வங்கி கடன் பெற உதவும் டிஜிட்டல் வரவு அறிக்கை உருவாகும்",
        "மின்சாரக் கட்டணம் அதிகரிக்கும்",
        "வாடிக்கையாளர்களை கட்டாயப்படுத்தி வாங்க வைக்கும்",
        "வங்கி கடையை கையகப்படுத்த வழிவகுக்கும்",
      ],
    },
    correctAnswer: 0,
    explanation: {
      en: "QR payments eliminate counterfeit notes, avoid loose change shortages, and create an automated verifiable bank statement that proves your sales when applying for bank loans.",
      ta: "QR குறியீடு சில்லறை பிரச்சனையை தீர்க்கிறது, போலி நோட்டுகளை தவிர்க்கிறது, வங்கி கடன் விண்ணப்பத்தின் போது உங்கள் விற்பனையை நிரூபிக்க உதவுகிறது.",
    },
  },
];

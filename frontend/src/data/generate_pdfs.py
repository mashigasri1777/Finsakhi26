import os

public_resources_dir = r"c:\Finsakhi\frontend\public\resources"
os.makedirs(public_resources_dir, exist_ok=True)

def create_pdf(filename, title, subtitle, sections):
    # Construct stream content
    lines = []
    lines.append("BT")
    lines.append("/F1 16 Tf")
    lines.append("30 750 Td")
    lines.append(f"({title}) Tj")
    
    lines.append("0 -24 Td")
    lines.append("/F1 11 Tf")
    lines.append(f"({subtitle}) Tj")

    lines.append("0 -15 Td")
    lines.append("(--------------------------------------------------------------------------------) Tj")

    y_offset = -20
    for sec_title, sec_items in sections:
        lines.append(f"0 {y_offset} Td")
        lines.append("/F1 12 Tf")
        lines.append(f"({sec_title}) Tj")
        y_offset = -16
        
        for item in sec_items:
            lines.append(f"0 {y_offset} Td")
            lines.append("/F1 10 Tf")
            # Escape parenthesis in text
            clean_item = item.replace("(", "\\(").replace(")", "\\)")
            lines.append(f"({clean_item}) Tj")
            y_offset = -14
        
        y_offset = -20

    lines.append("ET")
    stream_content = "\n".join(lines)
    stream_len = len(stream_content)

    pdf_text = f"""%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length {stream_len} >>
stream
{stream_content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000246 00000 n 
0000000300 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
400
%%EOF
"""
    filepath = os.path.join(public_resources_dir, filename)
    with open(filepath, "wb") as f:
        f.write(pdf_text.encode("latin-1", errors="replace"))
    print(f"Generated: {filename}")

# 1. Basic Financial Planning Guide
create_pdf(
    "basic-financial-planning-guide.pdf",
    "FinSakhi - Basic Financial Planning Guide for Women Entrepreneurs",
    "Published by Pon Crystal Foundation | Contact: info@poncrystalfoundation.org",
    [
        ("1. Core Principles of Business Money Management", [
            "• Separate Personal and Business Accounts: Never mix shop income with home expenses.",
            "• Pay Yourself a Fixed Monthly Salary: Withdraw a fixed amount instead of dipping into cash daily.",
            "• Build a 3-Month Emergency Buffer: Keep at least 3 months of shop operational expenses in RD/Savings."
        ]),
        ("2. The 50-30-20 Micro-Enterprise Budgeting Rule", [
            "• 50% Raw Material & Inventory: Reinvest half of monthly revenue directly into goods and stock.",
            "• 30% Shop Operating Costs: Cover shop rent, electricity, transport, packaging, and assistant wages.",
            "• 20% Savings & Enterprise Growth: Reserve 20% for loan repayment, new machinery, and emergency buffer."
        ]),
        ("3. Debt and Credit Balance Guidelines", [
            "• Avoid Informal Loan Sharks (Meter Vaddi): Moneylenders charge 36%-120% interest per annum.",
            "• Prioritize Bank & Government Credit: MUDRA Shishu loans provide up to Rs 50,000 without collateral.",
            "• Review Monthly Profitability: Calculate true Net Profit = Total Revenue - (Materials + Rent + Bills)."
        ]),
        ("4. Grassroots Community Advisory", [
            "• Tamil Nadu Helpline: Contact Pon Crystal Foundation coordinators for free local workshop counseling.",
            "• Verified Official Portals: Visit mudra.org.in and msme.tn.gov.in for verified scheme criteria."
        ])
    ]
)

# 2. Savings & Budgeting Guide
create_pdf(
    "savings-budgeting-guide.pdf",
    "FinSakhi - Savings & Budgeting Handbook for Women Entrepreneurs",
    "Published by Pon Crystal Foundation | Helpline: 181 / 1930",
    [
        ("1. Daily Cashflow Record Keeping", [
            "• Record Morning Cash Opening Balance every single day before opening the counter.",
            "• Log all Cash Sales and QR Code Digital Payments separately at the end of the evening.",
            "• Keep supplier bills and purchase receipts in a monthly file folder for tax and loan proof."
        ]),
        ("2. Safe Savings Instruments for Women Micro-Entrepreneurs", [
            "• Recurring Deposit (RD): Save Rs 500 or Rs 1,000 every month in a Public Sector Bank.",
            "• Mahila Samriddhi Yojana / Mahila Samman Savings Certificate: Attractive fixed interest rates for women.",
            "• Gold & Asset Backing: Convert excess year-end profit into formal bank deposits or sovereign gold bonds."
        ]),
        ("3. Reducing Overhead Expenses", [
            "• Bulk Raw Material Purchase: Partner with neighboring women sellers to buy stock at wholesale prices.",
            "• Energy Efficiency: Switch to LED bulbs and efficient equipment to lower monthly shop power bills.",
            "• Minimize Unsold Stock Waste: Track fast-moving items and avoid over-ordering perishable stock."
        ]),
        ("4. Emergency Contact & Financial Literacy Desk", [
            "• National Women Helpline: Dial 181 for emergency assistance, scheme counseling, and guidance.",
            "• Emergency Fraud Action: If funds are missing, immediately report to Cyber Crime Helpline 1930."
        ])
    ]
)

# 3. UPI Safety Guide
create_pdf(
    "upi-safety-guide.pdf",
    "FinSakhi - UPI & QR Code Safety Manual",
    "Published by Pon Crystal Foundation | Emergency Cyber Fraud Helpline: 1930",
    [
        ("1. GOLDEN RULE OF UPI PAYMENTS", [
            "• UPI PIN IS ONLY REQUIRED TO SEND OR PAY MONEY. YOU NEVER NEED TO ENTER A PIN TO RECEIVE MONEY!",
            "• If a customer or stranger asks you to enter your PIN to receive money, IT IS A FRAUD SCAM!"
        ]),
        ("2. Verifying Customer QR Payments at Your Shop", [
            "• Never rely on screenshots shown on the customer's phone (Fake UPI payment apps exist!).",
            "• Check your own mobile phone for official SMS alerts from your bank or payment app.",
            "• Set up a Soundbox / Speaker device at your shop counter for instant audible payment confirmation."
        ]),
        ("3. QR Code Counter Security", [
            "• Inspect your physical QR code stand every morning to ensure no scammer stuck their sticker over yours.",
            "• Never click on unknown links sent via WhatsApp or SMS claiming to be UPI cashback or rewards."
        ]),
        ("4. Golden Hour Action Plan if Scammed", [
            "• Call National Cyber Crime Helpline 1930 IMMEDIATELY within 1 hour of unauthorized transaction.",
            "• File an official online complaint at cybercrime.gov.in to freeze the fraudster's bank account."
        ])
    ]
)

# 4. Digital Payment Safety Guide
create_pdf(
    "digital-payment-safety.pdf",
    "FinSakhi - Digital Banking & Mobile Wallet Security Guide",
    "Published by Pon Crystal Foundation | Cyber Crime Portal: cybercrime.gov.in",
    [
        ("1. Mobile Banking App Security Setup", [
            "• Lock your smartphone with strong PIN, Pattern, or Fingerprint biometric security.",
            "• Enable 2-Factor Authentication (2FA) on all banking, UPI, and mobile wallet accounts.",
            "• Never share OTP (One Time Password), ATM PIN, or Internet Banking Passwords with anyone."
        ]),
        ("2. Beware of Remote Access App Traps", [
            "• Never install apps like AnyDesk, TeamViewer, QuickSupport, or RustDesk on caller request!",
            "• Scammers use these apps to view your phone screen and steal banking passwords silently."
        ]),
        ("3. Safe Internet & Wi-Fi Habits", [
            "• Never conduct online banking or UPI transactions using public, open, or unsecured Wi-Fi networks.",
            "• Check for 'https://' and padlock icon in the browser address bar before entering passwords."
        ]),
        ("4. Emergency Support & Helpline Numbers", [
            "• National Cyber Financial Crime Helpline: Dial 1930 (Available 24x7, Toll-Free).",
            "• RBI Banking Ombudsman Helpline: Dial 14448 for unresolved bank complaints."
        ])
    ]
)

# 5. Government Schemes Guide
create_pdf(
    "government-schemes-guide.pdf",
    "FinSakhi - Verified Government Credit & Subsidy Schemes Guide",
    "Published by Pon Crystal Foundation | Official Portals: mudra.org.in | msme.tn.gov.in",
    [
        ("1. Pradhan Mantri MUDRA Yojana (PMMY)", [
            "• Shishu Loan: Up to Rs 50,000 for starting new micro-enterprises. No collateral required!",
            "• Kishore Loan: Rs 50,001 to Rs 5,00,000 for expanding existing shops and buying machinery.",
            "• Tarun Loan: Rs 5,00,001 to Rs 10,00,000 for established enterprises scaling operations."
        ]),
        ("2. Prime Minister Employment Generation Programme (PMEGP)", [
            "• Subsidized credit for manufacturing (up to Rs 50 Lakhs) and service units (up to Rs 20 Lakhs).",
            "• Capital Subsidy: 25% to 35% margin money subsidy for women and rural entrepreneurs."
        ]),
        ("3. Tamil Nadu State Schemes (NEEDS & Unemployed Youth PGP)", [
            "• NEEDS Scheme: 25% capital subsidy (up to Rs 75 Lakhs) with 3% interest subvention for graduates.",
            "• UYEGP Scheme: Up to Rs 15 Lakhs loan with 25% subsidy for micro business setup in Tamil Nadu."
        ]),
        ("4. Essential Document Checklist for Bank Submission", [
            "• Proof of Identity: Aadhaar Card, PAN Card, Voter ID.",
            "• Proof of Residence: Ration Card, Electricity Bill, Utility Bill.",
            "• Business Proof: Shop License / Udyam MSME Registration Certificate (Free at udyamregistration.gov.in)."
        ])
    ]
)

# 6. Small Business Record Keeping Guide
create_pdf(
    "small-business-record-keeping.pdf",
    "FinSakhi - Small Business Bookkeeping & Cashflow Ledger Manual",
    "Published by Pon Crystal Foundation | Contact: info@poncrystalfoundation.org",
    [
        ("1. Importance of Daily Bookkeeping", [
            "• Track Cash vs Digital Income: Understand exactly where your shop revenue is coming from.",
            "• Qualify for Bank Loans Easily: Banks require 6-12 months of clear cashflow records for MUDRA credit.",
            "• Prevent Stock Theft and Loss: Maintain inventory count to notice missing stock immediately."
        ]),
        ("2. Daily Ledger Columns Template", [
            "• Column 1: Date & Time | Column 2: Particulars / Item Description",
            "• Column 3: Cash In (Sales) | Column 4: Digital QR In (UPI)",
            "• Column 5: Expenses Out (Supplier / Utility) | Column 6: Net Closing Cash Balance"
        ]),
        ("3. Customer Credit (Udhaar) Management", [
            "• Maintain a dedicated Udhaar Register book with customer signature or phone confirmation.",
            "• Set a maximum credit limit (e.g. Rs 1,000 per customer) and 15-day repayment deadline.",
            "• Send weekly polite SMS / WhatsApp payment reminders to clear pending customer dues."
        ]),
        ("4. Annual Financial Summary Sheet", [
            "• Total Annual Sales Revenue - Total Annual Purchase & Expenses = Net Gross Income.",
            "• File annual income tax return (ITR) or MSME declaration to build formal credit score."
        ])
    ]
)

# 7. Loan & Credit Awareness Guide
create_pdf(
    "loan-credit-awareness.pdf",
    "FinSakhi - Loan & CIBIL Credit Score Awareness Guide",
    "Published by Pon Crystal Foundation | Official Portal: cibil.com",
    [
        ("1. Bank Interest Rates vs Informal Moneylenders", [
            "• Public Sector Banks (MUDRA / PMEGP): 9% to 12% per ANNUM interest rate.",
            "• Local Moneylenders / Loan Sharks: 36% to 120% per ANNUM (Meter Vaddi / Daily Vaddi).",
            "• Warning: Borrowing from loan sharks can trap micro-businesses in permanent debt cycles."
        ]),
        ("2. Understanding CIBIL Credit Score", [
            "• CIBIL Score ranges from 300 to 900. A score of 750+ is considered EXCELLENT by bank managers.",
            "• How to Maintain High Score: Pay monthly loan EMIs and credit card bills ON TIME before due date.",
            "• Never guarantee or co-sign loans for unreliable acquaintances."
        ]),
        ("3. Avoiding Fake Instant Loan Apps", [
            "• Beware of unauthorized loan apps on Play Store offering instant loans without documentation!",
            "• Fake loan apps steal phone contacts, photos, and blackmail borrowers with exorbitant interest.",
            "• Only take loans from RBI-registered banks, NBFCs, and official government schemes."
        ]),
        ("4. Loan EMI Calculation Formula", [
            "• Monthly EMI = [Principal x Monthly Interest Rate x (1 + Rate)^Tenure] / [(1 + Rate)^Tenure - 1].",
            "• Ensure total monthly loan EMIs do not exceed 30% of your net monthly shop income."
        ])
    ]
)

# 8. Financial Fraud Awareness Guide
create_pdf(
    "financial-fraud-awareness.pdf",
    "FinSakhi - Financial Fraud & Cyber Crime Prevention Handbook",
    "Published by Pon Crystal Foundation | Emergency Helpline: 1930",
    [
        ("1. Top 5 Fraud Scams Targeting Micro-Entrepreneurs", [
            "• Fake Customer Overpayment Scam: 'I sent Rs 5,000 by mistake, please send back Rs 4,000 via UPI.'",
            "• Bank Account Blocked Fraud: 'Your SIM/ATM is blocked, update KYC by telling OTP immediately.'",
            "• Lottery / Gift Prize Scam: 'You won Rs 25 Lakhs, pay Rs 5,000 processing fee to claim prize.'",
            "• Electricity Bill Disconnection Fake SMS: 'Pay bill now or power disconnected tonight.'",
            "• Digital Arrest Fraud: Callers posing as Police / CBI threatening arrest over fake courier parcel."
        ]),
        ("2. Golden Security Protocol", [
            "• NEVER share OTP, PIN, CVV, or Password over phone call or message under any circumstances.",
            "• Banks, RBI, Police, and Electricity Board NEVER ask for OTP or instant money transfer over phone."
        ]),
        ("3. Emergency Financial Crime Helplines", [
            "• National Cyber Financial Crime Helpline: Call 1930 IMMEDIATELY (Toll-Free, 24x7).",
            "• Official Reporting Website: Visit cybercrime.gov.in within the 1-hour Golden Period.",
            "• National Women Helpline: Call 181 for assistance, legal counsel, and community support."
        ])
    ]
)

print("All 8 PDFs created successfully in public/resources/")

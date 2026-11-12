# UK Law Firm — Official Web Platform

> **Advocates & Legal Consultants**  
> Chambers: Flat 201, Maps Apts, Jayabheri Pine Valley, Beside Care Hospitals, Gachibowli, Hyderabad, Telangana 500032  
> Contact: `+91 98667 75034` / `+91 63048 56208` | `contact@uklawfirm.in`

---

## 🏛️ About the Project

This repository hosts the official production website for **UK Law Firm**, a premier litigation and legal advisory firm based in Gachibowli, Hyderabad. Led by founding advocates **Sri M. Umamaheshwar Reddy** (15+ years courtroom practice across High Court of Telangana and District Courts) and **Sri S. Kamalakar** (Cyber Law, Corporate Advisory, and Commercial Litigation specialist).

The website provides comprehensive information on 14 specialized practice areas, firm credentials, chamber facilities, and a seamless client consultation intake system.

---

## ✨ Key Features

- **14 Specialized Practice Area Hubs**: Dynamic Next.js dynamic routing (`/services/[slug]`) covering:
  - Criminal Defense & Bail Relief
  - Civil Litigation & Partition Suits
  - Family & Matrimonial Law
  - RERA & Builder-Buyer Disputes
  - Landlord & Tenant Law
  - Corporate & Commercial Law
  - Labour & Industrial Disputes
  - Tax Appeals & ITAT
  - Intellectual Property Rights (IPR)
  - Cyber Crime & IT Act
  - Consumer Protection & Redressal
  - Tribunals & Quasi-Judicial Forums (NCLT, MACT, CAT)
  - Immigration & OCI/Visa Advisory
  - Other Legal Documentation & Advisory
- **Chambers & Practice Gallery**: High-resolution, fully-responsive photo gallery showcasing the executive conference rooms, law library, and partner consultation suites (`/gallery`).
- **Direct WhatsApp Consultation Intake**: One-tap client inquiry pre-populating practice area and case brief for instant advocate review.
- **Regulatory Compliance**: Built strictly adhering to **Rule 36 of Chapter II, Part VI of the Bar Council of India Rules** and Section 126 of the Indian Evidence Act, 1872. Dedicated legal disclaimer, privacy policy, and terms of service pages.
- **Performance Optimized**: WebP image compression, Next.js Image caching, fast Time-to-Interactive (TTI), and responsive mobile architecture.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Handcrafted accessible SVG icons & Lucide React
- **Deployment**: Node.js / Vercel / Cloudflare

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kavithamedida4-web/Lawyer-website.git

# Navigate to the law-firm project directory
cd Lawyer-website/law-firm

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and build production assets
npm run build

# Start the production server
npm run start
```

---

## 📂 Project Structure

```
law-firm/
├── app/
│   ├── layout.tsx              # Global root layout & SEO metadata
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # Comprehensive firm & partners biography
│   ├── contact/page.tsx        # Consultation booking & Google Maps embed
│   ├── gallery/page.tsx        # Chamber photo gallery
│   ├── services/[slug]/        # Dynamic pages for all 14 legal disciplines
│   ├── privacy-policy/page.tsx # Client confidentiality & statutory privacy policy
│   ├── terms-of-service/page.tsx # Website use & engagement terms
│   └── disclaimer/page.tsx     # BCI Rule 36 compliance declaration
├── components/
│   ├── Navbar.tsx              # Responsive navigation & practice area dropdown
│   ├── Hero.tsx                # Hero banner with advocate credentials
│   ├── About.tsx               # Homepage about section with chamber portraits
│   ├── Services.tsx            # Interactive 14-service carousel
│   ├── Gallery.tsx             # Homepage gallery preview
│   ├── Process.tsx             # 5-step case resolution process
│   ├── FAQ.tsx                 # Frequently asked legal questions
│   ├── Contact.tsx             # Interactive inquiry form & location map
│   ├── Footer.tsx              # Quick links, practice areas & location details
│   └── WhatsAppButton.tsx      # Floating client consultation button
├── data/
│   └── services.ts             # Source data for all 14 legal services
└── public/                     # Optimized WebP & JPEG assets, emblems & icons
```

---

## ⚖️ Regulatory Compliance & Disclaimer

As per the rules of the **Bar Council of India**, advocates are prohibited from advertising or soliciting work. This web presence is maintained purely for informational reference and educational purposes upon voluntary user request.

---

## 👨‍💻 Developed By

Designed and developed by **Edone Solutions**.

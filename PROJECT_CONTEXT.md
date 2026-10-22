# PROJECT_CONTEXT.md — TroncPAYE

This file is the living, single source of truth for the TroncPAYE website project. It documents the current state, architecture, design rules, and business context so any AI or developer can immediately continue work without previous chat history.

---

## 1. Business Information

- **Company Name:** TroncPAYE (formerly PAYE Solutions Ltd)
- **Sector:** UK Hospitality Payroll Bureau & Independent TroncMaster
- **Target Audience:** Restaurants, bars, hotels, pubs, and hospitality groups in the United Kingdom.
- **Tagline:** "Tronc and payroll, perfectly in sync."
- **Core Value Proposition:**
  - Traditional setups require hiring two separate vendors: an external TroncMaster (who often takes an aggressive 1%–4% commission of all tips and service charges) and a separate payroll bureau.
  - TroncPAYE eliminates this double admin by merging **independent TroncMaster oversight** and **hospitality payroll bureau management** under one roof.
  - **Fixed Monthly Fee Guarantee:** Tronc administration is billed as a flat, transparent monthly fee. Zero percentage cuts are taken from staff tips regardless of tip volume fluctuations.
  - **12 Equal Monthly Instalments:** All payroll and tronc services are banded and invoiced in 12 equal monthly instalments, providing steady cash flow forecasting.
  - **HMRC & Legal Compliance:** Full compliance with the **Employment (Allocation of Tips) Act 2023** and Code of Practice. Legitimate Class 1 National Insurance Contribution (NIC) exemptions (saving up to 13.8% Employer NI and 8% Employee NI on tips).
- **Contact Details:**
  - Email: `info@troncpaye.co.uk`
  - URL: `https://troncpaye.co.uk`
  - Socials: `@TroncPAYE` on LinkedIn, X, Facebook, and Instagram.

---

## 2. Pricing Calculator & Quote Carry-Over Architecture

### 1. Interactive 3-Tier Calculator (`src/pages/pricing.astro`):
- **Folder Tabs:** `Tronc Master`, `Tronc & PAYE` (Recommended), and `PAYE Only`.
- **Inputs:**
  - Headcount slider (1–50 employees, with 50+ triggering an enterprise quote prompt).
  - Pay Frequency selector: **Defaults to Monthly (12 runs)** to present lower entry fee points upfront, alongside Four-Weekly (13 runs), Fortnightly (26 runs), Weekly (52 runs), and Combination.
  - Tips per period slider (£500–£50,000) comparing against traditional 4% commission operators to calculate estimated annual savings.
- **Rate Matrices (per pay run):**
  - PAYE: 1–4 (£20 W, £25 F, £30 4W, £30 M), 5–10 (£25 W, £30 F, £40 4W, £40 M), 11–49 (Base + £3 per extra payslip).
  - Tronc: 1–4 (£10 W, £12.50 F, £15 4W, £15 M), 5–10 (£12.50 W, £15 F, £20 4W, £20 M), 11–49 (Base + £1.50 per extra payslip).
  - Annualised 12 equal monthly instalments formula: `(Total Run Fee × Annual Runs) / 12`.
  - Ancillary: Setup fee £75–£100, Year-End & P60s £2/employee (min £35). Net of VAT.
- **Feature Comparison Matrix:**
  - Replaced former carded packages below calculator with a full 3-column capability table across Tronc Governance, Payroll Bureau, and Single-Bureau Integration.

### 2. Standalone & Quote-Driven Contact Flow (`src/pages/contact.astro`):
- **Standalone Mode (Direct Visitors):** Displays a clean, generic quote-request interface ("Get a Free Tailored Quote") with standard guidance and empty form inputs.
- **Quote-Driven Mode (`?quote=true`):**
  1. Headlines dynamically switch to "Lock In Your Fixed-Fee Agreement" and "Confirm & Request Onboarding Pack".
  2. A **"Locked-In Calculator Estimate"** banner appears above the form displaying the exact monthly fee, headcount, schedule, and savings.
  3. The **Headcount** and **Service Required** dropdowns automatically select matching options.
  4. The **Notes/Message** textarea is automatically populated with a complete itemized quote breakdown ready to submit directly for onboarding.

---

## 3. Brand Identity & Design System

- **Primary Colors:**
  - Primary Brand Blue: `#1a3fa0` (`--color-primary`)
  - Primary Dark / Hover: `#122d78` (`--color-primary-dark`, `--color-primary-strong`)
  - Primary Light / Tint: `#e8edfb` (`--color-primary-light`)
  - Primary RGB: `26, 63, 160`
- **Canvas & Neutral Colors:**
  - Light Page Canvas: `#ffffff` (`--color-bg-primary`)
  - Light Card / Secondary Surface: `#f7f9fc` (`--color-bg-secondary`)
  - Light Heading & Body Text: `#1a1a2e` (`--color-text-primary`)
  - Secondary / Muted Text: `#475569` and `#64748b` (`--color-text-secondary`, `--color-text-tertiary`)
  - Light Borders: `#e2e8f0` / `neutral-200`
  - Dark Page Canvas: `#0a1124` / `#0f1b3d` (`--color-bg-primary-dark`)
  - Dark Card Surface: `#0f1b3d` / `#14244d` (`--color-bg-secondary-dark`)
  - Dark Text: `#f8fafc` (`--color-text-primary-dark`), `#cbd5e1`
- **Typography:**
  - Heading font: Instrument Serif (`--font-brand`) for editorial display, alongside Inter font-bold for crisp corporate UI headings.
  - Body & UI font: Inter (`--font-sans`).
- **Design Tokens & Theme System:**
  - Theme: Custom `troncpaye` theme defined in `src/config/themes.js`.
  - `showThemeSwitcher: false` and `persistUserSelection: false` are configured to lock the public site into corporate TroncPAYE navy.

---

## 4. Website Structure & Routes

| Route | Page | Purpose & Current State |
| --- | --- | --- |
| `/` | Home (`src/pages/index.astro`) | **Complete:** Hero with value breakdown, 4 core value pillars, comparison vs traditional operators, 4-step workflow, lead capture banner. |
| `/features` | Our Services (`src/pages/features.astro`) | **Complete:** Deep dive into 3 offerings: Independent TroncMastery, Hospitality Payroll Bureau, and the Combined Single-Bureau Scheme. |
| `/pricing` | Pricing & Packages (`src/pages/pricing.astro`) | **Complete:** 3-tier folder-tab calculator (defaults to Monthly), dynamic savings slider, Side-by-Side Feature Comparison Table, FAQ, and quote CTA. |
| `/about` | About Us (`src/pages/about.astro`) | **Complete:** The story behind TroncPAYE, three-stage evolution, four operational principles, Tips Act 2023 legal compliance overview, and partner CTA. |
| `/contact` | Get a Quote / Contact (`src/pages/contact.astro`) | **Complete:** Dual-mode page (standalone generic enquiry by default, or auto-populating locked-in quote review when arriving from the pricing calculator). |
| `/blog` | Blog (`src/pages/blog`) | **Hidden:** Disabled from primary navigation (`menu.json`). No immediate blog posts needed. |

---

## 5. Navigation Architecture

Configured in `src/collections/menu.json`:
1. `Home` (`/`)
2. `About Us` (`/about`)
3. `Our Services` (`/features`)
4. `Pricing` (`/pricing`)
5. `Get a Quote` (`/contact`)

---

## 6. Technical Architecture

- **Framework:** Astro 5.15 / Astro 7 compatible static site.
- **Styling:** Tailwind CSS v4 with `@tailwindcss/vite` and CSS custom properties defined in `src/styles/global.css`.
- **Icons:** `@lucide/astro` for UI symbols.
- **Key Component Conventions:**
  - Layout: `src/layouts/Layout.astro`
  - Reusable UI: `src/components/ui/Button.astro`, `Badge.astro`, `BrowserFrame.astro`.
  - Section Headers: `src/components/elements/SectionHeader.astro`.
  - Global site configuration: `src/config/site.js`.
  - Theme definitions: `src/config/themes.js`.
- **Workflow Convention:** All code changes must be provided as copy-pasteable terminal commands (e.g. `cat << 'EOF' > path/to/file`) so they can be executed directly in the Codespaces terminal.

---

## 7. Project Status & Outstanding Work

### Completed:
- [x] Initialized and configured GitHub Codespaces.
- [x] Brand configuration in `src/config/site.js` with UK metadata and social links.
- [x] Corporate theme configured in `src/config/themes.js` (disabled public switcher).
- [x] Clean conversion-driven navigation configured in `src/collections/menu.json`.
- [x] Full custom rewrite of Homepage (`src/pages/index.astro` and `src/components/home/HeroSection.astro`).
- [x] Full custom rewrite of Services (`src/pages/features.astro`).
- [x] Full custom rewrite of Pricing (`src/pages/pricing.astro`) with Monthly default and Feature Comparison Matrix.
- [x] Implemented interactive 3-tier folder-tab calculator with headcount slider, pay frequency selector, 12 equal monthly instalments, and traditional 4% operator savings comparisons.
- [x] Implemented instant quote carry-over mechanism passing all calculations to Contact page via URL query parameters.
- [x] Full custom rewrite of About Us (`src/pages/about.astro`).
- [x] Dual-mode Contact / Quote page (`src/pages/contact.astro`): standalone-first by default, dynamic quote prefilling when originating from calculator.
- [x] Maintained living `PROJECT_CONTEXT.md` knowledge base.

### Outstanding:
- [ ] Update `src/components/sections/Header.astro` to remove dark-mode toggle and replace GitHub icon button with primary "Get a Quote" CTA button.
- [ ] Connect contact form in `src/pages/contact.astro` to an active form submission backend (e.g. Formspree, Netlify Forms, or email API).
- [ ] Review and clean up `src/components/sections/Footer.astro` and `src/pages/404.astro`.

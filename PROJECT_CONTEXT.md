# PROJECT_CONTEXT.md — TroncPAYE

This file is the living, single source of truth for the TroncPAYE website project. It documents the current state, architecture, design rules, and business context so any AI or developer can immediately continue work without previous chat history.

---

## 1. Business Information

- **Company Name:** TroncPAYE (formerly PAYE Solutions Ltd)
- **Sector:** UK Hospitality Payroll Bureau & Independent TroncMaster
- **Target Audience:** Restaurants, bars, hotels, pubs, and hospitality groups in the United Kingdom.
- **Tagline:** "Tronc and payroll, perfectly in sync."
- **Core Value Proposition:**
  - Traditional setups require hiring two separate vendors: an external TroncMaster (who often takes an aggressive 1%–3% commission of all tips and service charges) and a separate payroll bureau.
  - TroncPAYE eliminates this double admin by merging **independent TroncMaster oversight** and **hospitality payroll bureau management** under one roof.
  - **Fixed Monthly Fee Guarantee:** Tronc administration is billed as a flat, transparent monthly fee. Zero percentage cuts are taken from staff tips regardless of tip volume fluctuations.
  - **HMRC & Legal Compliance:** Full compliance with the **Employment (Allocation of Tips) Act 2023** and Code of Practice. Legitimate Class 1 National Insurance Contribution (NIC) exemptions (saving up to 13.8% Employer NI and 8% Employee NI on tips).
- **Contact Details:**
  - Email: `info@troncpaye.co.uk`
  - URL: `https://troncpaye.co.uk`
  - Socials: `@TroncPAYE` on LinkedIn, X, Facebook, and Instagram.

---

## 2. Brand Identity & Design System

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
  - Dark mode remains supported via `.dark` class.

---

## 3. Website Structure & Routes

| Route | Page | Purpose & Current State |
| --- | --- | --- |
| `/` | Home (`src/pages/index.astro`) | **Complete:** Hero with value breakdown, 4 core value pillars, comparison vs traditional operators, 4-step workflow, lead capture banner. |
| `/features` | Our Services (`src/pages/features.astro`) | **Complete:** Deep dive into 3 offerings: Independent TroncMastery, Hospitality Payroll Bureau, and the Combined Single-Bureau Scheme. |
| `/pricing` | Pricing & Packages (`src/pages/pricing.astro`) | **Complete:** 3 tiered packages (TroncMaster Only, Combined Tronc & Payroll with nowrap badge, Payroll Bureau Only), savings comparison vs 2% commission operators, FAQ, and quote CTA. |
| `/about` | About Us (`src/pages/about.astro`) | **Complete:** The story behind TroncPAYE, three-stage evolution, four operational principles, Tips Act 2023 legal compliance overview, and partner CTA. |
| `/contact` | Get a Quote / Contact (`src/pages/contact.astro`) | **Complete:** Direct contact information, SLA response time, and an interactive lead capture form gathering headcount, service requirements, and venue notes. |
| `/blog` | Blog (`src/pages/blog`) | **Hidden:** Disabled from primary navigation (`menu.json`). No immediate blog posts needed. |

---

## 4. Navigation Architecture

Configured in `src/collections/menu.json`:
1. `Home` (`/`)
2. `About Us` (`/about`)
3. `Our Services` (`/features`)
4. `Pricing` (`/pricing`)
5. `Get a Quote` (`/contact`)

---

## 5. Technical Architecture

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

## 6. Project Status & Outstanding Work

### Completed:
- [x] Initialized and configured GitHub Codespaces.
- [x] Brand configuration in `src/config/site.js` with UK metadata and social links.
- [x] Corporate theme configured in `src/config/themes.js` (disabled public switcher).
- [x] Clean conversion-driven navigation configured in `src/collections/menu.json`.
- [x] Full custom rewrite of Homepage (`src/pages/index.astro` and `src/components/home/HeroSection.astro`).
- [x] Full custom rewrite of Services (`src/pages/features.astro`).
- [x] Full custom rewrite of Pricing (`src/pages/pricing.astro`).
- [x] Fixed badge line-wrapping in `src/pages/pricing.astro` with `whitespace-nowrap`.
- [x] Full custom rewrite of About Us (`src/pages/about.astro`).
- [x] Full custom rewrite of Contact / Quote page with lead form (`src/pages/contact.astro`).
- [x] Created and maintained `PROJECT_CONTEXT.md` knowledge base.

### Outstanding:
- [ ] Review and clean up unused demo routes (`/design`, `/elements`, `/sign-in`, `/sign-up`, `/signin`, `/signup`) to streamline production build.
- [ ] Integrate form submission handler (e.g. Formspree, Netlify Forms, or custom API route) for `src/pages/contact.astro` when ready.
- [ ] Add real company phone number and registered company address to footer and contact cards once finalized.

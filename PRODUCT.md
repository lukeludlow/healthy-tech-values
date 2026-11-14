# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: prospective consulting clients.** These are parents and families deciding whether Jessica Ludlow and Healthy Tech Balance can help them. Many arrive because screens are pulling someone at home away from them: a child, a teenager or an adult who is "sacrificing relationship connections and personal development". They come to the free quiz and resources to get a real starting point, and also to judge whether this is the person to work with.

**Secondary:** families and individuals who take the quiz on its own, often together. A parent and a teenager comparing results is the conversation the tool is meant to start.

## Product Purpose

Healthy Tech Balance (healthytechbalance.org) is the free, public side of Jessica Ludlow's consulting practice (healthytechbalance.com). It does two jobs, and they carry **equal weight**:

1. **Give real value for free.** The 20-question Core Values Quiz, the Learn page, the screen-time guidelines and the resource library should help a family even if they never get in touch.
2. **Act as the front door to consulting.** The same experience should build enough trust that families who need more help reach out.

Success means a family leaves with a clear, ranked picture of their values and concrete next steps. Families who need deeper help can see a clear, trustworthy path to working with Jessica.

## Positioning

The method has one premise: you can't use tech intentionally until you know what you actually value. It is a three-step process ("Distill Your Values → Set Aligned Goals → Use Tech Intentionally"), not a list of tips and tricks. It goes after the roots: "avoidance, dependency, and the deeper patterns that keep people disconnected". The guide behind it is a specific person with decades of mental-health, addiction and trauma work behind her, who is also a parent raising four neurodivergent children. Her practice and that lived experience are what a generic screen-time site cannot honestly copy.

## Operating Context

- People take the quiz alone or as a family. It is one question per screen, answers are multi-select, and progress survives closing the tab ("Continue the quiz").
- Results get downloaded as a PNG or printed on A4, which means they're shared and compared away from the screen, such as on the fridge or in a family conversation.
- The Learn page and screen-time guidelines are printed and used as reference material.
- Jessica gives presentations nationally to youth, parents and young adults. The site is likely somewhere audiences land afterwards.
- Consulting itself happens off-site at healthytechbalance.com.

## Capabilities and Constraints

- **Quiz:** 20 questions with 4 options each, every option tagged with 1 of 10 value categories. Scoring is an additive frequency tally that produces a ranked profile of the 10 values. Each value has 4 hand-written suggested goals (`src/data/questionData.ts`, `src/data/goalsData.ts`).
- **Values (fixed terminology):** Stability & Security, Health & Harmony, Achievement & Influence, Growth & Mastery, Adventure & Exploration, Connection & Love, Integrity & Ethics, Independence & Freedom, Contribution & Service, Tradition & Spirituality.
- **Pages:** Home, Quiz, Results (noindexed so personal results stay out of search), Learn (deep-linkable `#core-values` and `#screen-time-guidelines`), Resources (60+ curated orgs, articles, books, podcasts and films).
- **Privacy:** right now the quiz is free, needs no signup and stores nothing on a server (localStorage only). This is a **current fact, not a permanent promise**. A future version may add accounts, email capture or booking. Don't claim "never" in copy.
- **Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, the Catalyst/Headless UI kit, jotai, deployed on Vercel.
- **Layout:** mobile-first. Check at 390, 768 and 1440px, with no horizontal scroll (per CLAUDE.md).
- The logo mark and current brand green are **not** committed identity. They may change.

## Brand Commitments

- **First-person voice is binding.** The site speaks as Jessica: warm, personal, direct, one parent to another ("As a parent, I know what it feels like to be overwhelmed…"). Never institutional or clinical-corporate.
- The name "Healthy Tech Balance" and the tagline "Take back your relationships, your joy, and your life."

## Evidence on Hand

**About Jessica Ludlow** (provided by the project owner; usable on the site):
- Has been a fierce advocate for better-quality mental health access for nearly three decades.
- Studied Psychology and Nursing at UNR and BYU.
- Has worked in the medical, educational and tech fields around the world.
- Is raising four neurodivergent children with her husband of 31 years.
- Specializes in Screen Addiction Treatment and Prevention.
- Was recently featured in *Women to Know in Utah*.
- Is currently director of Accepted Therapy, helping people heal from traumas and addictions.
- Is based in central Utah and travels nationally to give presentations for youth, parents and young adults.

**Assets:**
- A name and photo of Jessica exist and are approved. **The photo and bio are not in the repo yet** and will come in a follow-up task.
- The logo is at `src/assets/Healthy_tech_social_icon.webp`, the hero photo at `public/images/htb-image-asset.webp` and the screen-time guidelines chart at `public/images/Screen Time Guidelines.png`.
- The quiz content, goals, Learn copy and the curated resource library are all in `src/`.

**Absent, so never fabricate:** client testimonials, client counts, outcome statistics, pricing, and any credentials beyond those listed above.

## Product Principles

1. **Value before the ask.** Every free piece has to be genuinely useful on its own. The path to consulting is earned by that usefulness, never forced in front of it.
2. **A real person, not a platform.** Trust comes from Jessica's specific experience and voice. Keep the personal and specific over the generic and authoritative.
3. **Roots over tips.** Frame tech habits as expressions of values and deeper patterns, not as screen-time rules to obey.
4. **Made for families, not just individuals.** Design for results that are compared, printed and talked about across generations.
5. **Gentle with people in crisis.** Some visitors arrive overwhelmed or afraid of losing someone. Be calm and clear, with no alarmism, shame or pressure.

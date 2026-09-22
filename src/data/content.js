// ── All copy lives here. Edit this file to update site content. ──────────
// Search for "TODO" to find every spot that needs a real link or asset.

export const profile = {
  name: "Rishabh Sharma",
  role: "AI Product Manager",
  location: "Bengaluru, India",
  email: "rishabh9471@gmail.com",
  phone: "7742313435",
  // TODO: add your LinkedIn / GitHub / X profile URLs
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  resumeFile: "/Rishabh_Sharma_Product.pdf", // TODO: drop your resume PDF into /public and update if renamed
  summary:
    "I build AI-driven products at the messy intersection of healthcare operations and insurance — the kind of 0→1 work where the spec doesn't exist yet and the win condition is 'ops stops doing this by hand.' Three years in, I've shipped claims automation, partner integrations, and booking experiences that moved real numbers, not just roadmap slides.",
};

// Hero metrics — the headline numbers, in the order they should be read.
export const heroMetrics = [
  { value: 50, suffix: "%", label: "cut in manual claims-ops effort", detail: "AI-driven prescription extraction" },
  { value: 2, suffix: "×", label: "revenue growth across the partner network", detail: "30+ insurers onboarded" },
  { value: 20, suffix: "%", label: "lift in booking conversion", detail: "funnel diagnosis + UX fixes" },
  { value: 30, suffix: "%", label: "faster claim resolution", detail: "reconciliation logic + workflow redesign" },
];

// ── Case studies ───────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: "claims-automation",
    tag: "Claims Ops",
    title: "Cutting claims-ops effort in half with AI extraction",
    metric: "50%",
    metricLabel: "reduction in manual effort",
    role: "Product Associate L2",
    company: "Truworth Wellness",
    timeline: "2024",
    context:
      "Every claim in our OPD network started the same way: a member uploads a photo of a paper prescription, and someone on the ops team reads it, types it in, and cross-checks it against the policy. At scale, that queue was the single biggest drag on turnaround time.",
    problem:
      "The bottleneck sat squarely between prescription upload and ops review. Handwriting quality varied wildly, data entry was error-prone, and reconciliation against partner policy rules was a manual, line-by-line exercise. Ops headcount was scaling with claim volume instead of the other way around.",
    approach: [
      "Mapped the full adjudication pipeline end to end and instrumented it to find exactly where time was being lost — extraction, not review, turned out to be the real cost center.",
      "Designed an AI-driven prescription data extraction flow that pulled structured fields (drug name, dosage, doctor, date) from uploaded images, with confidence scoring to route only ambiguous cases to a human.",
      "Built automated reconciliation logic that checked extracted claims against partner policy rules before they ever reached an ops queue.",
      "Ran the new flow in shadow mode against the manual process for two sprints to validate accuracy before cutting over.",
    ],
    impact: [
      "Manual effort in the adjudication pipeline dropped by 50%.",
      "Freed up ops capacity to absorb partner growth without proportional headcount increases.",
      "Became the foundation for the reconciliation logic used across the 30+ partner network.",
    ],
    tools: ["SQL", "Ops workflow design", "Confidence-scored ML review", "Metabase"],
  },
  {
    id: "partner-platform",
    tag: "Platform / Integrations",
    title: "Building the Partner Platform behind 2× revenue growth",
    metric: "2×",
    metricLabel: "revenue growth",
    role: "Product Associate L2",
    company: "Truworth Wellness",
    timeline: "2024–Present",
    context:
      "Truworth's OPD and wellness products only work if insurers and TPAs trust the pipes underneath. Every new partner — ICICI Lombard, Care Health Insurance, Medi Assist among them — arrived with its own policy structure, claim rules, and onboarding expectations.",
    problem:
      "Onboarding was ad hoc: every partner integration was scoped and built as a near-bespoke project. That made growth linear with engineering time, and it capped how many partners the team could realistically support in a year.",
    approach: [
      "Owned the Partner Platform end to end — the layer that standardizes how a new insurer or TPA plugs into claims, eligibility, and reporting.",
      "Defined a common onboarding contract (data formats, policy-rule configuration, reporting cadence) so new partners could be added by configuration, not custom code.",
      "Worked directly with partner teams at ICICI Lombard, Care Health Insurance, and Medi Assist to validate the contract against real-world policy edge cases.",
      "Paired the platform with SQL dashboards so each partner had visibility into their own volumes without a manual reporting cycle.",
    ],
    impact: [
      "Standardized onboarding across 30+ partners.",
      "Supported 2× revenue growth by removing engineering time as the constraint on partner growth.",
      "Cut the reporting turnaround for partner-facing dashboards, built in Superset and Metabase, by 40%.",
    ],
    tools: ["SQL", "Superset", "Metabase", "API integration", "Partner GTM"],
  },
  {
    id: "cashless-opd",
    tag: "0→1",
    title: "0→1: the cashless OPD journey",
    metric: "15%",
    metricLabel: "user adoption",
    role: "Product Associate L2",
    company: "Truworth Wellness",
    timeline: "2024",
    context:
      "Most OPD claims meant members paid upfront and waited for reimbursement — friction that suppressed usage of a benefit they'd already paid for. A cashless flow, where eligibility and billing are settled at the point of care, didn't exist yet in the product.",
    problem:
      "Building cashless from zero meant solving two hard, coupled problems at once: real-time eligibility checks against partner policy data, and a claim-submission flow simple enough for a member to complete at a clinic counter, not from a desk with all their documents.",
    approach: [
      "Scoped the MVP around the two failure points members hit most: 'am I actually eligible for this' and 'my claim got stuck because a document was wrong.'",
      "Designed the eligibility check to run against partner policy data in real time, so a member's status was resolved before they left the clinic.",
      "Simplified claim submission into a guided flow that flagged missing or malformed documents at the point of upload instead of after ops review.",
      "Shipped as a phased rollout across the partner network, using early cohort data to fix eligibility edge cases before wider release.",
    ],
    impact: [
      "Reached 15% user adoption by directly resolving the eligibility and submission roadblocks that had suppressed usage.",
      "Reduced the number of claims stuck in ops rework due to document issues.",
      "Established the eligibility-check pattern later reused across other Truworth products.",
    ],
    tools: ["PRD writing", "MVP scoping", "Customer journey mapping", "Cross-functional delivery"],
  },
  {
    id: "booking-funnel",
    tag: "Growth",
    title: "Diagnosing and fixing the booking funnel",
    metric: "20%",
    metricLabel: "lift in booking conversion",
    role: "Product Associate L1",
    company: "Truworth Wellness",
    timeline: "2023–2024",
    context:
      "The Sponsored Health Check booking funnel processed thousands of bookings a month, but a meaningful share of users were dropping off somewhere between starting a booking and confirming a slot — and nobody could say exactly where.",
    problem:
      "Drop-off was being discussed anecdotally, not diagnosed. Without step-by-step funnel visibility, every proposed fix was a guess, and campaign and configuration workflows hadn't been touched since the funnel first shipped.",
    approach: [
      "Instrumented the full booking funnel in MoEngage and broke it down step by step to find the specific screens causing drop-off, rather than treating it as one big leak.",
      "Identified UI/UX friction points and workflow inefficiencies at each stage and prioritized fixes by drop-off volume, not by ease of implementation.",
      "Redesigned the Sponsored Health Check campaign and configuration workflows alongside the funnel fixes, since the two were tangled together operationally.",
      "Validated each change against funnel analytics before rolling it out to the full booking volume.",
    ],
    impact: [
      "Lifted booking completion rate by 20%.",
      "Cut turnaround time on the redesigned campaign workflows by 25%, across 5,000+ monthly bookings.",
      "Later extended the same automated, structured approach to post-consultation WhatsApp journeys, lifting fulfillment rates by 25%.",
    ],
    tools: ["MoEngage", "Funnel analysis", "A/B testing", "Wireframing", "SQL"],
  },
];

// ── Experience (summarized) ───────────────────────────────────────────
export const experience = [
  {
    role: "Product Associate L2",
    company: "Truworth Wellness",
    location: "Bengaluru",
    period: "Jul 2024 — Present",
    summary:
      "Own AI-driven automation and the Partner Platform powering Truworth's insurer and TPA network. Shipped claims automation, a 0→1 cashless OPD journey, and campaign workflows across 5,000+ monthly bookings.",
    highlights: [
      "Cut manual claims-ops effort 50% with AI-driven prescription extraction and reconciliation logic",
      "Standardized onboarding for 30+ partners, supporting 2× revenue growth",
      "Redesigned campaign & configuration workflows for a 25% reduction in TAT",
      "Automated post-consultation WhatsApp journeys, lifting fulfillment 25%",
      "Built SQL dashboards in Superset & Metabase for 20+ clients, cutting reporting time 40%",
    ],
  },
  {
    role: "Product Associate L1",
    company: "Truworth Wellness",
    location: "Bengaluru",
    period: "Jun 2023 — Jun 2024",
    summary:
      "Diagnosed and fixed the booking funnel, strengthened data reliability across client dashboards, and ran Scrum across 50+ sprints.",
    highlights: [
      "Lifted booking completion rate 20% via MoEngage funnel analysis and UX fixes",
      "Eliminated 30% of metric inconsistencies with SQL-based validation & reconciliation checks",
      "Launched Heart Rate Tracker & Check-in Challenges — 20% adoption lift within 60 days",
      "Ran Scrum across 50+ sprints and 200+ user stories, improving sprint velocity 20%",
    ],
  },
];

// ── SQL / data section ─────────────────────────────────────────────────
export const dataWork = {
  intro:
    "Most PMs point at dashboards someone else built. I write the SQL, build the dashboards, and validate the numbers myself — because a metric I can't trust isn't a metric I should ship a decision on.",
  stats: [
    { value: "20+", label: "client dashboards built in Superset & Metabase" },
    { value: "40%", label: "reduction in reporting turnaround time" },
    { value: "30%", label: "fewer metric inconsistencies after SQL-based validation" },
  ],
  points: [
    "Built and maintained SQL dashboards in Superset and Metabase for 20+ clients, replacing manual reporting cycles.",
    "Implemented SQL-based validation and reconciliation checks across dashboards, eliminating metric inconsistencies by 30%.",
    "Used funnel and cohort queries — not just dashboard totals — to diagnose the exact drop-off points behind the booking funnel case study.",
    "Comfortable owning a metric from raw query to the number that lands in a leadership review.",
  ],
};

// ── Live projects ──────────────────────────────────────────────────────
export const projects = [
  {
    id: "skillsprint",
    name: "SkillSprint",
    tagline: "Gamified learning platform for product managers",
    featured: true,
    description:
      "A gamified PM learning platform built to close the engagement gap in existing PM-education products — scenario-based challenges, XP, streaks, and leaderboards, shipped end to end from PRD to a live, user-tested product.",
    impact: [
      "Validated by 200+ users with a 70% scenario-completion rate",
      "Shipped end-to-end: PRD → design → build → live deployment",
      "Automated deployment pipeline via GitHub → Vercel",
    ],
    skills: ["React", "PRD Writing", "Gamification Design", "GitHub Actions", "Vercel"],
    // TODO: replace with your real links
    liveUrl: "https://your-skillsprint-url.vercel.app",
    githubUrl: "https://github.com/your-handle/skillsprint",
  },
  {
    id: "ddp",
    name: "DDP — Doctor Discovery Platform",
    tagline: "Prescription-driven doctor discovery, reframed",
    featured: false,
    description:
      "Reframed doctor discovery away from generic internet listings toward doctors members already trust — sourced directly from prescription data. Built the end-to-end AI-assisted sourcing workflow, from extraction to ops verification to network onboarding.",
    impact: [
      "20% improvement in discovery efficiency vs. generic listing search",
      "30% fewer stakeholder iteration cycles via an interactive prototype",
      "End-to-end AI-assisted sourcing workflow: extract → verify → onboard",
    ],
    skills: ["AI-assisted sourcing", "Prototyping", "Stakeholder alignment", "Vercel"],
    // TODO: replace with your real links
    liveUrl: "https://your-ddp-url.vercel.app",
    githubUrl: "https://github.com/your-handle/ddp",
  },
];

// ── Skills ──────────────────────────────────────────────────────────────
export const skills = {
  "Product Management": [
    "Roadmap Planning", "MVP Scoping", "PRD Writing", "GTM Strategy", "Feature Prioritization",
    "Agile/Scrum", "User Stories", "Wireframing", "Customer Journey Mapping",
    "User Segmentation", "Retention Analysis", "API Integration", "Cross-functional Collaboration",
  ],
  "Data & Analytics": [
    "SQL", "Funnel Analysis", "KPI Definition", "Dashboarding", "A/B Testing",
    "Google Analytics", "Conversion Optimization",
  ],
  "Tools": [
    "Claude", "Vercel", "Lovable", "MoEngage", "Superset", "Metabase",
    "Figma", "Whimsical", "GitHub", "Excel", "Jira", "Confluence",
  ],
};

// ── Certifications ─────────────────────────────────────────────────────
// Add certifications here as { name, issuer, date, url } — the section
// renders an empty state gracefully until this array has entries.
// Example:
// { name: "Certified Scrum Product Owner", issuer: "Scrum Alliance", date: "2025", url: "https://..." }
export const certifications = [
  // TODO: add your certification(s) here
];

// ── Education ───────────────────────────────────────────────────────────
export const education = {
  degree: "B.Tech, Mechanical Engineering",
  school: "The LNM Institute of Information Technology, Jaipur",
  period: "Aug 2018 — Jun 2022",
};

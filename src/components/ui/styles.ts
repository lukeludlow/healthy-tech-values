/**
 * Shared class strings for the Healthy Tech Balance design system.
 * Colours come from the @theme tokens in App.css (primary, base-200, ink…).
 */

export const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary";

/** Large section heading (h2). */
export const sectionHeading =
    "text-[clamp(2rem,5vw,3rem)] font-[750] leading-[1.05] tracking-[-0.03em] text-ink text-balance";

/** Page title (h1) for reading pages. */
export const pageHeading =
    "text-[clamp(2.5rem,6.5vw,4rem)] font-[750] leading-[1.02] tracking-[-0.035em] text-ink text-balance";

/** Short intro line under a section heading. */
export const sectionIntro = "max-w-[60ch] text-lg leading-[1.6] text-ink-muted";

/** Larger first paragraph. */
export const leadText =
    "text-[22px] font-medium leading-[1.45] text-ink text-pretty";

/** Body paragraph. */
export const bodyText = "text-[17px] leading-[1.65] text-ink-muted text-pretty";

/** Inline text link: dark text with a green underline. */
export const textLink = `rounded-[3px] font-semibold text-ink underline decoration-primary decoration-[1.5px] underline-offset-[5px] hover:decoration-[2.5px] ${focusRing}`;

/** Secondary action: green-outlined pill. */
export const pillLink = `inline-flex items-center gap-1.5 whitespace-nowrap px-5 py-2.5 rounded-full border-[1.5px] border-primary bg-white text-[15px] font-semibold text-ink cursor-pointer transition-colors duration-160 ease-gentle hover:bg-base-200 ${focusRing}`;

/**
 * Primary action: green pill. The 19px bold label counts as large text,
 * which keeps white-on-#60815f (4.4:1) above the WCAG large-text minimum.
 */
export const primaryButton = `inline-flex items-center justify-center gap-1.5 min-h-13 px-6.5 py-3 rounded-full bg-primary text-center text-[19px] font-bold text-white cursor-pointer disabled:bg-base-200 disabled:text-ink-muted/60 disabled:cursor-not-allowed ${focusRing}`;

/** Primary action on a green surface: white pill. */
export const onGreenButton =
    "inline-flex items-center justify-center min-h-13 px-6.5 py-3 rounded-full bg-white text-[19px] font-bold text-ink cursor-pointer transition-colors duration-180 ease-gentle hover:bg-base-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white";

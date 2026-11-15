import { useLocation } from "react-router";
import { useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/16/solid";
import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import QuizCallout from "@/components/ui/QuizCallout.tsx";
import StepPath, { type Step } from "@/components/ui/StepPath.tsx";
import {
    bodyText,
    leadText,
    pageHeading,
    pillLink,
    sectionHeading,
    sectionIntro,
    textLink,
} from "@/components/ui/styles.ts";
import Seo from "@/components/seo/Seo.tsx";
import {
    AcademicCapIcon,
    GlobeAmericasIcon,
    HandRaisedIcon,
    HeartIcon,
    KeyIcon,
    MapIcon,
    ScaleIcon,
    ShieldCheckIcon,
    SunIcon,
    TrophyIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

function valueSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-");
}

const whyValues = [
    {
        Icon: MapIcon,
        title: "Clarity & Direction",
        description:
            "Values act as a compass when life feels uncertain. When you know what you stand for, decisions become clearer and less exhausting.",
    },
    {
        Icon: ScaleIcon,
        title: "Aligned Decisions",
        description:
            "They help you say yes to what matters and no to what doesn't. Every boundary you set becomes easier when it's rooted in something real.",
    },
    {
        Icon: UserGroupIcon,
        title: "Stronger Relationships",
        description:
            "Living authentically by your values builds trust. People around you — especially your kids — sense the difference between words and lived convictions.",
    },
    {
        Icon: SunIcon,
        title: "Life Satisfaction",
        description:
            "Research consistently shows that people who live in alignment with their core values report higher fulfillment and resilience in hard seasons.",
    },
];

const coreValues = [
    {
        Icon: ShieldCheckIcon,
        name: "Stability & Security",
        description:
            "You find peace in predictability. Safety, routine, and financial security aren't just preferences — they're foundational to how you thrive. You plan ahead so that the people who depend on you can count on you.",
        techNote:
            "Technology should protect your family, not expose it. From digital privacy settings to screen-time guardrails, honoring this value means building a stable, secure digital environment at home.",
    },
    {
        Icon: HeartIcon,
        name: "Health & Harmony",
        description:
            "Wellbeing — physical, emotional, and relational — is your priority. Balance and a calm household matter deeply to you. When your body and environment are in order, everything else flows more naturally.",
        techNote:
            "Devices that disrupt sleep or amplify stress work against this value. Protecting your calm means choosing when and how technology enters your space.",
    },
    {
        Icon: TrophyIcon,
        name: "Achievement & Influence",
        description:
            "You're motivated by excellence, recognition, and meaningful impact. You want to reach your potential and earn respect by doing hard things well. Goals and milestones energize you.",
        techNote:
            "Social media comparison and passive scrolling steal hours from real progress. Use technology as a lever for genuine achievement — not a substitute for it.",
    },
    {
        Icon: AcademicCapIcon,
        name: "Growth & Mastery",
        description:
            "Learning is core to who you are. Whether it's developing a skill, deepening expertise, or pursuing wisdom, you believe in continuous improvement. You want your mind sharpened, not dulled.",
        techNote:
            "The internet holds extraordinary learning resources — and extraordinary distractions. Protect deep focus time and use educational platforms with intention.",
    },
    {
        Icon: GlobeAmericasIcon,
        name: "Adventure & Exploration",
        description:
            "You're drawn to novelty, discovery, and the thrill of new experiences. Routine can feel like a cage. You want life to feel expansive, energized by trying things most people wouldn't dare.",
        techNote:
            "Technology can unlock the world — or keep you endlessly scrolling a simulation of it. Use it to plan and connect you to real experiences, not replace them.",
    },
    {
        Icon: UserGroupIcon,
        name: "Connection & Love",
        description:
            "Relationships are at the center of what makes life meaningful to you. Empathy, intimacy, and belonging aren't just nice to have — they're what you live for. You show up for the people who matter.",
        techNote:
            "Devices at the dinner table and midnight phone checks chip away at the connection you value most. Use technology to deepen relationships — not interrupt them.",
    },
    {
        Icon: ScaleIcon,
        name: "Integrity & Ethics",
        description:
            "You hold yourself to a high standard of honesty, fairness, and responsibility. You want your actions to align with your principles, and you model that for those around you. Character counts more than convenience.",
        techNote:
            "Practice digital citizenship — be as honest and thoughtful online as you are in person. The integrity you model offline shapes how your family shows up online.",
    },
    {
        Icon: KeyIcon,
        name: "Independence & Freedom",
        description:
            "Autonomy is non-negotiable. You want to make your own choices, think for yourself, and resist becoming dependent on people or systems that don't have your best interests at heart. Privacy matters to you.",
        techNote:
            "Algorithms and notification loops are engineered to reduce your independence. Protect your privacy, limit data exposure, and stay in control of your own attention.",
    },
    {
        Icon: HandRaisedIcon,
        name: "Contribution & Service",
        description:
            "You find purpose in giving back. Whether through volunteering, advocacy, or simply showing up for others, making a positive difference in your community is deeply meaningful.",
        techNote:
            "Technology can multiply your impact — amplifying causes and enabling collaboration at scale. Channel screen time toward meaningful contribution, not mindless consumption.",
    },
    {
        Icon: SunIcon,
        name: "Tradition & Spirituality",
        description:
            "Your faith, heritage, and cultural roots ground you. Rituals, sacred practices, and the wisdom passed down through generations provide meaning that transcends the moment. You want to preserve and transmit what matters.",
        techNote:
            "Screen time that bleeds into mealtimes, worship, and family rituals quietly erodes what's sacred. Protect those spaces — keep technology in its place so tradition can breathe.",
    },
];

const steps: Step[] = [
    {
        number: "1",
        title: "Take the Quiz",
        description:
            "Discover which of the 10 values resonate most with you right now. It only takes about 5 minutes.",
    },
    {
        number: "2",
        title: "Sit with Your Results",
        description:
            "Notice what surprises you. Your top values reveal where alignment matters most — and where drift has quietly crept in.",
    },
    {
        number: "3",
        title: "Set One Boundary",
        description:
            "Identify one place where technology is pulling you away from a top value. Start there. One clear boundary is more powerful than ten vague intentions.",
    },
];

const techPlanPdf = "/images/Our Healthy Tech Plan Template.pdf";

const techPlanContents = [
    "Your top values and what they look like at home",
    "A weekly plan built around sleep, meals, movement, and connection",
    "Screen time limits, tech-free zones, and content choices",
    "Safety guidelines and agreements everyone signs",
    "A one-page Fridge Plan to post where everyone sees it",
];

export default function LearnPage() {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
    }, [hash]);

    function handlePrint() {
        const img = document.querySelector(
            ".screen-time-guidelines-printable img",
        ) as HTMLImageElement;
        if (!img) return;
        const win = window.open("", "_blank", "width=800,height=600");
        if (!win) return;
        win.document.write(`<!DOCTYPE html>
<html>
<head>
<style>
  @page { margin: 1cm; }
  body { margin: 0; }
  img { width: 100%; height: auto; display: block; }
</style>
</head>
<body>
<img src="${img.src}" onload="window.print(); window.close();" />
</body>
</html>`);
        win.document.close();
    }

    return (
        <div className="w-full">
            <Seo
                title="What Are Core Values? A Guide to Tech Balance | HTB"
                description="Learn what core values are, why they matter, explore the 10 core values, see age-based screen time guidelines from the WHO, CDC, and APA, and download a free healthy tech plan template."
                path="/learn"
            />
            {/* Section 1 — Hero */}
            <section className="bg-base-200 px-6 pt-22 pb-20">
                <div className="max-w-[720px] mx-auto">
                    <h1 className={`mb-5 ${pageHeading}`}>
                        What Are Core Values?
                    </h1>
                    <p className="mb-4 text-[clamp(1.25rem,2.6vw,1.5rem)] font-medium leading-[1.45] text-ink text-pretty">
                        Core values are the fundamental principles that guide
                        your decisions, priorities, and sense of purpose.
                        They're not goals you chase — they're the person you
                        already are at your best.
                    </p>
                    <p className="text-lg leading-[1.65] text-ink-muted text-pretty">
                        When you know your values, technology becomes a tool you
                        choose rather than a current that carries you. This is
                        the foundation of everything at{" "}
                        <a
                            href="https://healthytechbalance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={textLink}
                        >
                            Healthy Tech Balance
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* Section 2 — Why Values Matter */}
            <section id="why-values-matter" className="bg-white px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        Why Knowing Your Values Matters
                    </h2>
                    <p className={sectionIntro}>
                        Values aren't just feel-good language. They're a
                        practical operating system for your life.
                    </p>
                    <div className="grid gap-x-14 gap-y-9 mt-12 md:grid-cols-2">
                        {whyValues.map(({ Icon, title, description }) => (
                            <div
                                key={title}
                                className="grid grid-cols-[52px_1fr] items-start gap-[18px]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="grid place-items-center size-13 rounded-full bg-base-200 text-primary"
                                >
                                    <Icon className="size-[26px]" />
                                </span>
                                <div>
                                    <h3 className="mb-2 text-[21px] font-[650] tracking-[-0.015em] text-ink">
                                        {title}
                                    </h3>
                                    <p className="text-[17px] leading-[1.6] text-ink-muted text-pretty">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values & technology */}
            <section id="values-and-tech" className="bg-base-200 px-6 py-20">
                <div className="max-w-[680px] mx-auto">
                    <h2 className={`mb-5 ${sectionHeading}`}>
                        Values Guide Intentional Tech Use
                    </h2>
                    <p className={`mb-4.5 ${leadText}`}>
                        Technology is neutral — your values determine whether it
                        serves you or consumes you. The same smartphone can
                        connect a family across continents or silently fracture
                        one sitting in the same room.
                    </p>
                    <p className={`mb-6 ${bodyText}`}>
                        When your values are clear, every tech decision gets
                        easier: which apps deserve your attention, when screens
                        belong at the table, what your kids should see you doing
                        with your phone. You stop reacting and start choosing.
                    </p>
                    <a
                        href="https://healthytechbalance.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                    >
                        Learn how consulting at Healthy Tech Balance works
                        <ExternalArrow />
                    </a>
                </div>
            </section>

            <section id="core-values" className="bg-white px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        The 10 Core Values
                    </h2>
                    <p className={sectionIntro}>
                        These are the values measured in the quiz — and the lens
                        through which healthy tech balance is built.
                    </p>
                    <ul
                        aria-label="Jump to a value"
                        className="flex flex-wrap gap-2 mt-7"
                    >
                        {coreValues.map((value) => (
                            <li key={value.name}>
                                <a
                                    href={`#${valueSlug(value.name)}`}
                                    className="inline-flex px-3.5 py-1.5 rounded-full border-[1.5px] border-primary/40 text-sm font-semibold text-ink transition-colors duration-160 ease-gentle hover:border-primary hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
                                >
                                    {value.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10">
                        {coreValues.map(
                            ({ Icon, name, description, techNote }) => (
                                <article
                                    key={name}
                                    id={valueSlug(name)}
                                    className="grid gap-4 min-[900px]:grid-cols-[320px_1fr] min-[900px]:gap-12 py-8 border-t border-primary/30 scroll-mt-6"
                                >
                                    <div className="flex items-center gap-4 self-start">
                                        <span
                                            aria-hidden="true"
                                            className="grid place-items-center shrink-0 size-13 rounded-full bg-base-200 text-primary"
                                        >
                                            <Icon className="size-[26px]" />
                                        </span>
                                        <h3 className="text-[22px] font-bold leading-[1.2] tracking-[-0.015em] text-ink">
                                            {name}
                                        </h3>
                                    </div>
                                    <div className="grid gap-4">
                                        <p className="text-[17px] leading-[1.6] text-ink-muted text-pretty">
                                            {description}
                                        </p>
                                        <div className="px-[18px] py-4 rounded-2xl bg-base-200">
                                            <p className="mb-1 text-sm font-[650] text-ink">
                                                In tech terms
                                            </p>
                                            <p className="text-base leading-[1.55] text-ink-soft text-pretty">
                                                {techNote}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* Screen time guidelines */}
            <section
                id="screen-time-guidelines"
                className="bg-base-200 px-6 py-20"
            >
                <div className="max-w-[880px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        Screen Time Guidelines
                    </h2>
                    <p className={`mb-10 ${sectionIntro}`}>
                        Age-appropriate recommendations from the WHO, CDC, and
                        APA — a practical reference for every family.
                    </p>
                    <div className="screen-time-guidelines-printable">
                        <img
                            src="/images/Screen Time Guidelines.png"
                            alt="Screen Time Guidelines chart showing recommended daily screen time by age group"
                            width={1056}
                            height={816}
                            loading="lazy"
                            className="block w-full h-auto rounded-2xl shadow-photo"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2.5 mt-6 print:hidden">
                        <a
                            href="/images/Screen Time Guidelines.png"
                            download="Screen Time Guidelines.png"
                            className={pillLink}
                        >
                            <ArrowDownTrayIcon
                                aria-hidden="true"
                                className="size-4 text-primary"
                            />
                            Free Download
                        </a>
                        <button
                            type="button"
                            onClick={handlePrint}
                            className={pillLink}
                        >
                            <PrinterIcon
                                aria-hidden="true"
                                className="size-4 text-primary"
                            />
                            Print
                        </button>
                    </div>
                </div>
            </section>

            {/* Healthy tech plan template */}
            <section
                id="healthy-tech-plan"
                aria-labelledby="healthy-tech-plan-heading"
                className="bg-white px-6 py-20"
            >
                <div className="max-w-[880px] mx-auto">
                    <h2
                        id="healthy-tech-plan-heading"
                        className={`mb-3 ${sectionHeading}`}
                    >
                        Our Healthy Tech Plan
                    </h2>
                    <p className={`mb-10 ${sectionIntro}`}>
                        A free, values-first template for you, your partner, or
                        your whole family. Ten guided steps help you decide how
                        technology will serve your physical, mental, and
                        spiritual health at home.
                    </p>
                    <div className="grid items-start gap-8 md:grid-cols-[280px_1fr] md:gap-12">
                        <img
                            src="/images/healthy-tech-plan-cover.jpg"
                            alt="Cover page of the Our Healthy Tech Plan template"
                            width={800}
                            height={1035}
                            loading="lazy"
                            className="block w-full max-w-[280px] h-auto rounded-2xl border border-primary/15 shadow-photo"
                        />
                        <div>
                            <h3 className="mb-3 text-[21px] font-[650] tracking-[-0.015em] text-ink">
                                What's inside
                            </h3>
                            <ul className="grid gap-2.5 mb-8 pl-5 list-disc marker:text-primary">
                                {techPlanContents.map((item) => (
                                    <li key={item} className={bodyText}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <a
                                    href={techPlanPdf}
                                    download="Our Healthy Tech Plan.pdf"
                                    className={pillLink}
                                >
                                    <ArrowDownTrayIcon
                                        aria-hidden="true"
                                        className="size-4 text-primary"
                                    />
                                    Free Download
                                </a>
                                <a
                                    href={techPlanPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={pillLink}
                                >
                                    <PrinterIcon
                                        aria-hidden="true"
                                        className="size-4 text-primary"
                                    />
                                    Print
                                </a>
                                <span className="text-sm text-ink-muted">
                                    PDF · 10 pages
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to start */}
            <section id="how-to-start" className="bg-base-200 px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>How to Start</h2>
                    <p className={`mb-12 ${sectionIntro}`}>
                        Knowing your values is one thing. Honoring them is
                        another. Here's where to begin.
                    </p>
                    <StepPath steps={steps} />
                </div>
            </section>

            <QuizCallout heading="Ready to Discover Your Values?">
                The quiz takes about 5 minutes. You can take it for yourself, or
                as a whole family. If you have a teenager, have them take it too
                — comparing results opens powerful conversations.
            </QuizCallout>
        </div>
    );
}

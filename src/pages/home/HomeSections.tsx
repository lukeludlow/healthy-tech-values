import { Link } from "react-router";
import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import QuizCallout from "@/components/ui/QuizCallout.tsx";
import StepPath, { type Step } from "@/components/ui/StepPath.tsx";
import {
    bodyText,
    leadText,
    pillLink,
    sectionHeading,
    sectionIntro,
    textLink,
} from "@/components/ui/styles.ts";

const steps: Step[] = [
    {
        number: "1",
        title: "Distill Your Values",
        description:
            "Get clear on what matters most to you and your family. Everything else flows from this.",
    },
    {
        number: "2",
        title: "Set Aligned Goals",
        description:
            "Create goals that reflect those values — not the algorithm's priorities.",
    },
    {
        number: "3",
        title: "Use Tech Intentionally",
        description:
            "Let your values guide how and when technology serves you, not the other way around.",
    },
];

export default function HomeSections() {
    return (
        <>
            {/* Families in crisis */}
            <section className="bg-white px-6 py-20">
                <div className="max-w-[680px] mx-auto">
                    <h2 className={`mb-5 ${sectionHeading}`}>
                        When It Feels Like You're Losing Them
                    </h2>
                    <p className={`mb-4.5 ${leadText}`}>
                        If someone in your home — a child, teenager, or adult —
                        is so consumed by screens that they are sacrificing
                        relationship connections and personal development, it's
                        time for a reboot.
                    </p>
                    <p className={`mb-8 ${bodyText}`}>
                        This isn't about tips and tricks. It's about tackling
                        the roots: avoidance, dependency, and the deeper
                        patterns that keep people disconnected. I have
                        experience working with individuals and families through
                        crisis and trauma, and I'm here to help.
                    </p>
                    <a
                        href="https://healthytechbalance.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillLink}
                    >
                        Work with me
                        <ExternalArrow />
                    </a>
                </div>
            </section>

            {/* Three-step process */}
            <section className="bg-base-200 px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        A <span className="whitespace-nowrap">Three-Step</span>{" "}
                        Approach
                    </h2>
                    <p className={`mb-12 ${sectionIntro}`}>
                        Living in healthy balance with technology is a process,
                        not a quick fix.
                    </p>
                    <StepPath steps={steps} />
                </div>
            </section>

            {/* Accessible resources */}
            <section className="bg-white px-6 py-20">
                <div className="max-w-[680px] mx-auto mb-12">
                    <h2 className={`mb-4 ${sectionHeading}`}>
                        Helpful Resources, Easily Accessible
                    </h2>
                    <p className={`mb-5 ${bodyText}`}>
                        As a parent, I know what it feels like to be overwhelmed
                        and not know where to turn. That's why I'm committed to
                        offering resources that are genuinely helpful and easily
                        accessible. Because it's what I needed, and every family
                        deserves a real starting point.
                    </p>
                    <a
                        href="https://healthytechbalance.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={textLink}
                    >
                        Learn more about consulting at Healthy Tech Balance
                        <ExternalArrow />
                    </a>
                </div>
                <figure className="max-w-[880px] mx-auto">
                    <img
                        src="/images/Screen Time Guidelines.png"
                        alt="Screen Time Guidelines chart showing recommended daily screen time by age group"
                        width={1056}
                        height={816}
                        loading="lazy"
                        className="block w-full h-auto rounded-2xl shadow-photo"
                    />
                    <figcaption className="flex flex-wrap justify-between gap-x-6 gap-y-3 mt-4 text-[15px] text-ink-muted">
                        <span>
                            Recommended daily screen time by age, from WHO, CDC,
                            AAP and APA.
                        </span>
                        <Link
                            to="/learn#screen-time-guidelines"
                            className={textLink}
                        >
                            Printable download
                        </Link>
                    </figcaption>
                </figure>
                <div className="grid justify-items-start gap-4 max-w-[680px] mx-auto mt-14 p-7 rounded-[20px] bg-base-200">
                    <h3 className="text-[22px] font-[650] tracking-[-0.015em] text-ink">
                        Resource Library
                    </h3>
                    <p className={bodyText}>
                        Orgs, articles, books, podcasts, and documentaries
                        curated to help every family navigate technology with
                        intention.
                    </p>
                    <Link to="/resources" className={pillLink}>
                        Browse resources
                    </Link>
                </div>
            </section>

            <QuizCallout
                heading={
                    <>
                        Start with{" "}
                        <span className="whitespace-nowrap">Step 1:</span> The
                        Core Values Quiz
                    </>
                }
            >
                Living in healthy balance with technology begins with getting
                clear on your values. You can take this quiz for yourself — or
                as a whole family. If you have a teenager, have them take it
                too. In the teen years, people begin developing their own
                values, and comparing results can open up powerful
                conversations.
            </QuizCallout>
        </>
    );
}

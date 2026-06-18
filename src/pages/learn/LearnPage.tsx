import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";
import { FaDownload, FaPrint } from "react-icons/fa";
import Seo from "@/components/seo/Seo.tsx";

const whyValues = [
    {
        icon: "🧭",
        title: "Clarity & Direction",
        description:
            "Values act as a compass when life feels uncertain. When you know what you stand for, decisions become clearer and less exhausting.",
    },
    {
        icon: "✅",
        title: "Aligned Decisions",
        description:
            "They help you say yes to what matters and no to what doesn't. Every boundary you set becomes easier when it's rooted in something real.",
    },
    {
        icon: "🤝",
        title: "Stronger Relationships",
        description:
            "Living authentically by your values builds trust. People around you — especially your kids — sense the difference between words and lived convictions.",
    },
    {
        icon: "🌟",
        title: "Life Satisfaction",
        description:
            "Research consistently shows that people who live in alignment with their core values report higher fulfillment and resilience in hard seasons.",
    },
];

const coreValues = [
    {
        emoji: "🛡️",
        name: "Stability & Security",
        description:
            "You find peace in predictability. Safety, routine, and financial security aren't just preferences — they're foundational to how you thrive. You plan ahead so that the people who depend on you can count on you.",
        techNote:
            "Technology should protect your family, not expose it. From digital privacy settings to screen-time guardrails, honoring this value means building a stable, secure digital environment at home.",
    },
    {
        emoji: "🌿",
        name: "Health & Harmony",
        description:
            "Wellbeing — physical, emotional, and relational — is your priority. Balance and a calm household matter deeply to you. When your body and environment are in order, everything else flows more naturally.",
        techNote:
            "Devices that disrupt sleep or amplify stress work against this value. Protecting your calm means choosing when and how technology enters your space.",
    },
    {
        emoji: "🏆",
        name: "Achievement & Influence",
        description:
            "You're motivated by excellence, recognition, and meaningful impact. You want to reach your potential and earn respect by doing hard things well. Goals and milestones energize you.",
        techNote:
            "Social media comparison and passive scrolling steal hours from real progress. Use technology as a lever for genuine achievement — not a substitute for it.",
    },
    {
        emoji: "📚",
        name: "Growth & Mastery",
        description:
            "Learning is core to who you are. Whether it's developing a skill, deepening expertise, or pursuing wisdom, you believe in continuous improvement. You want your mind sharpened, not dulled.",
        techNote:
            "The internet holds extraordinary learning resources — and extraordinary distractions. Protect deep focus time and use educational platforms with intention.",
    },
    {
        emoji: "🧭",
        name: "Adventure & Exploration",
        description:
            "You're drawn to novelty, discovery, and the thrill of new experiences. Routine can feel like a cage. You want life to feel expansive, energized by trying things most people wouldn't dare.",
        techNote:
            "Technology can unlock the world — or keep you endlessly scrolling a simulation of it. Use it to plan and connect you to real experiences, not replace them.",
    },
    {
        emoji: "❤️",
        name: "Connection & Love",
        description:
            "Relationships are at the center of what makes life meaningful to you. Empathy, intimacy, and belonging aren't just nice to have — they're what you live for. You show up for the people who matter.",
        techNote:
            "Devices at the dinner table and midnight phone checks chip away at the connection you value most. Use technology to deepen relationships — not interrupt them.",
    },
    {
        emoji: "⚖️",
        name: "Integrity & Ethics",
        description:
            "You hold yourself to a high standard of honesty, fairness, and responsibility. You want your actions to align with your principles, and you model that for those around you. Character counts more than convenience.",
        techNote:
            "Practice digital citizenship — be as honest and thoughtful online as you are in person. The integrity you model offline shapes how your family shows up online.",
    },
    {
        emoji: "🗽",
        name: "Independence & Freedom",
        description:
            "Autonomy is non-negotiable. You want to make your own choices, think for yourself, and resist becoming dependent on people or systems that don't have your best interests at heart. Privacy matters to you.",
        techNote:
            "Algorithms and notification loops are engineered to reduce your independence. Protect your privacy, limit data exposure, and stay in control of your own attention.",
    },
    {
        emoji: "🤝",
        name: "Contribution & Service",
        description:
            "You find purpose in giving back. Whether through volunteering, advocacy, or simply showing up for others, making a positive difference in your community is deeply meaningful.",
        techNote:
            "Technology can multiply your impact — amplifying causes and enabling collaboration at scale. Channel screen time toward meaningful contribution, not mindless consumption.",
    },
    {
        emoji: "🕊️",
        name: "Tradition & Spirituality",
        description:
            "Your faith, heritage, and cultural roots ground you. Rituals, sacred practices, and the wisdom passed down through generations provide meaning that transcends the moment. You want to preserve and transmit what matters.",
        techNote:
            "Screen time that bleeds into mealtimes, worship, and family rituals quietly erodes what's sacred. Protect those spaces — keep technology in its place so tradition can breathe.",
    },
];

const steps = [
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

export default function LearnPage() {
    const navigate = useNavigate();
    const { hash } = useLocation();
    const [isQuizInProgress, setIsQuizInProgress] = useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    useEffect(() => {
        if (!hash) return;
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
    }, [hash]);

    function handlePrint() {
        const img = document.querySelector(
            ".screen-time-guidelines-printable img"
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

    function handleStartQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }

    return (
        <div className="w-full">
            <Seo
                title="What Are Core Values? A Guide to Tech Balance | HTB"
                description="Learn what core values are, why they matter, explore the 10 core values, and see age-based screen time guidelines from the WHO, CDC, and APA."
                path="/learn"
            />
            {/* Section 1 — Hero */}
            <section className="bg-base-200 py-20 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                        What Are Core Values?
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Core values are the fundamental principles that guide your decisions, priorities, and sense of purpose. They're not goals you chase — they're the person you already are at your best.
                    </p>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        When you know your values, technology becomes a tool you choose rather than a current that carries you. This is the foundation of everything at{" "}
                        <a
                            href="https://healthytechbalance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Healthy Tech Balance
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* Section 2 — Why Values Matter */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-3">
                        Why Knowing Your Values Matters
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        Values aren't just feel-good language. They're a practical operating system for your life.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whyValues.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col p-6 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <span className="text-3xl mb-3">{item.icon}</span>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 — Values & Technology Bridge */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Values Guide Intentional Tech Use
                    </h2>
                    <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                        Technology is neutral — your values determine whether it serves you or consumes you. The same smartphone can connect a family across continents or silently fracture one sitting in the same room.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        When your values are clear, every tech decision gets easier: which apps deserve your attention, when screens belong at the table, what your kids should see you doing with your phone. You stop reacting and start choosing.
                    </p>
                    <a
                        href="https://healthytechbalance.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                    >
                        Learn how consulting at Healthy Tech Balance works →
                    </a>
                </div>
            </section>

            {/* Section 4 — The 10 Core Values */}
            <section id="core-values" className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-3">
                        The 10 Core Values
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        These are the values measured in the quiz — and the lens through which healthy tech balance is built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreValues.map((value) => (
                            <div
                                key={value.name}
                                className="flex flex-col p-6 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{value.emoji}</span>
                                    <h3 className="text-lg font-bold text-primary">
                                        {value.name}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {value.description}
                                </p>
                                <div className="mt-auto rounded-xl bg-base-200 px-4 py-3">
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                                        In tech terms
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {value.techNote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5 — Screen Time Guidelines */}
            <section id="screen-time-guidelines" className="bg-base-200 py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3">
                        Screen Time Guidelines
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Age-appropriate recommendations from the WHO, CDC, and APA — a practical reference for every family.
                    </p>
                    <div className="screen-time-guidelines-printable">
                        <img
                            src="/images/Screen Time Guidelines.png"
                            alt="Screen Time Guidelines chart showing recommended daily screen time by age group"
                            className="w-full rounded-2xl shadow-md mb-8"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 print:hidden">
                        <a
                            href="/images/Screen Time Guidelines.png"
                            download="Screen Time Guidelines.png"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                            <FaDownload />
                            Download
                        </a>
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                        >
                            <FaPrint />
                            Print
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 6 — How to Start */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3">How to Start</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Knowing your values is one thing. Honoring them is another. Here's where to begin.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm"
                            >
                                <span className="text-5xl font-bold text-primary mb-4">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7 — Quiz CTA */}
            <section className="bg-primary py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Discover Your Values?
                    </h2>
                    <p className="text-lg text-primary-content mb-10 leading-relaxed">
                        The quiz takes about 5 minutes. You can take it for yourself, or as a whole family. If you have a teenager, have them take it too — comparing results opens powerful conversations.
                    </p>
                    <Button
                        color="white"
                        className="px-8 py-3 text-base"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Core Values Quiz
                    </Button>
                </div>
            </section>
        </div>
    );
}

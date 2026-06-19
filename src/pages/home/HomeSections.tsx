import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

const steps = [
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
    const navigate = useNavigate();
    const [isQuizInProgress, setIsQuizInProgress] =
        useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    function handleStartQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }

    return (
        <>
            {/* Section 3 — Families in Crisis */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        When It Feels Like You're Losing Them
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        If someone in your home — a child, teenager, or adult —
                        is so consumed by their device that they're missing real
                        life, missing family connections, and missing personal
                        development, it's time for something different.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
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
                        className="text-primary font-medium hover:underline"
                    >
                        Work with me →
                    </a>
                </div>
            </section>

            {/* Section 1 — 3-Step Process */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3">
                        A Three-Step Approach
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Living in healthy balance with technology is a process,
                        not a quick fix.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <span className="text-5xl font-bold text-primary mb-4">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-semibold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2 — Accessible Resources / Mission */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Helpful Resources, Easily Accessible
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
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
                        className="text-primary font-medium hover:underline"
                    >
                        Learn more about consulting at Healthy Tech Balance →
                    </a>
                    <div className="mt-10 max-w-2xl mx-auto text-left">
                        <img
                            src="/images/Screen Time Guidelines.png"
                            alt="Screen Time Guidelines chart showing recommended daily screen time by age group"
                            className="w-full rounded-2xl shadow-md"
                        />
                        <a
                            href="/learn#screen-time-guidelines"
                            className="block text-center text-lg font-bold text-gray-900 mt-4 mb-10 hover:text-primary"
                        >
                            Printable Download
                        </a>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold mb-3">
                                Resource Library
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Orgs, articles, books, podcasts, and
                                documentaries curated to help every family
                                navigate technology with intention.
                            </p>
                            <Button
                                href="/resources"
                                color="primary"
                                className="w-full justify-center text-sm"
                            >
                                Browse Resources →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 — Core Values Quiz CTA */}
            <section className="bg-primary py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Start with Step 1: The Core Values Quiz
                    </h2>
                    <p className="text-lg text-primary-content mb-10">
                        Living in healthy balance with technology begins with
                        getting clear on your values. You can take this quiz for
                        yourself — or as a whole family. If you have a teenager,
                        have them take it too. In the teen years, people begin
                        developing their own values, and comparing results can
                        open up powerful conversations.
                    </p>
                    <Button
                        color="white"
                        className="px-8 py-3 text-base border-white text-white hover:bg-white hover:text-primary"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Core Values
                        Quiz
                    </Button>
                </div>
            </section>
        </>
    );
}

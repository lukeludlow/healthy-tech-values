import type { ReactNode } from "react";
import { useStartQuiz } from "@/state/useStartQuiz.ts";
import { onGreenButton } from "@/components/ui/styles.ts";

/**
 * Full-width green call to action that starts (or resumes) the quiz.
 * Body copy is 19px bold so white-on-green reads as large text.
 */
export default function QuizCallout({
    heading,
    children,
}: {
    heading: ReactNode;
    children: ReactNode;
}) {
    const { isQuizInProgress, startQuiz } = useStartQuiz();

    return (
        <section className="bg-primary px-6 py-24">
            <div className="grid justify-items-start gap-7 max-w-[720px] mx-auto">
                <h2 className="text-[clamp(2.25rem,5.5vw,3.5rem)] font-[750] leading-[1.03] tracking-[-0.03em] text-white text-balance">
                    {heading}
                </h2>
                <p className="max-w-[58ch] text-[19px] font-bold leading-[1.55] text-white text-pretty">
                    {children}
                </p>
                <button
                    type="button"
                    onClick={startQuiz}
                    className={`mt-1 active:translate-y-px ${onGreenButton}`}
                >
                    {isQuizInProgress ? "Continue" : "Take"} the Core Values
                    Quiz
                </button>
            </div>
        </section>
    );
}

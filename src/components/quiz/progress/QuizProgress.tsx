import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";

export default function QuizProgress() {
    const [currentQuestionIndex] = useAtom(currentQuestionIndexAtom);
    const [selectedChoices] = useAtom(answersAtom);

    const answeredFlags = QUESTION_DATA.questions.map((q) =>
        q.options.some((opt) =>
            selectedChoices.some((c) => c.text === opt.text),
        ),
    );
    const answeredCount = answeredFlags.filter(Boolean).length;
    const total = QUESTION_DATA.questions.length;

    return (
        <div className="grid gap-2 mb-7">
            <p className="text-sm font-semibold tabular-nums text-ink-muted">
                {answeredCount} of {total} questions
            </p>
            <div
                role="progressbar"
                aria-label="Questions answered"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={answeredCount}
                className="grid gap-[3px]"
                style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}
            >
                {answeredFlags.map((done, i) => (
                    <span
                        key={i}
                        className={`h-1.5 rounded-full transition-colors duration-300 ${
                            done ? "bg-primary" : "bg-primary/18"
                        } ${
                            i === currentQuestionIndex
                                ? "shadow-[0_0_0_1.5px_var(--color-ink)]"
                                : ""
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

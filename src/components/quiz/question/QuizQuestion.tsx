import Scenario from "@/components/quiz/question/Scenario.tsx";
import AnswerOptions from "@/components/quiz/question/AnswerOptions.tsx";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router";
import { focusRing, primaryButton } from "@/components/ui/styles.ts";

export default function QuizQuestion() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
        currentQuestionIndexAtom,
    );
    const [selectedChoices] = useAtom(answersAtom);
    const navigate = useNavigate();

    const currentQuestion = QUESTION_DATA.questions[currentQuestionIndex];
    const isCurrentQuestionAnswered = currentQuestion?.options.some((opt) =>
        selectedChoices.some((c) => c.text === opt.text),
    );
    const isLastQuestion =
        currentQuestionIndex === QUESTION_DATA.questions.length - 1;

    function handleNext() {
        if (isLastQuestion) {
            navigate("/results");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    function handleBack() {
        if (currentQuestionIndex === 0) {
            navigate("/");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    return (
        <div>
            <Scenario />
            <p className="mt-3 text-[15px] leading-[1.55] text-ink-muted">
                {QUESTION_DATA.instructions}
            </p>
            <AnswerOptions />
            <div className="flex items-center justify-between gap-3 mt-7">
                <button
                    type="button"
                    onClick={handleBack}
                    className={`inline-flex items-center gap-1 min-h-11 py-2.5 pl-2 pr-3.5 rounded-full text-base font-semibold text-ink cursor-pointer hover:bg-base-200 ${focusRing}`}
                >
                    <ChevronLeftIcon
                        aria-hidden="true"
                        className="size-[18px] text-primary"
                    />
                    Back
                </button>
                <button
                    type="button"
                    disabled={!isCurrentQuestionAnswered}
                    onClick={handleNext}
                    className={primaryButton}
                >
                    {isLastQuestion ? "See My Results" : "Next Question"}
                    <ChevronRightIcon
                        aria-hidden="true"
                        className="size-[18px]"
                    />
                </button>
            </div>
        </div>
    );
}

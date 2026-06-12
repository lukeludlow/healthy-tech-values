import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

export default function ProgressFooter() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
        currentQuestionIndexAtom,
    );

    const [selectedChoices] = useAtom(answersAtom);

    const progressValue = useMemo(
        () =>
            QUESTION_DATA.questions.filter((q) =>
                q.options.some((opt) =>
                    selectedChoices.some((c) => c.text === opt.text),
                ),
            ).length,
        [selectedChoices],
    );
    const progressMax = QUESTION_DATA.questions.length;
    const progressPercentage = progressValue / progressMax;

    const hasNextQuestion = currentQuestionIndex < progressMax;

    const isQuestionAnswered = useMemo(
        () =>
            QUESTION_DATA.questions[currentQuestionIndex]?.options.some((opt) =>
                selectedChoices.some((choice) => choice.text === opt.text),
            ),
        [currentQuestionIndex, selectedChoices],
    );

    return (
        <div className="flex flex-row w-full items-center justify-center gap-2 pb-21 px-2">
            <div className="flex flex-row w-full max-w-xl items-center gap-2">
                <div className="flex flex-col w-full gap-1">
                    <p className="text-sm text-primary/70 font-medium">
                        {progressValue} of {progressMax} questions
                    </p>
                    <div className="w-full h-2 rounded-full bg-base-200 overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{
                                width: `${Math.round(progressPercentage * 100)}%`,
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-row">
                    <Button
                        color="primary"
                        className="!rounded-r-none items-center"
                        onClick={handlePreviousQuestion}
                    >
                        <FaAngleLeft />
                        Back
                    </Button>
                    <Button
                        color="primary"
                        className="!rounded-l-none items-center"
                        onClick={handleNextQuestion}
                        disabled={!hasNextQuestion || !isQuestionAnswered}
                    >
                        Next
                        <FaAngleRight />
                    </Button>
                </div>
            </div>
        </div>
    );

    function handlePreviousQuestion() {
        if (currentQuestionIndex === 0) {
            navigate("/");
            return;
        }
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    function handleNextQuestion() {
        if (currentQuestionIndex === progressMax - 1) {
            navigate("/results");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }
}

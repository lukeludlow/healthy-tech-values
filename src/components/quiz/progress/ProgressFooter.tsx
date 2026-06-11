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

    const progressValue = selectedChoices.length;
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
        <div className={"flex flex-row w-full items-top gap-2 pb-21 px-2"}>
            <div className={"flex flex-col w-full"}>
                <p>
                    Progress: {Math.round(progressPercentage * 100)}% (
                    {progressValue}/{progressMax})
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
            <div className={"flex flex-row"}>
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
    );

    function handlePreviousQuestion() {
        if (currentQuestionIndex === 0) {
            navigate("/");
            return;
        }
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    function handleNextQuestion() {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
}

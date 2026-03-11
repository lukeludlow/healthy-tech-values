import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useMemo } from "react";

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
                <progress
                    className={"progress progress-primary"}
                    value={progressValue}
                    max={progressMax}
                />
            </div>
            <div className={"join"}>
                <button
                    className={"join-item btn btn-primary btn-outline"}
                    onClick={handlePreviousQuestion}
                >
                    <FaAngleLeft />
                    Back
                </button>
                <button
                    className={"join-item btn btn-primary"}
                    onClick={handleNextQuestion}
                    disabled={!hasNextQuestion || !isQuestionAnswered}
                >
                    Next
                    <FaAngleRight />
                </button>
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

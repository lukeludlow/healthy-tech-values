import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    selectedChoicesAtom,
} from "@/state/state.ts";
import { QUESTION_DATA } from "@/components/quiz/question/questionData.ts";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function ProgressFooter() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
        currentQuestionIndexAtom,
    );

    const [selectedChoices] = useAtom(selectedChoicesAtom);

    const progressValue = selectedChoices.length;
    const progressMax = QUESTION_DATA.flatMap(
        (question) => question.choices,
    ).length;
    const progressPercentage = progressValue / progressMax;

    return (
        <div className={"flex flex-row w-full items-top gap-2"}>
            <div className={"flex flex-col w-full"}>
                <p>Progress: {Math.round(progressPercentage * 100)}%</p>
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
                    Prev
                </button>
                <button
                    className={"join-item btn btn-primary"}
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === QUESTION_DATA.length}
                >
                    Next
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );

    function handlePreviousQuestion() {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    function handleNextQuestion() {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
}

import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import { useNavigate } from "react-router";

export default function StartQuizCard() {
    const navigate = useNavigate();
    const [isQuizInProgress, setIsQuizInProgress] =
        useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    return (
        <div
            className={
                "card flex flex-col gap-1 items-center bg-base-200 shadow-sm m-3 p-3"
            }
        >
            <div className={"card-title"}>Core Values Assessment</div>
            <div className={"card-body"}>
                <div>
                    You're not lost, just ready for clarity. Discover your core
                    values now.
                </div>
                <div>Are you ready to take the quiz?</div>
                <div className={"card-actions justify-end"}>
                    <button
                        className={"btn"}
                        onClick={() => navigate("/learn")}
                    >
                        Learn More
                    </button>
                    <button
                        className={"btn btn-primary"}
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Start"} Quiz
                    </button>
                </div>
            </div>
        </div>
    );

    function handleStartQuiz() {
        setIsQuizInProgress(true);
        setCurrentQuestionIndex(0);
    }
}

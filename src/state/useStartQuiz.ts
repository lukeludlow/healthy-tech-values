import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";

/**
 * Starts the quiz from the first question, or resumes it if one is
 * already in progress, then navigates to /quiz.
 */
export function useStartQuiz() {
    const navigate = useNavigate();
    const [isQuizInProgress, setIsQuizInProgress] =
        useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    function startQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }

    return { isQuizInProgress, startQuiz };
}

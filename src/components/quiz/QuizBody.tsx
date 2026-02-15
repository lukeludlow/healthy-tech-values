import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import StartQuizCard from "@/components/quiz/StartQuizCard.tsx";
import QuizQuestion from "@/components/quiz/question/QuizQuestion.tsx";
import { useAtom, useAtomValue } from "jotai";

export default function QuizBody() {
    const isQuizInProgress = useAtomValue(isQuizInProgressAtom);
    const [currentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    const shouldShowQuizStart = !isQuizInProgress || currentQuestionIndex < 0;

    return (
        <div>
            {shouldShowQuizStart ? (
                <div>
                    <StartQuizCard />
                </div>
            ) : (
                <div>
                    <QuizQuestion />
                </div>
            )}
        </div>
    );
}

import Scenario from "@/components/quiz/question/Scenario.tsx";
import Choices from "@/components/quiz/question/Choices.tsx";
import ProgressFooter from "@/components/quiz/progress/ProgressFooter.tsx";
import Results from "@/components/quiz/results/Results.tsx";
import { useAtom } from "jotai";
import { currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/components/quiz/question/questionData.ts";

export default function QuizQuestion() {
    const [currentQuestionIndex] = useAtom(currentQuestionIndexAtom);
    const shouldShowResults = currentQuestionIndex === QUESTION_DATA.length;
    return (
        <div className={"flex flex-col gap-2 p-3 md:px-5"}>
            {shouldShowResults ? (
                <div>
                    <Results />
                </div>
            ) : (
                <>
                    <Scenario />
                    <Choices />
                </>
            )}
            <ProgressFooter />
        </div>
    );
}

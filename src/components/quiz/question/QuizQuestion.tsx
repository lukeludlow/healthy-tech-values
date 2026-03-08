import Scenario from "@/components/quiz/question/Scenario.tsx";
import AnswerOptions from "@/components/quiz/question/AnswerOptions.tsx";
import Results from "@/components/quiz/results/Results.tsx";
import { useAtom } from "jotai";
import { currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";

export default function QuizQuestion() {
    const [currentQuestionIndex] = useAtom(currentQuestionIndexAtom);
    const shouldShowResults =
        currentQuestionIndex === QUESTION_DATA.questions.length;

    return (
        <div className={"flex flex-col gap-2 p-3 md:px-5"}>
            {shouldShowResults ? (
                <div>
                    <Results />
                </div>
            ) : (
                <>
                    <Scenario />
                    <AnswerOptions />
                    <div className={"italic mt-2 text-primary"}>
                        {QUESTION_DATA.instructions}
                    </div>
                </>
            )}
        </div>
    );
}

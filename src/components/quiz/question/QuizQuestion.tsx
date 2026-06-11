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
        <div className="flex flex-col gap-4 p-4 md:px-6 max-w-xl mx-auto w-full">
            {shouldShowResults ? (
                <div>
                    <Results />
                </div>
            ) : (
                <>
                    <Scenario />
                    <div className="italic text-sm text-primary/60 text-center">
                        {QUESTION_DATA.instructions}
                    </div>
                    <AnswerOptions />
                </>
            )}
        </div>
    );
}

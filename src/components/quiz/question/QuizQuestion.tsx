import Scenario from "@/components/quiz/question/Scenario.tsx";
import AnswerOptions from "@/components/quiz/question/AnswerOptions.tsx";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function QuizQuestion() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);
    const [selectedChoices] = useAtom(answersAtom);
    const navigate = useNavigate();

    const currentQuestion = QUESTION_DATA.questions[currentQuestionIndex];
    const isCurrentQuestionAnswered = currentQuestion?.options.some((opt) =>
        selectedChoices.some((c) => c.text === opt.text),
    );
    const isLastQuestion =
        currentQuestionIndex === QUESTION_DATA.questions.length - 1;

    function handleNext() {
        if (isLastQuestion) {
            navigate("/results");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    return (
        <div className="flex flex-col gap-4 p-4 md:px-6 max-w-xl mx-auto w-full">
            <Scenario />
            <div className="italic text-sm text-primary/60 text-center">
                {QUESTION_DATA.instructions}
            </div>
            <AnswerOptions />
            <Button
                color="primary"
                className="w-full mt-2"
                disabled={!isCurrentQuestionAnswered}
                onClick={handleNext}
            >
                {isLastQuestion ? "See My Results" : "Next Question"}
                <FaAngleRight />
            </Button>
        </div>
    );
}

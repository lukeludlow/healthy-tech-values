import { useAtom } from "jotai";
import { currentQuestionAtom } from "@/state/state.ts";
import AnswerOptionButton from "@/components/quiz/question/AnswerOptionButton.tsx";

export default function AnswerOptions() {
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <div className="grid gap-2.5 mt-7">
            {currentQuestion.options.map((option) => (
                <AnswerOptionButton key={option.text} option={option} />
            ))}
        </div>
    );
}

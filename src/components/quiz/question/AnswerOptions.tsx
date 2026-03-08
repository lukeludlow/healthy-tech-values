import { useAtom } from "jotai";
import { currentQuestionAtom } from "@/state/state.ts";
import AnswerOptionButton from "@/components/quiz/question/AnswerOptionButton.tsx";

export default function AnswerOptions() {
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <div>
            <div className={"flex flex-col gap-2"}>
                {currentQuestion.options.map((option) => (
                    <div key={JSON.stringify(option)}>
                        <AnswerOptionButton option={option} />
                    </div>
                ))}
            </div>
        </div>
    );
}

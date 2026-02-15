import { useAtom } from "jotai";
import { currentQuestionAtom } from "@/state/state.ts";
import ChoiceButton from "@/components/quiz/question/ChoiceButton.tsx";

export default function Choices() {
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <div>
            <p className={"text-center text-sm"}>
                Rank your answers in order, putting what is most important to
                you first.
            </p>
            <div className={"flex flex-col gap-2"}>
                {currentQuestion.choices.map((choice) => (
                    <div className={""} key={JSON.stringify(choice)}>
                        <ChoiceButton choice={choice} />
                    </div>
                ))}
            </div>
        </div>
    );
}

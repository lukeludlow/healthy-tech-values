import { useAtom } from "jotai";
import { currentQuestionAtom } from "@/state/state.ts";

export default function Scenario() {
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"text-3xl font-bold text-center text-primary"}>
                {currentQuestion.question}
            </div>
        </div>
    );
}

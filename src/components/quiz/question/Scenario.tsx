import { useAtom } from "jotai";
import {
    currentQuestionAtom,
    currentQuestionIndexAtom,
} from "@/state/state.ts";

export default function Scenario() {
    const [currentQuestionIndex] = useAtom(currentQuestionIndexAtom);
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"text-4xl font-bold text-center text-primary"}>
                Question {currentQuestionIndex + 1}
            </div>
            <div className={"text-3xl font-bold text-center text-primary"}>
                {currentQuestion.scenario.title}
            </div>
            <div className={"italic"}>{currentQuestion.scenario.body}</div>
        </div>
    );
}

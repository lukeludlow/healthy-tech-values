import { useAtom } from "jotai";
import { currentQuestionAtom } from "@/state/state.ts";

export default function Scenario() {
    const [currentQuestion] = useAtom(currentQuestionAtom);

    return (
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-[750] leading-[1.1] tracking-[-0.03em] text-ink text-balance">
            {currentQuestion.question}
        </h1>
    );
}

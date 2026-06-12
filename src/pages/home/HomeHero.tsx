import { useNavigate } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";
import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

export default function HomeHero() {
    const navigate = useNavigate();
    const logoIcon = Healthy_tech_social_icon;
    const [isQuizInProgress, setIsQuizInProgress] =
        useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    return (
        <div className="flex items-center justify-center bg-base-200 min-h-[calc(80vh-4rem)]">
            <div className="text-center flex flex-col items-center">
                <div className="max-w-md">
                    <div className={"flex justify-center mb-5"}>
                        <img
                            src={logoIcon}
                            alt="Healthy Values Logo"
                            className="max-w-sm w-34 rounded-lg shadow-2xl"
                        />
                    </div>
                    <h1 className="text-4xl font-bold">Core Values Quiz</h1>
                    <p className="py-6 text-xl">
                        Taming your tech starts with getting clear on what you
                        value in life.
                    </p>
                    <Button
                        color="primary"
                        className="px-8 py-3 text-base"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Quiz
                    </Button>
                </div>
            </div>
        </div>
    );

    function handleStartQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }
}

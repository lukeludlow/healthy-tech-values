import { useNavigate } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";
import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";

export default function HomeHero() {
    const navigate = useNavigate();
    const logoIcon = Healthy_tech_social_icon;
    const [isQuizInProgress, setIsQuizInProgress] =
        useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    return (
        <div className="hero bg-base-200 h-full pb-21">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w-md">
                    <div className={"flex justify-center mb-5"}>
                        <img
                            src={logoIcon}
                            alt="Healthy Values Logo"
                            className="max-w-sm w-34 rounded-lg shadow-2xl"
                        />
                    </div>
                    <h1 className="text-4xl font-bold">Healthy Tech Values</h1>
                    <p className="py-6 text-xl">
                        Taming your tech starts with getting clear on what you
                        value in life.
                    </p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Quiz
                    </button>
                </div>
            </div>
        </div>
    );

    function handleStartQuiz() {
        setIsQuizInProgress(true);
        setCurrentQuestionIndex(0);
        navigate("/quiz");
    }
}

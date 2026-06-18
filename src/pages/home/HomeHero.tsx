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

    function handleStartQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }

    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background photo */}
            <img
                src="/images/htb-image-asset.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Green brand overlay */}
            <div className="absolute inset-0 bg-primary/40" />
            {/* Content */}
            <div className="relative z-10 text-center py-20 px-6 flex flex-col items-center">
                <h1 className="text-5xl font-bold text-white drop-shadow-md">
                    Healthy Tech Balance
                </h1>
                <img
                    src={logoIcon}
                    alt="Healthy Tech Balance logo"
                    className="h-20 w-20 rounded-xl shadow-2xl my-6 object-contain"
                />
                <p className="text-2xl font-semibold text-white drop-shadow-md max-w-lg">
                    Take back your relationships, your joy, and your life.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    <Button
                        color="primary"
                        className="px-8 py-3 text-base"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Quiz
                    </Button>
                    <Button
                        color={"white"}
                        href="/learn"
                        className="px-8 py-3 text-base text-white border-white hover:bg-white/10"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
}

import { Link } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";
import { useStartQuiz } from "@/state/useStartQuiz.ts";

const heroButton =
    "inline-flex items-center justify-center min-h-13 px-6.5 py-3 rounded-full border-2 border-white text-[19px] font-bold cursor-pointer transition-colors duration-180 ease-gentle focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white";

export default function HomeHero() {
    const { startQuiz } = useStartQuiz();

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
            {/* Content panel */}
            <div className="relative z-10 flex flex-col items-center w-[min(calc(100vw-32px),640px)] my-12 px-7 py-12 rounded-[28px] bg-primary text-center shadow-panel">
                <img
                    src={Healthy_tech_social_icon}
                    alt=""
                    className="size-16 mb-5 rounded-2xl shadow-[0_0_0_2px_rgb(255_255_255/0.85)]"
                />
                <h1 className="mb-3.5 text-[clamp(2.5rem,7vw,4rem)] font-[750] leading-[1.02] tracking-[-0.035em] text-white text-balance">
                    Healthy Tech Balance
                </h1>
                <p className="max-w-[24ch] mb-8 text-[clamp(1.5rem,3vw,1.75rem)] font-medium leading-[1.3] text-white text-balance">
                    Take back your relationships, your joy, and your life.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/learn"
                        className={`${heroButton} bg-transparent text-white hover:bg-white/12`}
                    >
                        Learn More
                    </Link>
                    <button
                        type="button"
                        onClick={startQuiz}
                        className={`${heroButton} bg-white text-ink hover:bg-base-200 hover:border-base-200`}
                    >
                        Start Here
                    </button>
                </div>
            </div>
        </div>
    );
}

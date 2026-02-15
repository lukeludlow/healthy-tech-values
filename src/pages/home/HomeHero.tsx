import { useNavigate } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";

export default function HomeHero() {
    const navigate = useNavigate();
    const logoIcon = Healthy_tech_social_icon;

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
                    <h1 className="text-5xl font-bold">Healthy Tech Values</h1>
                    <p className="py-6">
                        Are you ready to discover what your true values are?
                        Take a simple quiz to learn about your values and how to
                        honor them in healthy ways.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/quiz")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

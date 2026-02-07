import { useNavigate } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";

export default function Header() {
    const navigate = useNavigate();
    const logoIcon = Healthy_tech_social_icon;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-square"
                    >
                        <img
                            src={logoIcon}
                            alt="Healthy Values Logo"
                            className="h-8 w-8 object-contain rounded-lg"
                        />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <button
                                className={"btn btn-ghost"}
                                onClick={() => navigate("/")}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className={"btn btn-ghost"}
                                onClick={() => navigate("/about")}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className={"btn btn-ghost"}
                                onClick={() =>
                                    navigate("https://healthytechbalance.com")
                                }
                            >
                                Healthy Tech Balance
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex flex-row items-center rounded">
                <button
                    className="btn btn-ghost text-xl"
                    onClick={() => navigate("/")}
                >
                    Healthy Values
                </button>
            </div>
            <div>
                <button
                    className={"btn btn-ghost"}
                    onClick={() => navigate("/quiz")}
                >
                    Quiz
                </button>
            </div>
            <div>
                <button
                    className={"btn btn-ghost"}
                    onClick={() => navigate("/learn")}
                >
                    Learn
                </button>
            </div>
        </div>
    );
}

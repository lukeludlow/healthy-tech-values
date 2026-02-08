import HamburgerMenuSvg from "@/components/navbar/HamburgerMenuSvg.tsx";
import { useNavigate } from "react-router";

export default function HamburgerDropdown() {
    const navigate = useNavigate();

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-square"
            >
                <HamburgerMenuSvg />
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li>
                    <div className={"flex"}>
                        <button
                            className={"btn btn-ghost w-full"}
                            onClick={() => navigate("/quiz")}
                        >
                            Quiz
                        </button>
                    </div>
                </li>
                <li>
                    <div className={"flex"}>
                        <button
                            className={"btn btn-ghost w-full"}
                            onClick={() => navigate("/learn")}
                        >
                            Learn
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

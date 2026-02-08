import { useNavigate } from "react-router";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";

export default function HealthyTechBalanceButton() {
    const navigate = useNavigate();
    const logoIcon = Healthy_tech_social_icon;

    return (
        <div>
            <div
                className="btn btn-ghost btn-square"
                onClick={() => navigate("https://healthytechbalance.com")}
            >
                <img
                    src={logoIcon}
                    alt="Healthy Values Logo"
                    className="h-8 w-8 object-contain rounded-lg"
                />
            </div>
        </div>
    );
}

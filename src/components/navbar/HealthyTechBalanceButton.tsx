import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";
import { Link } from "@/components/catalyst-ui-kit/link.tsx";

export default function HealthyTechBalanceButton() {
    const logoIcon = Healthy_tech_social_icon;

    return (
        <Button plain className="p-2">
            <Link href={"https://healthytechbalance.com"}>
                <img
                    src={logoIcon}
                    alt="Healthy Values Logo"
                    className="h-8 w-8 object-contain rounded-lg"
                />
            </Link>
        </Button>
    );
}

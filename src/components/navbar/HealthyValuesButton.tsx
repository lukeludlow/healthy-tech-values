import { useNavigate } from "react-router";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";
import { Subheading } from "@/components/catalyst-ui-kit/heading.tsx";

export default function HealthyValuesButton() {
    const navigate = useNavigate();

    return (
        <Button
            plain
            className="text-xl font-medium shadow-md"
            onClick={() => navigate("/")}
        >
            <Subheading>Healthy Tech Balance</Subheading>
        </Button>
    );
}

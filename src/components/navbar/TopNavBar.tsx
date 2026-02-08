import HamburgerDropdown from "@/components/navbar/HamburgerDropdown.tsx";
import HealthyTechBalanceButton from "@/components/navbar/HealthyTechBalanceButton.tsx";
import HealthyValuesButton from "@/components/navbar/HealthyValuesButton.tsx";

export default function TopNavBar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className={"flex flex-row justify-between w-full"}>
                <div className="flex-none">
                    <HealthyTechBalanceButton />
                </div>
                <div className="flex flex-row items-center rounded">
                    <HealthyValuesButton />
                </div>
                <HamburgerDropdown />
            </div>
        </div>
    );
}

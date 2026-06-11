import HamburgerDropdown from "@/components/navbar/HamburgerDropdown.tsx";
import HealthyTechBalanceButton from "@/components/navbar/HealthyTechBalanceButton.tsx";
import HealthyValuesButton from "@/components/navbar/HealthyValuesButton.tsx";

export default function TopNavBar() {
    return (
        <div className="flex flex-row items-center justify-between w-full bg-base-100 shadow-sm px-4 min-h-16">
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

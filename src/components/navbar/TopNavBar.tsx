import HamburgerDropdown from "@/components/navbar/HamburgerDropdown.tsx";
import HealthyTechBalanceButton from "@/components/navbar/HealthyTechBalanceButton.tsx";
import HealthyValuesButton from "@/components/navbar/HealthyValuesButton.tsx";

export default function TopNavBar() {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full bg-base-100 shadow-sm px-4 min-h-16">
            <div className="flex-none">
                <HealthyTechBalanceButton />
            </div>
            <div className="flex justify-center">
                <HealthyValuesButton />
            </div>
            <div className="flex justify-end">
                <HamburgerDropdown />
            </div>
        </div>
    );
}

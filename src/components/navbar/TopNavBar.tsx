import { NavLink } from "react-router";
import HamburgerDropdown from "@/components/navbar/HamburgerDropdown.tsx";
import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import { focusRing } from "@/components/ui/styles.ts";
import Healthy_tech_social_icon from "@/assets/Healthy_tech_social_icon.webp";

const NAV_LINKS = [
    { to: "/quiz", label: "Quiz" },
    { to: "/results", label: "Results" },
    { to: "/learn", label: "Learn" },
    { to: "/resources", label: "Resources" },
];

const ease = "duration-160 ease-gentle";

export default function TopNavBar() {
    return (
        <div className="flex items-center gap-6 w-full min-h-16 px-4 bg-white border-b border-primary/20">
            <NavLink
                to="/"
                className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-[10px] text-[17px] font-[650] tracking-[-0.01em] text-ink ${focusRing}`}
            >
                <img
                    src={Healthy_tech_social_icon}
                    alt=""
                    className="size-8 rounded-lg"
                />
                Healthy Tech Balance
            </NavLink>
            <nav
                aria-label="Main"
                className="hidden lg:flex items-center gap-1 ml-auto"
            >
                {NAV_LINKS.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={`rounded-full px-3 py-2 text-[15px] font-medium text-ink-muted transition-colors ${ease} hover:bg-base-200 hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-primary aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[9px] ${focusRing}`}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
            <a
                href="https://healthytechbalance.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden lg:inline-flex items-center gap-1.5 ml-2 whitespace-nowrap px-4 py-2 rounded-full border-[1.5px] border-primary text-[15px] font-semibold text-ink transition-colors ${ease} hover:bg-base-200 ${focusRing}`}
            >
                Work with Jessica
                <ExternalArrow />
            </a>
            <div className="ml-auto lg:hidden">
                <HamburgerDropdown />
            </div>
        </div>
    );
}

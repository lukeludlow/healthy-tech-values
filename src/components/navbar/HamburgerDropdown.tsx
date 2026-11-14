import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import { focusRing } from "@/components/ui/styles.ts";

const links = [
    { to: "/", label: "Home" },
    { to: "/quiz", label: "Quiz" },
    { to: "/results", label: "Results" },
    { to: "/learn", label: "Learn" },
    { to: "/resources", label: "Resources" },
];

const itemClass =
    "flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-ink data-focus:bg-base-200 aria-[current=page]:font-semibold aria-[current=page]:bg-base-200";

export default function HamburgerDropdown() {
    return (
        <Menu>
            {({ open }) => (
                <>
                    <MenuButton
                        aria-label={open ? "Close menu" : "Open menu"}
                        className={`grid place-items-center size-11 rounded-full border-[1.5px] border-primary/40 text-ink cursor-pointer transition-colors duration-160 ease-gentle hover:bg-base-200 data-open:bg-base-200 ${focusRing}`}
                    >
                        {open ? (
                            <XMarkIcon aria-hidden="true" className="size-5" />
                        ) : (
                            <Bars3Icon aria-hidden="true" className="size-5" />
                        )}
                    </MenuButton>
                    <MenuItems
                        anchor={{ to: "bottom end", gap: 8 }}
                        transition
                        className="z-50 w-60 p-1.5 rounded-2xl bg-white shadow-sheet ring-1 ring-primary/20 focus:outline-none origin-top-right transition duration-160 ease-gentle data-closed:scale-95 data-closed:opacity-0"
                    >
                        {links.map(({ to, label }) => (
                            <MenuItem key={to}>
                                <NavLink to={to} end className={itemClass}>
                                    {label}
                                </NavLink>
                            </MenuItem>
                        ))}
                        <div
                            className="my-1.5 mx-3.5 h-px bg-primary/20"
                            role="separator"
                        />
                        <MenuItem>
                            <a
                                href="https://healthytechbalance.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={itemClass}
                            >
                                Work with Jessica
                                <ExternalArrow />
                            </a>
                        </MenuItem>
                    </MenuItems>
                </>
            )}
        </Menu>
    );
}

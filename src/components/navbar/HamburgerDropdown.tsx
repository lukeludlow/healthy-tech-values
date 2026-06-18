import { useNavigate } from "react-router";
import {
    Dropdown,
    DropdownButton,
    DropdownItem,
    DropdownMenu,
} from "@/components/catalyst-ui-kit/dropdown.tsx";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function HamburgerDropdown() {
    const navigate = useNavigate();

    return (
        <Dropdown>
            <DropdownButton outline aria-label="Open menu">
                <Bars3Icon />
            </DropdownButton>
            <DropdownMenu anchor="bottom end">
                <DropdownItem onClick={() => navigate("/")}>Home</DropdownItem>
                <DropdownItem onClick={() => navigate("/quiz")}>
                    Quiz
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/results")}>
                    Results
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/learn")}>
                    Learn
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/resources")}>
                    Resources
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

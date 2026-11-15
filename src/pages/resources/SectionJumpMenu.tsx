import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { pillLink } from "@/components/ui/styles.ts";

export type PageSection = { id: string; title: string };

/** How far below the viewport top a section must reach to count as current. */
const ACTIVE_OFFSET_PX = 96;

/**
 * Tracks which section the reader is in: the last one whose top has passed
 * just under the sticky bar. Null while the reader is still above the first.
 */
function useActiveSection(ids: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        let frame = 0;

        function update() {
            frame = 0;
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;
            let next: string | null = null;
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const top = el.getBoundingClientRect().top;
                if (
                    top <= ACTIVE_OFFSET_PX ||
                    (atBottom && top < window.innerHeight)
                ) {
                    next = id;
                }
            }
            setActiveId(next);
        }

        function schedule() {
            if (!frame) frame = window.requestAnimationFrame(update);
        }

        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        return () => {
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [ids]);

    return activeId;
}

const itemClass =
    "flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-ink data-focus:bg-base-200 aria-[current=location]:font-semibold aria-[current=location]:bg-base-200";

/**
 * Sticky "On this page" bar: a pill that names the current section and opens
 * a menu of every section, so readers can jump from anywhere on a long page.
 */
export default function SectionJumpMenu({
    sections,
}: {
    sections: PageSection[];
}) {
    const [ids] = useState(() => sections.map((s) => s.id));
    const activeId = useActiveSection(ids);
    const active = sections.find((s) => s.id === activeId);

    return (
        <nav
            aria-label="On this page"
            className="sticky top-0 z-30 flex items-center h-16 px-6 bg-white border-b border-primary/20 print:hidden"
        >
            <div className="w-full max-w-[1040px] mx-auto">
                <Menu>
                    <MenuButton
                        className={`group min-h-11 max-w-full data-open:bg-base-200 ${pillLink}`}
                    >
                        <span
                            className={
                                active
                                    ? "sr-only sm:not-sr-only font-medium text-ink-muted"
                                    : undefined
                            }
                        >
                            On this page
                        </span>
                        {active && (
                            <>
                                <span
                                    aria-hidden="true"
                                    className="hidden sm:block self-stretch w-px my-0.5 mx-1 bg-primary/30"
                                />
                                <span className="min-w-0 truncate">{active.title}</span>
                            </>
                        )}
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="shrink-0 size-4 text-primary transition-transform duration-160 ease-gentle group-data-open:rotate-180 motion-reduce:transition-none"
                        />
                    </MenuButton>
                    <MenuItems
                        anchor={{ to: "bottom start", gap: 8, padding: 16 }}
                        transition
                        className="z-50 w-[min(320px,calc(100vw-32px))] p-1.5 rounded-2xl bg-white shadow-sheet ring-1 ring-primary/20 focus:outline-none origin-top-left transition duration-160 ease-gentle data-closed:scale-95 data-closed:opacity-0 motion-reduce:transition-none"
                    >
                        {sections.map(({ id, title }) => (
                            <MenuItem key={id}>
                                <a
                                    href={`#${id}`}
                                    aria-current={
                                        id === activeId ? "location" : undefined
                                    }
                                    className={itemClass}
                                >
                                    {title}
                                </a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            </div>
        </nav>
    );
}

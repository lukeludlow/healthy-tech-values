import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { focusRing } from "@/components/ui/styles.ts";

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
 * Sticky "On this page" bar: the current section's name leads and opens a
 * menu of every section, with quiz-style progress segments showing how far
 * down the page the reader is.
 */
export default function SectionJumpMenu({
    sections,
}: {
    sections: PageSection[];
}) {
    const [ids] = useState(() => sections.map((s) => s.id));
    const activeId = useActiveSection(ids);
    const activeIndex = sections.findIndex((s) => s.id === activeId);
    const active = sections[activeIndex];

    return (
        <nav
            aria-label="On this page"
            className="sticky top-0 z-30 flex items-center h-16 px-6 bg-white border-b border-primary/20 print:hidden"
        >
            <div className="w-full max-w-[1040px] mx-auto flex items-center gap-4">
                <Menu>
                    <MenuButton
                        className={`group min-w-0 -ml-3 inline-flex items-center gap-2 min-h-11 px-3 rounded-full text-left cursor-pointer transition-colors duration-160 ease-gentle hover:bg-base-200 data-open:bg-base-200 ${focusRing}`}
                    >
                        <span className="min-w-0 truncate text-[17px] font-[650] tracking-[-0.01em] text-ink">
                            {active ? active.title : "On this page"}
                        </span>
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
                <div className="ml-auto flex shrink-0 items-center gap-3">
                    <span className="hidden sm:inline text-[15px] font-semibold text-ink-muted tabular-nums">
                        {active ? (
                            <>
                                {activeIndex + 1} of {sections.length}
                                <span className="sr-only"> sections</span>
                            </>
                        ) : (
                            `${sections.length} sections`
                        )}
                    </span>
                    <ol aria-hidden="true" className="flex items-center gap-1">
                        {sections.map(({ id }, i) => (
                            <li
                                key={id}
                                className={`h-1.5 w-3 sm:w-6 rounded-full transition-colors duration-200 ease-gentle ${
                                    i <= activeIndex ? "bg-primary" : "bg-primary/18"
                                } ${i === activeIndex ? "outline-[1.5px] outline-solid outline-ink outline-offset-1" : ""}`}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </nav>
    );
}

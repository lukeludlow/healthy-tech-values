import { useAtom } from "jotai";
import { answersAtom } from "@/state/state.ts";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Link } from "react-router";
import {
    ArrowDownTrayIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    PrinterIcon,
} from "@heroicons/react/16/solid";
import ValueDetails from "@/components/quiz/results/ValueDetails.tsx";
import { focusRing, pillLink, primaryButton } from "@/components/ui/styles.ts";

type ValueResult = {
    value: string;
    points: number;
};

export default function Results() {
    const [answers] = useAtom(answersAtom);
    const cardRef = useRef<HTMLDivElement>(null);
    const [expandedValues, setExpandedValues] = useState<Set<string>>(
        new Set(),
    );

    function handleValueClick(value: string) {
        setExpandedValues((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            } else {
                next.add(value);
            }
            return next;
        });
    }

    const valuesResults: ValueResult[] = answers
        .reduce((acc, choice) => {
            const existingEntry = acc.find(
                (item) => item.value === choice.value,
            );

            if (existingEntry) {
                existingEntry.points += 1;
            } else {
                acc.push({
                    value: choice.value,
                    points: 1,
                });
            }

            return acc;
        }, [] as ValueResult[])
        .sort((a, b) => b.points - a.points);

    const maxScore = valuesResults[0]?.points ?? 1;

    async function handleDownload() {
        if (!cardRef.current) return;
        const dataUrl = await toPng(cardRef.current, {
            backgroundColor: "#fff",
            pixelRatio: 2,
        });
        const link = document.createElement("a");
        link.download = "my-core-values.png";
        link.href = dataUrl;
        link.click();
    }

    return (
        <div className="flex-1 min-h-full px-3 pt-6 pb-24 md:pt-12 bg-base-200 print:p-0 print:bg-transparent">
            <div
                ref={cardRef}
                className="max-w-[680px] mx-auto px-5 py-7 md:px-11 md:py-10 rounded-[28px] bg-white shadow-sheet print:p-0 print:shadow-none"
            >
                <h1 className="text-[clamp(2.25rem,6vw,3rem)] font-[750] leading-[1.05] tracking-[-0.03em] text-ink">
                    Your Core Values
                </h1>
                <p className="mt-2.5 text-[17px] leading-[1.55] text-ink-muted">
                    Based on your answers, here are the values that matter most
                    to you.
                </p>

                {valuesResults.length === 0 ? (
                    <div className="grid justify-items-start gap-3.5 mt-7 text-[17px] text-ink-muted">
                        <p>
                            Answer the quiz questions to see your ranked values.
                        </p>
                        <Link to="/quiz" className={pillLink}>
                            Take the Core Values Quiz
                        </Link>
                    </div>
                ) : (
                    <ol className="grid gap-2.5 mt-7">
                        {valuesResults.map((valueResult, index) => {
                            const isExpanded = expandedValues.has(
                                valueResult.value,
                            );
                            const isTop = valueResult.points === maxScore;
                            const panelId = `value-goals-${index}`;
                            return (
                                <li
                                    key={valueResult.value}
                                    className={`rounded-[18px] border-[1.5px] break-inside-avoid ${
                                        isTop
                                            ? "border-primary bg-base-200 shadow-[inset_0_0_0_1px_var(--color-primary)]"
                                            : "border-primary/35 bg-white"
                                    }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isExpanded}
                                        aria-controls={panelId}
                                        onClick={() =>
                                            handleValueClick(valueResult.value)
                                        }
                                        className={`group grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 gap-y-2.5 sm:gap-x-3.5 w-full p-3.5 sm:px-[18px] sm:py-4 rounded-[18px] text-left text-ink cursor-pointer ${focusRing}`}
                                        style={{
                                            gridTemplateAreas:
                                                '"rank name pts chev" "rank bar bar bar"',
                                        }}
                                    >
                                        <span
                                            style={{ gridArea: "rank" }}
                                            className={`grid place-items-center rounded-full border-2 border-primary font-bold tabular-nums ${
                                                isTop
                                                    ? "size-10 bg-primary text-[19px] text-white"
                                                    : "size-[34px] bg-white text-[15px]"
                                            }`}
                                        >
                                            {index + 1}
                                        </span>
                                        <span
                                            style={{ gridArea: "name" }}
                                            className={
                                                isTop
                                                    ? "text-[21px] font-bold tracking-[-0.015em]"
                                                    : "text-[17px] font-[650] tracking-[-0.01em]"
                                            }
                                        >
                                            {valueResult.value}
                                        </span>
                                        <span
                                            style={{ gridArea: "pts" }}
                                            className="text-[15px] font-semibold tabular-nums text-ink-muted"
                                        >
                                            {valueResult.points}{" "}
                                            {valueResult.points === 1
                                                ? "pt"
                                                : "pts"}
                                        </span>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            style={{ gridArea: "chev" }}
                                            className="size-[18px] text-primary transition-transform duration-200 ease-gentle group-aria-expanded:rotate-180 print:hidden"
                                        />
                                        <span
                                            aria-hidden="true"
                                            style={{ gridArea: "bar" }}
                                            className={`block rounded-full bg-primary/15 overflow-hidden ${
                                                isTop ? "h-2" : "h-1.5"
                                            }`}
                                        >
                                            <span
                                                className="block h-full rounded-full bg-primary"
                                                style={{
                                                    width: `${Math.round((valueResult.points / maxScore) * 100)}%`,
                                                }}
                                            />
                                        </span>
                                    </button>
                                    {isExpanded && (
                                        <div
                                            id={panelId}
                                            className={`px-3.5 pb-4 sm:pr-[18px] sm:pb-[18px] ${isTop ? "sm:pl-[72px]" : "sm:pl-[66px]"}`}
                                        >
                                            <p className="mb-2.5 text-sm font-[650] text-ink">
                                                Suggested goals
                                            </p>
                                            <ValueDetails
                                                value={valueResult.value}
                                                onTint={isTop}
                                            />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                )}
            </div>

            {valuesResults.length > 0 && (
                <div className="grid gap-3.5 max-w-[680px] mx-auto mt-7 print:hidden">
                    <div className="flex flex-wrap gap-2.5">
                        <button
                            type="button"
                            onClick={handleDownload}
                            className={pillLink}
                        >
                            <ArrowDownTrayIcon
                                aria-hidden="true"
                                className="size-4 text-primary"
                            />
                            Download as Image
                        </button>
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className={pillLink}
                        >
                            <PrinterIcon
                                aria-hidden="true"
                                className="size-4 text-primary"
                            />
                            Print
                        </button>
                    </div>
                    <Link to="/learn#core-values" className={primaryButton}>
                        Next Step: Understand Your Values
                        <ChevronRightIcon
                            aria-hidden="true"
                            className="shrink-0 size-[18px]"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}

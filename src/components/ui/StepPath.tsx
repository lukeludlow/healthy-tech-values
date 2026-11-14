export type Step = {
    number: string;
    title: string;
    description: string;
};

/**
 * Numbered steps joined by a line: down the page on mobile,
 * across it from the md breakpoint up.
 */
export default function StepPath({ steps }: { steps: Step[] }) {
    return (
        <ol className="relative grid gap-9 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
                <li
                    key={step.number}
                    className="relative grid content-start grid-cols-[48px_1fr] gap-x-5 md:grid-cols-1 md:gap-y-4 not-last:before:absolute not-last:before:content-[''] not-last:before:top-[52px] not-last:before:-bottom-8 not-last:before:left-[23px] not-last:before:w-0.5 not-last:before:bg-primary/45 md:not-last:before:top-[23px] md:not-last:before:bottom-auto md:not-last:before:left-16 md:not-last:before:-right-7 md:not-last:before:w-auto md:not-last:before:h-0.5"
                >
                    <span
                        aria-hidden="true"
                        className="grid place-items-center size-12 rounded-full border-2 border-primary bg-white text-xl font-bold tabular-nums text-ink"
                    >
                        {step.number}
                    </span>
                    <div>
                        <h3 className="mt-2.5 mb-2 md:mt-1 text-[21px] font-[650] tracking-[-0.015em] text-ink">
                            {step.title}
                        </h3>
                        <p className="text-[17px] leading-[1.6] text-ink-muted text-pretty">
                            {step.description}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    );
}

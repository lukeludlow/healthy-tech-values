import { useAtom } from "jotai";
import { answersAtom } from "@/state/state.ts";

type ValueResult = {
    value: string;
    points: number;
};

export default function Results() {
    const [answers] = useAtom(answersAtom);

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

    return (
        <div className="flex flex-col gap-6 py-6 max-w-xl mx-auto w-full">
            <div className="text-center flex flex-col gap-2 mb-2">
                <h1 className="text-4xl font-bold text-primary">
                    Your Core Values
                </h1>
                <p className="text-base-content/70 text-sm">
                    Based on your answers, here are the values that matter most
                    to you.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {valuesResults.map((valueResult, index) => (
                    <div
                        key={valueResult.value}
                        className={[
                            "flex flex-col rounded-xl p-4 gap-2 text-primary",
                            valueResult.points === maxScore
                                ? "border-2 border-primary bg-base-200"
                                : "border border-primary",
                        ].join(" ")}
                    >
                        <div className="flex flex-row items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold shrink-0">
                                {index + 1}
                            </span>
                            <span className="flex-1 font-bold text-base">
                                {valueResult.value}
                            </span>
                            <span className="text-sm font-semibold shrink-0 text-primary/80">
                                {valueResult.points} pts
                            </span>
                        </div>

                        <div className="w-full h-2 rounded-full bg-base-300 overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all"
                                style={{
                                    width: `${Math.round((valueResult.points / maxScore) * 100)}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

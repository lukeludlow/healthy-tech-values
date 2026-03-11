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
            // Check if we already have an entry for this healthyTechValue
            const existingEntry = acc.find(
                (item) => item.value === choice.value,
            );

            if (existingEntry) {
                // If it exists, add to the existing points
                existingEntry.points += 1;
            } else {
                // If not, push a new entry
                acc.push({
                    value: choice.value,
                    points: 1,
                });
            }

            return acc;
        }, [] as ValueResult[])
        .sort((a, b) => b.points - a.points); //  sort descending

    return (
        <div className={"flex flex-col"}>
            <div className={"text-4xl font-bold text-center text-primary"}>
                Results
            </div>
            <div className={"flex flex-col gap-1"}>
                {valuesResults.map((valueResult) => (
                    <div
                        key={`${JSON.stringify(valueResult)}`}
                        className={
                            "flex flex-col border border-primary rounded text-primary p-1"
                        }
                    >
                        <div className={"flex flex-row justify-between p-3"}>
                            <span className={"font-bold"}>
                                {valueResult.value}
                            </span>
                            <span className={"font-bold"}>
                                {valueResult.points}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

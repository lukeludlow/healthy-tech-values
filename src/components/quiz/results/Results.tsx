import { useAtom } from "jotai";
import { selectedChoicesAtom } from "@/state/state.ts";
import { getChoiceRank } from "@/components/quiz/getChoiceRank.ts";

type ValueResult = {
    healthyTechValue: string;
    points: number;
};

export default function Results() {
    const [selectedChoices] = useAtom(selectedChoicesAtom);

    const valuesResults: ValueResult[] = selectedChoices
        .reduce((acc, choice) => {
            const rank = getChoiceRank(choice, selectedChoices);
            const points = getPointsForRank(rank);

            // Skip if points are null
            if (points === null) {
                return acc;
            }

            // Check if we already have an entry for this healthyTechValue
            const existingEntry = acc.find(
                (item) => item.healthyTechValue === choice.healthyTechValue,
            );

            if (existingEntry) {
                // If it exists, add to the existing points
                existingEntry.points += points;
            } else {
                // If not, push a new entry
                acc.push({
                    healthyTechValue: choice.healthyTechValue,
                    points: points,
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
            <div>
                {valuesResults.map((valueResult) => (
                    <div key={`${JSON.stringify(valueResult)}`}>
                        <span>
                            {valueResult.healthyTechValue}: {valueResult.points}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

    function getPointsForRank(rank: number | null) {
        switch (rank) {
            case 1:
                return 5;
            case 2:
                return 4;
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return 1;
            default:
                return null;
        }
    }
}

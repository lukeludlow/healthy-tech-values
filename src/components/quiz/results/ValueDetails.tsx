import { VALUE_GOALS } from "@/data/goalsData.ts";

export default function ValueDetails({ value }: { value: string }) {
    const goals = VALUE_GOALS[value] ?? [];
    return (
        <ul className="mt-2 flex flex-col gap-1.5 pl-1">
            {goals.map((goal) => (
                <li
                    key={goal}
                    className="flex items-start gap-2 text-sm text-base-content/80"
                >
                    <span className="text-primary mt-0.5 shrink-0">→</span>
                    {goal}
                </li>
            ))}
        </ul>
    );
}
